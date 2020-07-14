import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faMapMarkerAlt,
    faEnvelope,
    faPhone
} from '@fortawesome/free-solid-svg-icons';
import{
    faGithub,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import './contact.css';

const contact = () => {
    return (
        <div>
            <h1 className="page-title">
                Contact
            </h1>
            <div class="topcardstyle" id="contactcard">
                <div className="container">                
                    <FontAwesomeIcon className="contacticon" icon={faMapMarkerAlt}/>
                    <p className="contactinfo"><a target="__blank" href="https://www.google.com/maps/place/Reno,+NV/@39.557847,-119.9909255,11z/data=!3m1!4b1!4m5!3m4!1s0x809940ae9292a09d:0x40c5c5ce7438f787!8m2!3d39.5296329!4d-119.8138027">
                        Reno, Nevada    
                    </a></p>
                </div>
                <div className="container">
                    <FontAwesomeIcon className="contacticon" icon={faEnvelope}/>
                    <p className="contactinfo"><a href="mailto:sidney.inouye1@gmail.com">sidney.inouye1@gmail.com</a></p>
                </div>
                <div className="container">
                    <FontAwesomeIcon className="contacticon" icon={faPhone}/>
                    <p className="contactinfo"><a href="tel:+17754538180">(775) 453-8180</a></p>
                </div>
                <div className="container">
                    <FontAwesomeIcon className="contacticon" icon={faGithub}/>
                    <p className="contactinfo"><a target="__blank" href="https://github.com/sinouye">Github</a></p>
                </div>
                <div className="container">
                    <FontAwesomeIcon className="contacticon" icon={faLinkedin}/>
                    <p className="contactinfo"><a target="__blank" href="https://www.linkedin.com/in/sidney-inouye/">LinkedIn</a></p>
                </div>
            </div>
        </div>
    )
}

export default contact;