import React from 'react';
import {BsBriefcaseFill} from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolio from './images/port.PNG';
import calculator from './images/reactCalc.PNG';
import dataViewer from './images/dataviewer.PNG';
import abc from './images/abc.jpg';


function Portfolio(){
    return(
        <div className="project-item">
            <BsBriefcaseFill/>
            <h6>Portfolio Site</h6>
            <p>
                This is the personal portfolio you're currently browsing. 
                It created in React embracing the new react-hooks-API, 
                exclusively using functional components rather than class components.
            </p>
            <div id="embed">
                <img width='inherit' height="150px" src={portfolio} alt="portfolio" />
            </div>
            <button><a href="/">Check It</a></button>
        </div>
    );
}
function SeniorSchool(){
    return(
    <div className="project-item">
        <BsBriefcaseFill/>
        <h6>School Website</h6>
        <p>
            Abothuguchi.co.ke is a static site based on HTML, CSS, and simple JavaScript. 
            The site's purpose is to show important information to both parents and students. 
            A student portal module is to be added.
        </p>
        <div id="embed">
                <img width='inherit' height="150px" src={abc} alt="ABC Boys" />
        </div>
        <button><a href="https://github.com/Harun281/student_ims" target="_blank" rel="noopener noreferrer" >Check It</a></button>
    </div>
    );
}
function DataViewer(){
    return(
    <div className="project-item">
        <BsBriefcaseFill/>
        <h6>Basic React Calculator</h6>
        <p>
        This is a simple arithmetic calculator built using react class components and mathJS library. 
        You would want to check it.
        </p>
        <div id="embed">
                <img width='inherit' height="150px" src={calculator} alt="portfolio" />
        </div>
        <button><a href="https://basic-react-calculator.netlify.app/" target="_blank" rel="noopener noreferrer"  >Check It</a></button>
    </div>
    );
}
function Tembea(){
    const restricted = ()=>{
        alert('unfortunately the app access is restricted by the client!');
    }
    return(
    <div className="project-item">
        <BsBriefcaseFill/>
        <h6>DataViewer</h6>
        <p>
        Data viewer is a single-page application that can write, access, and update data in the database. 
        The backed language is PHP, and it using the MySQL database.
        </p>
        <div id="embed">
                <img width='inherit' height="150px" src={dataViewer} alt="portfolio" />
        </div>
        
        <button><a href="/#projects" onClick={restricted}>Check It</a></button>
    </div>
    );
}

function AutoPlay () {
      const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };
      return (
        <div>
          <Slider {...sliderSettings}>
                <Portfolio />
                <SeniorSchool />
                <DataViewer />
                <Tembea />
          </Slider>
        </div>
      );
    }

function Projects(props){
    return(
        <div className='projects' id="projects">
            <h4><span className="h4line"></span>&nbsp;&nbsp;Projects</h4>
            <AutoPlay />

        </div>
    );
}

export default Projects;