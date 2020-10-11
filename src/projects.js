import React from 'react';
import {BsBriefcaseFill} from 'react-icons/bs';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import portfolio from './images/portfolio.PNG';


function Portfolio(){
    return(
        <div className="project-item">
            <BsBriefcaseFill/>
            <h6>Portfolio</h6>
            <p>
            Lorem ipsum is so ubiquitous because it is so versatile. 
            Select how many paragraphs you want, copy, paste, 
            and break the lines wherever it is convenient. 
            Real copy doesn't work that way.
            </p>
            <div id="embed">
                <img width='inherit' height="150px" src={portfolio} alt="portfolio" />
            </div>
            <button><a href="https://harun281.github.io/muriiki/">Check It</a></button>
        </div>
    );
}
function SeniorSchool(){
    return(
    <div className="project-item">
        <BsBriefcaseFill/>
        <h6> School</h6>
        <p>
        Lorem ipsum is so ubiquitous because it is so versatile. 
        Select how many paragraphs you want, copy, paste, 
        and break the lines wherever it is convenient. 
        Real copy doesn't work that way.
        </p>
        <div id="embed">
                <img width='inherit' height="150px" src={portfolio} alt="portfolio" />
        </div>
        <button><a href="https://harun281.github.io/muriiki/">Check It</a></button>
    </div>
    );
}
function DataViewer(){
    return(
    <div className="project-item">
        <BsBriefcaseFill/>
        <h6>DataViewer</h6>
        <p>
        Lorem ipsum is so ubiquitous because it is so versatile. 
        Select how many paragraphs you want, copy, paste, 
        and break the lines wherever it is convenient. 
        Real copy doesn't work that way.
        </p>
        <div id="embed">
                <img width='inherit' height="150px" src={portfolio} alt="portfolio" />
        </div>
        <button><a href="https://harun281.github.io/muriiki/">Check It</a></button>
    </div>
    );
}
function Tembea(){
    return(
    <div className="project-item">
        <BsBriefcaseFill/>
        <h6> Tembea</h6>
        <p>
        Lorem ipsum is so ubiquitous because it is so versatile. 
        Select how many paragraphs you want, copy, paste, 
        and break the lines wherever it is convenient. 
        Real copy doesn't work that way.
        </p>
        <div id="embed">
                <img width='inherit' height="150px" src={portfolio} alt="portfolio" />
        </div>
        
        <button><a href="https://harun281.github.io/muriiki/">Check It</a></button>
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