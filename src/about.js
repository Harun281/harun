import React from 'react';

//utils
const about = [
    `
    My name is Harun Muriiki, born in the late 90s as third born in our family. 
    My childhood had its measure of challenges and good memories to remember. 
    As a kid, I always wanted to be a pilot. 
    The idea of boarding leave alone flying planes fascinated me. I guess it still does 😊.
    `,
    `
    My passion is coming up with tangible solutions to solve problems in society. 
    Technology itself is a powerful tool that can be used to solve both current and future problems. 
    Therefore, I use my knowledge as a web developer to put forward reliable, efficient 
    and affordable web applications that meet customer and community requirements.
    `,
    `
    Aside from web development, I love acquiring new knowledge and being up-to-date with current global trends. 
    When not coding, am either reading a book, going through blogs, or perusing my Twitter feed (Twitter is bae 😊). 
    Blogging too can't be excluded when it comes to Harun; I believe learning is two-way traffic (by receiving and giving).
    `,
    `
    Well, I’m also in BTC trading and part-time freelancing jobs. 
    I've faith in Bitcoin's future as a leading cryptocurrency and working remotely as the ultimate job space.
    `
];
function Brief(){

    return(
        <div className="brief">
            {
                about.map((value,index) =>{
                    return(
                        <p key={index}>{value}</p>
                    );
                })
            }
        </div>
    );
}

function Interests(){
    return(
        <div id="interests">
            <h5>Interested In</h5>
            <ul>
                <li>AI</li>
                <li>Flutter</li>
                <li>Blogging</li>
                <li>BTC</li>
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