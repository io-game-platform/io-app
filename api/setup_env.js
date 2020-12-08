require("dotenv").config({path: './.env'});

console.log(process.env)

module.exports = {
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
    }
};

//module.exports = () => {
//    if (process.env.NODE_ENV === "test") {
//        dotenv.config({path: ".env.test"});
//    } else {
//        dotenv.config();
//    }
//}
