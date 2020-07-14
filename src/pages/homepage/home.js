import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';
import {
    ScrollView,
    Dimensions,
} from 'react-native';

import MyFace from '../../assets/images/my_face.jpg';
import ResumePDF from '../../assets/pdfs/SidneyInouye_Resume.pdf';
import './home.css';

const win = Dimensions.get('window');

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            width: win.width * 0.4,
            height: win.height * 0.4
        })
    }
    
    measureView(event) {
        this.setState({
            width: event.nativeEvent.layout.width * 0.4,
            height: event.nativeEvent.layout.width * 0.4
        });
    }

    render () {
        return (
            <ScrollView
                className="home"
                onLayout={event => this.measureView(event)}
            >
                <div className="namebox">
                    <h1 className="name">
                        Sidney Inouye
                    </h1>
                    <h2>
                        Software Engineer
                    </h2>
                </div>
                <div className="myprofile">
                    <div className="topcardstyle">
                        <h3 className="cardtitle" id="about-title">About Me</h3>
                        <div className="container">
                            <p
                                className="cardtext"
                                id="about"
                            >
                                Hello, my name is Sidney Inouye. 
                                I am a recent graduate from the University of Nevada, Reno, graduating with a degree in Computer Science and Engineering in May 2020. 
                                My interests in Computer Science is in mobile application development, front-end development, and full-stack development.
                                <br />
                                <br />
                                Outside of coding, I like to explore creative outlets, such as drawing, writing, and playing the piano. 
                                <br />
                                <br />
                                If you want to learn more about me, <NavLink exact activeClassName="current" to="/about">click here.</NavLink> 
                                <br />
                                <br />
                                If you want to download my resume, <a href={ResumePDF}>click here.</a>
                            </p>   
                            <img 
                                className="img" 
                                src={MyFace} 
                                alt="myface"
                                
                            />      
                            <div class="clear"/>
                        </div>
                    </div>
                    <Card className="cardstyle">
                        <Card.Body>
                            <h3 className="cardtitle">Current Project</h3>
                            <Card.Text className="cardtext">
                                Currently working on personal website using Javascript and other Javascript technologies.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="cardstyle">
                        <Card.Body>
                            <h3 className="cardtitle">Languages</h3>
                            <Card.Text className="cardtext">
                                <ul className="squarelist">
                                    <li>C/C++</li>
                                    <li>C#</li>
                                    <li>Dart</li>
                                    <li>GLSL</li>
                                    <li>Java</li>
                                    <li>Javascript</li>
                                    <li>Python</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="cardstyle">
                        <Card.Body>
                            <h3 className="cardtitle">Technologies</h3>
                            <Card.Text className="cardtext">
                                <ul className="squarelist">
                                    <li>Express.js</li>
                                    <li>Flutter</li>
                                    <li>Node.js</li>
                                    <li>React.js</li>
                                    <li>Unity</li>
                                    <li>Unreal Engine</li>
                                    <li>VSCode</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <footer></footer>
            </ScrollView>
        );
    }
}