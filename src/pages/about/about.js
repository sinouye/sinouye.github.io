import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { ScrollView } from 'react-native';

import AmericanAVK from '../../assets/images/americanavk.PNG';
import Apesphere from '../../assets/images/Apesphere.PNG';
import Campus from '../../assets/images/campus.jpg';
import Lorable from '../../assets/images/lorable.png';
import MinerMike from '../../assets/images/minermike.png';
import OctopusDefender from '../../assets/images/octopusdefender.PNG';
import Piano from '../../assets/images/piano.jpeg';
import UNR from '../../assets/images/nevada_logo.jpeg';
import ViniRolf from '../../assets/images/vinirolf.png';

import './about.css';

export default class About extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display: 'none'
        }
    }
    
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = (event) => {
        if(event.target.body.scrollTop > 20) {
            this.setState({
                display: 'block'
            });
        } else {
            this.setState({
                display: 'none'
            });
        }    
    }
    
    render() {
        return (
            <div>
                <a href="#" id="topLink">
                    <button 
                        id="topBtn"
                        onClick={() => {
                            document.body.scrollTop = 0;
                            document.documentElement.scrollTop = 0;                        
                        }}
                    >
                        <FontAwesomeIcon className="contacticon" icon={faArrowUp}/>
                        <p className="contactinfo">
                            To Top of Page  
                        </p>
                    </button>
                </a>
                <ScrollView>
                    <h1 id="about-page-title" className="page-title">
                        About
                    </h1>
                    <div className="topcardstyle">
                        <h3 className="cardtitle" id="about-title">A Brief Introduction</h3>
                        <div className="container">
                            <p
                                className="cardtext"
                                id="about"
                            >
                                Hello. 
                                My name is Sidney Inouye. 
                                I am a recent graduate from the University of Nevada, Reno, with a major in Computer Science and Engineering. 
                                I also recently completed an internship with Lorable, Inc., a mobile application developer located in Reno, NV.
                                <br/>
                                <br/>
                                My interests in Computer Science lies in mobile app development, front-end development, and full-stack development. 
                                Some technologies I've been working on experimenting with is Javascript and other Javascript technologies, such as React.js.
                                <br/>
                                <br/>
                                This page will detail my college experience, my internship at Lorable, Inc., the projects I've completed, and interests outside of coding that I have. 
                                Please use the table of contents to jump to any section located on this page. 
                                <br/>
                                <br/>
                                Table of Contents:
                                <ul className="tableofcontent">
                                    <li className="toptableitem"><a href="#college">College Experience</a></li>
                                    <li className="tableitem"><a href="#internship">Internship</a></li>
                                    <li className="tableitem"><a href="#projects">Projects</a></li>
                                    <li className="tableitem"><a href="#interests">Interests</a></li>
                                </ul>
                            </p>   
                            <img 
                                id="about-title" 
                                src={Campus} 
                                alt="unr-campus"  
                            />      
                            <div class="clear"/>
                        </div>
                    </div>
                    <div className="cardstyle" id="anchor">
                        <a className="anchorlink" id="college"></a>
                        <h3 className="cardtitle" id="about-title">College Experience</h3>
                        <div className="container">
                            <img 
                                id="about-title"
                                src={UNR}
                                alt="unr-logo"
                            />
                            <p className="cardtext" id="about">
                                From Fall of 2016 to Spring of 2020, I attended the University of Nevada, Reno. 
                                During my time at school, I majored in Computer Science and Engineering. 
                                I took a number a wide variety of classes, including Computer Graphics, Artificial Intelligence, and Game Engine Architecture. 
                                I especially enjoyed theory-heavy classes such as Automata and Programming Languages. 
                                <br/>
                                <br/>
                                I love working on any project that gives me the opportunity to be creative. 
                                My favorite class during my time at UNR was Computer Graphics, which allowed complete control over every pixel on a computer's monitor. 
                                I really liked working with the theory behind computer graphics, such as how lighting is calculated through vertex and fragment shaders and the graphics pipeline.
                                This class really helped to bring art and computers together. 
                                <br/>
                                <br/>
                                A major part of my time at school was dedicated to playing the piano for certain non-profits. 
                                During my Freshman and Sophomore year, I participated in Music Therapy, a non-profit organization that is dedicated to playing music for retirement homes and memory care facilities around Reno. 
                                Something special about this was being able to connect with people with severe memory problems, such as dementia and Alzheimer's, as I found that no matter what, music touches people's hearts and connects humans together. 
                            </p>
                        </div>
                    </div>
                    <div className="cardstyle" id="anchor">
                        <a className="anchorlink" id="internship"></a>
                        <h3 className="cardtitle" id="about-title">Lorable, Inc.</h3>
                        <div className="container">
                            <p
                                className="cardtext"
                                id="about"
                            >
                                From February of 2020 to April of 2020, I was fortunate enough to be an intern at Lorable, Inc. 
                                I primarily worked with Dart and the Flutter framework during my internship. 
                                Most of my work was working on the front-end of the application, especially for Android devices. 
                                <br/>
                                <br/>
                                Lorable, Inc. is a start-up that is focused on developing a mobile application to allow users to write and read 2<sup>nd</sup> person stories. 
                                To find out more about their company, <a target="__blank" href="https://lorable.com/">click here</a> to go to Lorable, Inc.'s website. 
                                <br/>
                                <br/>
                                During my time at Lorable, Inc., I gained a lot of knowledge about standard mobile application architectures and was also able to experience agile development in a professional setting. 
                                Although the application was short lived, I feel a lot stronger as a programmer, especially in regards to my experience in a professional setting. 
                                I also learned during my time how much I love mobile development and front-end development. 
                            </p>   
                            <img           
                                src={Lorable} 
                                alt="lorable"  
                            />      
                            <div class="clear"/>
                        </div>
                    </div>
                    <div className="cardstyle" id="anchor">
                        <a className="anchorlink" id="projects"></a>
                        <h3 className="cardtitle" id="about-title">Projects Completed</h3>
                        <p className="cardtext" id="about-title">
                            Since learning to code, I have had the privilege to work on a number of projects, which explored different areas of Computer Science and allowed me to experiment with different languages and technologies. 
                            If you would like to jump to a specific project, please use the table of contents.
                            <br/>
                            <br/>
                            Table of Contents
                            <ul className="tableofcontent">
                                <li className="toptableitem"><a href="#projects-minermike">Miner Mike</a></li>
                                <li className="tableitem"><a href="#projects-vinirolf">Vini Rolf (VR Minigolf)</a></li>
                                <li className="tableitem"><a href="#projects-apesphere">Apesphere</a></li>
                                <li className="tableitem"><a href="#projects-octopusdefender">Octopus Defender</a></li>
                                <li className="tableitem"><a href="#projects-avk">An American AVK Automation</a></li>
                            </ul>
                        </p>
                        <hr/>
                        <h4 className="cardtitle" id="project-title">Miner Mike</h4>
                        <div className="container" id="anchor">
                        <a className="project-anchorlink" id="projects-minermike"></a>
                            <p className="cardtext" id="about-project">
                                <div className="border-container">
                                    <em>Languages</em>
                                    <ul className="project-tech">
                                        <li>C++</li>
                                    </ul>
                                    <em>Technologies</em> 
                                    <ul className="project-tech">
                                        <li>Eclipse</li>
                                        <li>OGRE</li>
                                    </ul>
                                    <em>Completion Date</em>
                                    <p id="date">Spring 2019</p>
                                </div>
                                A simple point and click game that was developed in Eclipse using OGRE and C++. 
                                This game was created on a game engine written by scratch using OGRE as a base. 
                                The premise of the game is that the player helps a snowman named Mike look for hidden treasure while avoiding evil penguins.
                            </p>
                            <img
                                id="about-title"
                                src={MinerMike}
                                alt="minermike"
                            />
                        </div>
                        <hr/>
                        <h4 className="cardtitle" id="project-title">Vini Rolf</h4>
                        <div className="container" id="anchor">
                        <a className="project-anchorlink" id="projects-vinirolf"></a>
                            <img
                                id="about-title"
                                src={ViniRolf}
                                alt="vinirolf"
                            />
                            <p className="cardtext" id="about-project">
                                <div className="border-container">
                                    <em>Languages</em>
                                    <ul className="project-tech">
                                        <li>C#</li>
                                    </ul>
                                    <em>Technologies</em> 
                                    <ul className="project-tech">
                                        <li>Unity</li>
                                        <li>Virtual Reality</li>
                                    </ul>
                                    <em>Completion Date</em>
                                    <p id="date">Spring 2019</p>
                                </div>
                                This mini golf game was developed for use on the Oculus Rift. 
                                It's a virtual reality game that allows the player to mini-golf on a virtual course with three levels. 
                                UnityVR was used in order to develop the game. 
                            </p>
                        </div>
                        <hr/>
                        <h4 className="cardtitle" id="project-title">Apesphere</h4>
                        <div className="container" id="anchor">
                        <a className="project-anchorlink" id="projects-apesphere"></a>
                            <p className="cardtext" id="about-project">
                                <div className="border-container">
                                    <em>Languages</em>
                                    <ul className="project-tech">
                                        <li>C++</li>
                                        <li>GLSL</li>
                                    </ul>
                                    <em>Technologies</em> 
                                    <ul className="project-tech">
                                        <li>Blender</li>
                                        <li>Bullet Physics</li>
                                        <li>ImageMagick</li>
                                        <li>IMGui</li>
                                        <li>OpenGL</li>
                                        <li>Visual Studio</li>
                                    </ul>
                                    <em>Completion Date</em>
                                    <p id="date">Fall 2019</p>
                                </div>
                                Apesphere is a parody of Super Monkeyball designed for the Computer Graphics course. 
                                The game features three levels where the player must tilt the table to navigate the ball into the goal. 
                                All shaders and level models were created by the team. 
                            </p>
                            <img
                                id="about-title"
                                src={Apesphere}
                                alt="apesphere"
                            />
                        </div>
                        <hr/>
                        <h4 className="cardtitle" id="project-title">Octopus Defender</h4>
                        <div className="container" id="anchor">
                        <a className="project-anchorlink" id="projects-octopusdefender"></a>
                            <img
                                id="about-title"
                                src={OctopusDefender}
                                alt="octodef"
                            />
                            <p className="cardtext" id="about-project">
                                <div className="border-container">
                                    <em>Languages</em>
                                    <ul className="project-tech">
                                        <li>N/A</li>
                                    </ul>
                                    <em>Technologies</em> 
                                    <ul className="project-tech">
                                        <li>Blender</li>
                                        <li>Unreal Engine</li>
                                    </ul>
                                    <em>Completion Date</em>
                                    <p id="date">Fall 2019</p>
                                </div>
                                Octopus Defender is a horror first-person shooter that was created by the Unreal Engine. 
                                The objective was to defend a base from octopi, which came out of the water to attack the base and the player. 
                            </p>
                        </div>
                        <hr/>
                        <h4 className="cardtitle" id="project-title">American AVK Hydrant</h4>
                        <div className="container" id="anchor">
                        <a className="project-anchorlink" id="projects-avk"></a>
                            <p className="cardtext" id="about-project">
                                <div className="border-container">
                                    <em>Languages</em>
                                    <ul className="project-tech">
                                        <li>Java</li>
                                        <li>Python</li>
                                        <li>XML</li>
                                    </ul>
                                    <em>Technologies</em> 
                                    <ul className="project-tech">
                                        <li>Android Studio</li>
                                        <li>Tensorflow</li>
                                    </ul>
                                    <em>Completion Date</em>
                                    <p id="date">Spring 2020</p>
                                </div>
                                An American AVK Automation is an image recognition application designed to recognize fire hydrants. 
                                The image recognition component was written in Python with the Tensorflow library. 
                                The application also used the GoogleMaps API in order to map where all fire hydrants are located, storing locations in a database. 
                                This was created for the Android phone.
                            </p>
                            <img
                                id="about-title"
                                src={AmericanAVK}
                                alt="AVK"
                            />
                        </div>
                    </div>
                    <div className="cardstyle" id="anchor">
                        <a className="anchorlink" id="interests"></a>
                        <h3 className="cardtitle" id="about-title">Interests</h3>
                        <p className="cardtext" id="about-title">
                            In addition to coding, I have many hobbies and interests, such as drawing, writing, and playing piano. 
                            <br/>
                            <br/>
                        </p>
                        <div className="container">
                            <img 
                                id="about-title"
                                src={Piano}
                                alt="me-at-unr"
                            />
                            <p className="cardtext" id="about">
                                The activity I enjoy the most is playing the piano.
                                <br/>
                                <br/>
                                From 2016 to 2017, I played the piano with the Musical Therapy non-profit organization, which is run by UNR students. 
                                It is an organization that brings music to those who need, helping to connect the world through song. 
                                Before joining this club, I had barely any knowledge about playing the piano, but through hard-work, I was able to learn a few basic chords and play for several concerts and many volunteering events. 
                                <br/>
                                <br/>
                                Since 2018, I've been involved with the Reno Videogame Symphony, an orchestra located in Reno that is dedicated to playing and teaching music through videogame soundtracks. 
                                Through this organization, I was able to learn a lot about playing in an orchestra and became more comfortable with playing the piano. 
                            </p>
                        </div>
                    </div>
                    <footer></footer>
                </ScrollView>
            </div>
        );
    }
}

const topButton = document.getElementById("topBtn");
    
const topFunction = () => {
    
}