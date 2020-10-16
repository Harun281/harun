import React from 'react';
import {FaUserGraduate,FaUniversity,FaCertificate,FaCalendarMinus,FaCalendarCheck} from 'react-icons/fa';
import {GiStack} from 'react-icons/gi'
import html5 from './icons/html5.png'
import css from './icons/css.jpg';
import js from './icons/js.png';
import py from './icons/py.jpg';
import php from './icons/php.png';
import sql from './icons/sql.png';
import react from './icons/react.png';
import node from './icons/node.png';


function Resume(){
    const viewCV = (e) =>{
        alert('Page not available!');
    }
    return(
        <div className="resume">
        <h5><FaUserGraduate /> Education</h5>
        <div>
            <h6><FaUniversity/> Moi University, Kenya</h6>
            <p className="resume-heads" ><FaCalendarMinus/> 2017 - Present</p>
            <p className="resume-heads" >Bsc. Computer Science</p>
            <p>
                I’m currently an undergraduate student at 
                <a href="https://www.mu.ac.ke/" target ="_blank" rel="noopener noreferrer"> Moi University</a>, 
                Eldoret, Kenya. <br/>Expected graduation year: 2021
            </p>
        </div>
        <div>
            <h6><FaCertificate /> ABC Boys' High School</h6>
            <p className="resume-heads"><FaCalendarCheck/> 2013 - 2016</p>
            <p className="resume-heads">Kenya Certificate of Secondary Education</p>
            <p>
            Completed four-year senior school studies at <a href="/#" >Abothuguchi</a> (ABC) Boys’ High, Meru, Kenya.
            <br/>Grade score: B+
            </p>
        </div>
        <button onClick={viewCV} >View/download my Resume</button>
    </div>
    );
}

function Languages(){
    return(
        <div className="lang">
            <h5><GiStack/> Languages</h5>
            <div id='languages'>
                <img src={html5} alt="html5" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={php} alt="php" />
                <img src={sql} alt="MySQL" />
                <img src={node} alt="node" />
                <img src={react} alt="React" />
                <img src={py} alt="Python" />
            </div>
        </div>
    );
}

function Stack(props){
    return(
        <div className='stack' id="stack">
            <h4><span className="h4line"></span>&nbsp;&nbsp;My Stack</h4>
            <Languages />
            <Resume />

        </div>
    );
}

export default Stack;