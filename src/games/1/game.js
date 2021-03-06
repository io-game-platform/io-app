import Phaser from "phaser";

// Constants
var SCREEN_WIDTH = 800, SCREEN_HEIGHT = 600;
var MAP_WIDTH = 4000, MAP_HEIGHT = 3000;
var center_x = SCREEN_WIDTH / 2, center_y = SCREEN_HEIGHT / 2;

var maxPlayers = 3;
var maxBots = 12;
var maxBullets = 200;

var reloadTime = 500;
var BLAST_SIZE = 4;
var BOT_RANGE = 300;

//
var players, bots, bullets;
var respawn_button, name_input;
var leaderboard, ui_rect, game_name;

var player_main;
var numBots = 0, reloadingUntil = 0;
var leftDown = false, middleDown = false;
var mouseX = 0, mouseY = 0;

export var config = {
    type: Phaser.WEBGL,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#2d2d2d',
    parent: 'phaser-example',
    physics: {default: 'arcade'},
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    dom: {
        createContainer: true
    },
};


//var game = new Phaser.Game(config);


var Bullet = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize: function Bullet (scene, owner, owner_ref, sprite, lifespan)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, sprite);
        this.incX = 0;
        this.incY = 0;
        this._owner = owner;
        this.owner_ref = owner_ref;
        this.lifespan = lifespan;
        this.speed = Phaser.Math.GetSpeed(600, 1);
    },

    get_owner: function ()
    {
        return this._owner
    },

    fire: function (x, y, init_x, init_y)
    {
        this.setActive(true);
        this.setVisible(true);

        this.setPosition(init_x, init_y);

        var angle = Phaser.Math.Angle.Between(x, y, init_x, init_y);

        this.setRotation(angle);

        this.incX = Math.cos(angle);
        this.incY = Math.sin(angle);
    },
    
    fanned_fire: function (x, y, init_x, init_y, i, n)
    {
        this.setActive(true);
        this.setVisible(true);

        this.setPosition(init_x, init_y);

        var angle = Phaser.Math.Angle.Between(x, y, init_x, init_y) + (Math.PI / 4) - ((i/n) * Math.PI / 2);

        this.setRotation(angle);

        this.incX = Math.cos(angle);
        this.incY = Math.sin(angle);
    },

    update: function (time, delta)
    {
        this.lifespan -= delta;

        this.x -= this.incX * (this.speed * delta);
        this.y -= this.incY * (this.speed * delta);

        if (this.lifespan <= 0)
        {
            this.destroy();
        }
    },

    destroy_bullet: function()
    {
        this.destroy();
    }
});


var Bot = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize: function Bot (scene, name = 'Bot')
    {
        Phaser.GameObjects.Image.call(this, scene, Phaser.Math.Between(-1000000,0), Phaser.Math.Between(-1000000,0), 'ship');
        this.setDepth(1);
        this._name = name;
        this._score = 0;

        this.type = Phaser.Math.Between(0, 1);
        this.speed = Phaser.Math.GetSpeed(400, 1);
        this.start_x = 0;
        this.start_y = 0;

        this.reloadingUntil = 0;

        this._show_name(scene);
    },

    spawn: function (start_x, start_y)
    {
        this.setActive(true);
        this.setVisible(true);
        this.start_x = start_x;
        this.start_y = start_y;
        if (this.type == 0) {  // Square
            this._init_square();
        } else if (this.type == 1) {  // Circle 8
            this._init_eight();
        }
    },

    update: function (time, delta)
    {
        this._update_name();

        if (this.type == 0) {
            this._move_square(this.time);
        } else if (this.type == 1) {
            this._move_eight(this.time);
        }

        this.x = Math.max(0, Math.min(MAP_HEIGHT, this.x));
        this.y = Math.max(0, Math.min(MAP_WIDTH, this.y));

        this.time += 1;
    },

    fire: function (x, y, time, lifespan)
    {
        /* Fire single bullet. */
        var bullet = bullets.get(this._name, this, 'bullet1', lifespan);

        bullet.fire(x, y, this.x, this.y);
        this.reloadingUntil = time + reloadTime;
    },

    blast: function (x, y, time)
    {
        /* Fire blast of BLAST_SIZE bullets. */
        var bullet;
        for(var i=0; i<BLAST_SIZE+1; i++)
        {
            bullet = bullets.get(this._name, this, 'bullet2', 400)
            bullet.fanned_fire(mouseX, mouseY, this.x, this.y, i, BLAST_SIZE)
        }
        this.reloadingUntil = time + reloadTime;
    },

    _show_name: function (scene)
    {
        /* Display bot name underneath it. */
        this.name = scene.add.text(this.x, this.y, this._name);
        this.name.setFontFamily('Times New Roman')
        this.name.setFontSize(24);
        this.name.setActive(true);
        this.name.setVisible(true);
        this.nameOffset = this.name.width/2;
    },

    _hide_name: function (scene)
    {
        this.name.setActive(false);
        this.name.setVisible(false);
    },

    _update_name: function ()
    {
        this.name.setPosition(this.x-this.nameOffset, this.y+60)
    },

    _init_square: function ()
    {
        /* Init for square movement pattern. */
        this.side_len = Phaser.Math.Between(100, 200);
        this.time = Phaser.Math.Between(0, 100);

        this.setPosition(this.start_x, this.start_y);

        var i;
        for (i = 0; i < this.time; i++){
            this._move_square(i);
        }
    },

    _move_square: function (time)
    {
        /* Update for square movement pattern. */
        var timed_side_len = this.side_len / this.speed;
        var i = time % (timed_side_len * 4);

        if (i < timed_side_len) {
            this.y += this.speed;
            this.setRotation(Math.PI);
        } else if (i < timed_side_len * 2) {
            this.x += this.speed;
            this.setRotation(Math.PI / 2);
        } else if (i < timed_side_len * 3) {
            this.y -= this.speed;
            this.setRotation(0);
        } else {
            this.x -= this.speed;
            this.setRotation(Math.PI * 3 / 2);
        }
    },

    _init_eight: function ()
    {
        /* Init for circle eight movement pattern. */
        this.diameter = Phaser.Math.Between(100, 500);
        this.step_value = 144;
        this.step = Math.PI / this.step_value;

        this.time = Phaser.Math.Between(0, 100);

        this.setPosition(this.start_x, this.start_y);

        this.direction = false;
        var i;
        for (i = 0; i < this.time; i++){
            this._move_eight(i);
        }
    },

    _move_eight: function (time)
    {
        /* Update for circle eight movement pattern. */
        if (time % (2 * this.step_value) - Math.floor(this.step_value / 2) == 0) {
            this.direction = !this.direction;
        }

        if (this.direction) {
            this.x += (Math.sin((time + 1) * this.step) - Math.sin(time * this.step)) * this.diameter;
            this.y += (Math.cos((time + 1) * this.step) - Math.cos(time * this.step)) * this.diameter;
            this.setRotation(Math.cos(time * this.step) + Math.PI / 2);
        } else {
            this.x += -(Math.sin((time + 1) * this.step) - Math.sin(time * this.step)) * this.diameter;
            this.y += (Math.cos((time + 1) * this.step) - Math.cos(time * this.step)) * this.diameter;
            this.setRotation(-Math.cos(time * this.step) - Math.PI / 2);
        }
    },

    destroy_bot: function ()
    {
        if(this.active){
            this.destroy();
            this._hide_name();
            numBots -= 1;
        }
    },

    shoot_nearest: function (time)
    {
        /* Shoot nearest game object to bot. */
        var closest = this.scene.physics.closest(this);

        if (typeof closest === 'undefined'){
            return;
        }

        var dist = Math.pow(Math.pow(this.x - closest.x, 2) + Math.pow(this.y - closest.y, 2), .5)

        if (time > this.reloadingUntil && dist < BOT_RANGE)
        {
            var x_noise = Phaser.Math.Between(-10, 10);
            var y_noise = Phaser.Math.Between(-10, 10);
            this.fire(closest.x + x_noise, closest.y + y_noise, time, 500);
        }
    },

    owns: function (bullet)
    {
        /* Does this ship own bullet? */
        return bullet.get_owner() == this._name;
    }
});


var Player = new Phaser.Class({

    Extends: Bot,

    initialize: function Player (scene, is_main, name)
    {
        Phaser.GameObjects.Image.call(this, scene, 0, 0, 'ship');
        this.setDepth(2);
        this.is_main = is_main;
        this._name = name;
        this._score = 0;

        this.speed = Phaser.Math.GetSpeed(0, 1);
        this.speedMax = 400;
        this.reloadingUntil = 0;

        this._show_name(scene);
    },

    spawn: function ()
    {
        this.setActive(true);
        this.setVisible(true);

        this.setPosition(center_x, center_y);
    },

    update: function (time, delta)
    {
        this._update_name();

        if (this.is_main)
        {
            var angle = Phaser.Math.Angle.Between(mouseX, mouseY, this.x, this.y);
            this.setRotation(angle - Math.PI / 2);

            this.speed = (Math.abs(Math.abs(mouseX)-Math.abs(this.x)) + Math.abs(Math.abs(mouseY)-Math.abs(this.y)));
            this.speed = Phaser.Math.GetSpeed(Math.min(this.speed, this.speedMax), 1);

            this.x -= Math.cos(angle) * (this.speed * delta);
            this.y -= Math.sin(angle) * (this.speed * delta);

            if (time > this.reloadingUntil)
            {
                if (leftDown)
                {
                    this.fire(mouseX, mouseY, time, 1000);
                }
                if (middleDown)
                {
                    this.blast(mouseX, mouseY, time)
                }
            }
        }
    },

    destroy_player: function ()
    {
        // Reset score instead
        // this._score = Math.floor(this._score / 2);

        this.destroy();
        this._hide_name();

        player_main.x = center_x;
        player_main.y = center_y;

        ui_rect.setActive(true);
        ui_rect.setVisible(true);
        game_name.setActive(true);
        game_name.setVisible(true);
        name_input.setActive(true);
        name_input.setVisible(true);
        respawn_button.setActive(true);
        respawn_button.setVisible(true);
    },

});


class Leaderboard {
    constructor (scene, n_entries, bots, players) {
        this.scene = scene;
        this.n_entries = n_entries;
        this.bots = bots;
        this.players = players;

        this.entry = [];
        for (var i = 0; i < n_entries; i++) {
            var e = [];
            e[0] = scene.add.text(SCREEN_WIDTH - 200, 10 + (20 * i), i, { fixedWidth: 150, fixedHeight: 36 });
            e[1] = scene.add.text(SCREEN_WIDTH - 50, 10 + (20 * i), i, { fixedWidth: 150, fixedHeight: 36 });

            e[0].setScrollFactor(0, 0);
            e[1].setScrollFactor(0, 0);

            this.entry[i] = e;

            e[0].setDepth(2);
            e[1].setDepth(2);
        }
    }

    _list_ships () {
        // make a combined list of all bots and players
        return this.bots.getChildren().concat(this.players.getChildren());
    }

    update () {
        var ships = this._list_ships();
        ships.sort(function(a, b){return b._score - a._score});

        for (var i = 0; i < this.n_entries; i++) {
            if(typeof ships[i] !== 'undefined'){
                this.entry[i][0].text = ships[i]._name;
                this.entry[i][1].text = ships[i]._score;
            }
        }
    }
};


function spawn_bots (n)
{
    /*
    Spawns n bots into the bot group.
    */
    numBots += n;
    for (var i = 0; i < n; i++) {
        var curr_bot = bots.get('Bot '+Phaser.Math.Between(1,999));
        curr_bot.spawn(Phaser.Math.Between(i*(MAP_WIDTH/n), (i+1)*(MAP_WIDTH/n)), Phaser.Math.Between(i*(MAP_HEIGHT/n), (i+1)*(MAP_HEIGHT/n)));
    }
}

function player_hit(player, bullet)
{
    if(!player.owns(bullet))
    {
        bullet.owner_ref._score += 5;

        player.destroy_player();
        bullet.destroy_bullet();
    }
}

function bot_hit(bot, bullet)
{
    if(!bot.owns(bullet))
    {
        bullet.owner_ref._score += 5;

        bot.destroy_bot();
        bullet.destroy_bullet();
    }
}

function bot_player_collision(bot, player)
{
    bot.destroy_bot();
    player.destroy_player();
}

function preload ()
{
    /*
    Preload is called by Phaser before anything else.
    */
    this.load.image('ship', '../assets/sprites/ship.png');
    this.load.image('bullet1', '../assets/sprites/bullet.png');
    this.load.image('bullet2', '../assets/sprites/bullet2.png');
    this.load.image('button', '../assets/sprites/button.png');
    this.load.image('star', '../assets/sprites/star.png');

    var url;
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexbbcodetextplugin.min.js';
    this.load.plugin('rexbbcodetextplugin', url, true);
  
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rextexteditplugin.min.js';
    this.load.plugin('rextexteditplugin', url, true);
}


function create ()
{
    /*
    Create is called before the Phaser main loop starts.
    */
    //////////////////////
    //  Declarations    //
    //////////////////////

    this.input.setDefaultCursor('url(../assets/SC2-target-none.cur, pointer)');

    // Prevent right click context menu
    this.oncontextmenu = function (e) { e.preventDefault(); }

    // Set global variables for pointer control
    this.input.on('pointerdown', function (pointer) {
        leftDown = pointer.leftButtonDown();
        middleDown = pointer.middleButtonDown();
    });
    this.input.on('pointerup', function (pointer) {
        leftDown = pointer.leftButtonDown();
        middleDown = pointer.middleButtonDown();
    });

    //////////////////////
    //  Game objects    //
    //////////////////////

    this.cameras.main.setBounds(0, 0, MAP_WIDTH, MAP_HEIGHT);

    for(var i=0;i<80;i++)
    {
        this.add.sprite(Phaser.Math.Between(0, MAP_WIDTH), Phaser.Math.Between(0, MAP_HEIGHT), 'star', 0);
    }

    var player_bounds = new Phaser.Geom.Rectangle(0, 0, MAP_WIDTH, MAP_HEIGHT);
    players = this.physics.add.group({
        classType: Player,
        maxSize: maxPlayers + 100,
        customBoundsRectangle: player_bounds,
        collideWorldBounds: true,
        runChildUpdate: true
    });

    bots = this.physics.add.group({
        classType: Bot,
        maxSize: maxBots + 100,
        runChildUpdate: true
    });

    bullets = this.physics.add.group({
        classType: Bullet,
        maxSize: maxBullets + 100,
        runChildUpdate: true
    });


    this.physics.add.collider(players, bullets, player_hit, null, this);
    this.physics.add.collider(bots, bullets, bot_hit, null, this);
    this.physics.add.collider(bots, players, bot_player_collision, null, this);

    ////////////////////////
    //  User Interface    //
    ////////////////////////

    var rect_w = 165, rect_h = 100;
    ui_rect = this.add.rectangle(center_x-4, center_y, rect_w, rect_h, 0x555555);
    ui_rect.setOrigin(0.5, 0.5);

    game_name = this.add.text(center_x, center_y-40, 'clone.io', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
    game_name.setOrigin(0.5, 0.5);

    var initial_text = 'Enter name here';
    var editbox = null;
    // https://codepen.io/rexrainbow/pen/GaxqLZ?editors=0010
    name_input = this.add.rexBBCodeText(center_x, center_y-12, initial_text, {
        color: 'white',
        fontSize: '14px',
        fixedWidth: 140,
        fixedHeight: 20,
        //valign: 'center'
    })
        .setOrigin(0.5)
        .setInteractive()
        .on('pointerdown', function () {
            if (name_input.text === initial_text){
                name_input.text = '';
            }
            editbox = this.plugins.get('rextexteditplugin').edit(name_input);

            editbox.inputText.x = center_x;
            editbox.inputText.y = center_y-12;
        }, this);

    respawn_button = this.add.sprite(center_x, center_y+25, 'button', 0);
    respawn_button.setInteractive();
    respawn_button.on('pointerdown', function () {
        var player_name = 'Coolest Player';
        if (!(name_input.text === initial_text)){
            player_name = name_input.text;
        }
        if(editbox !== null){
            editbox.close()
        }

        player_main = players.get(true, player_name);
        player_main.spawn();

        respawn_button.setDepth(3);

        ui_rect.setActive(false);
        ui_rect.setVisible(false);
        game_name.setActive(false);
        game_name.setVisible(false);
        name_input.setActive(false);
        name_input.setVisible(false);
        respawn_button.setActive(false);
        respawn_button.setVisible(false);
    });

    leaderboard = new Leaderboard(this, 5, bots, players);

    /////////////
    //  SPAWN  //
    /////////////

    player_main = players.get(true, 'Coolest Player');
    player_main.spawn();
    player_main.destroy_player();
}


function update (time, delta)
{
    /*
    Update is called by Phaser at every timestep.
    */
    this.cameras.main.startFollow(player_main);
    var pos = this.cameras.main.getWorldPoint(this.input.mousePointer.x, this.input.mousePointer.y);
    mouseX = pos.x;
    mouseY = pos.y;

    // Each bot shoot nearest enemy
    bots.children.each(function(bot) {
        bot.shoot_nearest(time);
    }, this);

    numBots = Math.max(0, numBots);
    spawn_bots(maxBots - numBots);
    leaderboard.update();
}
