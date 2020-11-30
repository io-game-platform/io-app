import React, {Component} from "react";
import "./About.scss";
import AdamProfile from "./images/AdamProfile.png";
import AustinProfile from "./images/AustinProfile.png";
import AydenProfile from "./images/AydenProfile.jpg";
import JohnathanProfile from "./images/JohnathanProfile.jpg";
import ColeProfile from "./images/ColeProfile.jpg";
import BryanProfile from "./images/BryanProfile.png";
import MichaelProfile from "./images/MichaelProfile.jpg";
import StevenProfile from "./images/StevenProfile.png";

const contributors = [
    {name: "Adam Eastwood", image: AdamProfile, team: "Game Team", github: "Adam-Eastwood"},
    {name: "Austin Poulsen", image: AustinProfile, team: "App Team", github: "austinpoulsen"},
    {name: "Ayden Mason", image: AydenProfile, team: "App Team", github: "aydenmason"},
    {name: "Johnathan Dunker", image: JohnathanProfile, team: "App Team", github: "BinaryAura"},
    {name: "Cole Dieckhaus", image: ColeProfile, team: "Game Team", github: "coledie"},
    {name: "Bryan Lee", image: BryanProfile, team: "Game Team", github: "leebryanrobert"},
    {name: "Michael Pieper", image: MichaelProfile, team: "App Team", github: "pieperm"},
    {name: "Steven Lu", image: StevenProfile, team: "App Team", github: "sylfw6"}
];

class About extends Component {

    render() {
        return (
            <div className="about-page">
                <h1 className="page-title">About io.io</h1>
                <h3>Information</h3>
                <hr/>
                <p>.io games are simple web-based games where you compete against a large number of players or bots.
                    Often these games area sort 100-player free-for-all competition in which there is a single winner.
                    In other cases, leaderboards track the top players, and the players try to reach the top for as long as possible.
                </p>
                <p>The io.io platform was designed to host a variety of games using a common framework. Our mission is twofold:
                    <ul>
                        <li>Provide a space where players can conveniently search for and play games</li>
                        <li>Develop an intuitive, easy-to-use set of tools to develop .io games</li>
                    </ul>
                </p>
                <p>This project is entirely open source, so feel free to check out our GitHub repositories for the <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://github.com/io-game-platform/io.io">games</a> or the <a className="text-link" target="_blank" rel="noopener noreferrer" href="https://github.com/io-game-platform/io.io">app</a>.</p>
                <h3>Contributors</h3>
                <hr/>
                <div className="contributors-container">
                    {contributors.map((contributor) => {
                        return (
                            <a className="contributor-card"
                               target="_blank"
                               rel="noopener noreferrer"
                               href={`https://github.com/${contributor.github}`}>
                                <img alt={contributor.name} src={contributor.image}/>
                                <h4>{contributor.name}</h4>
                                <h5>{contributor.team}</h5>
                            </a>
                        );
                    })}
                </div>
            </div>
        );
    }

}

export default About;