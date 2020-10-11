import React from 'react';


function Brief(){
    return(
        <div className="brief">
            <p>
            Lorem ipsum is so ubiquitous because it is so versatile. 
            Select how many paragraphs you want, copy, paste, 
            and break the lines wherever it is convenient. 
            Real copy doesn't work that way.
            </p>
            <p>
            Lorem ipsum is so ubiquitous because it is so versatile. 
            Select how many paragraphs you want, copy, paste, 
            and break the lines wherever it is convenient. 
            Real copy doesn't work that way.
            </p>
            <p>
            Lorem ipsum is so ubiquitous because it is so versatile. 
            Select how many paragraphs you want, copy, paste, 
            and break the lines wherever it is convenient. 
            Real copy doesn't work that way.
            </p>
        </div>
    );
}

function Interests(){
    return(
        <div id="interests">
            <h5>Interested In</h5>
            <ul>
                <li>AI</li>
                <li>Enterpreneur</li>
                <li>AI</li>
                <li>Enterpreneur</li>
            </ul>
        </div>
    );
}

function About(props){
    return(
        <div className='about' id='about'>
            <h4><span className="h4line"></span>&nbsp;&nbsp;About Me</h4>
            <section>
            <Brief />
            <Interests />
            </section>

        </div>
    );
}

export default About;