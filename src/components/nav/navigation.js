import React from 'react';
import {NavLink} from 'react-router-dom';

import ResumePDF from '../../assets/pdfs/SidneyInouye_Resume.pdf';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li className='firstItem'><NavLink exact activeClassName="current" to="/">Home</NavLink></li>
                    <li><NavLink exact activeClassName="current" to="/about">About</NavLink></li>
                    <li><a href={ResumePDF} target="__blank">Resume</a></li>
                    <li><NavLink exact activeClassName="current" to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}



export default Navigation;