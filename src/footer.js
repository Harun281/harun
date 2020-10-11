import React, {useState, useEffect} from 'react';
import {FaFacebook,FaTwitter,FaLinkedin,FaInstagram,FaGithub,FaWhatsapp, FaArrowAltCircleUp} from 'react-icons/fa';
import {FiMail} from 'react-icons/fi';


function Footer(){
    const [animate, setanimate] = useState('');

    useEffect(() => {
        function animate(){
            const {innerHeight,scrollY} = window;
            if((innerHeight + scrollY) > document.body.offsetHeight){
                setanimate('footer-animate');
            }else{
                setanimate('');
            }
        }
        window.addEventListener('scroll', animate);
        return () => {
            window.removeEventListener('scroll', animate);
        };
    }, []);

    const goHome = () =>{
        window.scroll(0,0);
    }

    
    return(
        <div className='footer'>
            <h5><span className="h4line"></span>&nbsp;&nbsp;Wanna Connect?</h5>
            <div>
                <a href="https://www.facebook.com/haro.muriixh" target="_blank" rel="noopener noreferrer"><FaFacebook style={{color:'blue'}} /></a>
                <a href="https://www.twitter.com/harunmuriiki" target="_blank" rel="noopener noreferrer"><FaTwitter style={{color:'rgb(69, 127, 236)'}}/></a>
               <a href="mailto:harorykz@gmail.com" ><FiMail style={{color:'rgba(192, 14, 14, 0.804)'}}/></a>
                <a href="https://www.linkedin.com/in/harun-muriiki-7953921a3/" target="_blank" rel="noopener noreferrer"><FaLinkedin style={{color:'rgb(143, 171, 223)'}}/></a>
               <a href="https://www.instagram.com/harun_muriiki" target="_blank" rel="noopener noreferrer"><FaInstagram style={{color:'rgba(255, 60, 0, 0.836)'}} /></a>
                <a href="https://github.com/harun281" target="_blank" rel="noopener noreferrer"><FaGithub style={{color:'black'}}/></a>
                <a href="https://wa.me/254720281543" target="_blank" rel="noopener noreferrer"><FaWhatsapp style={{color:'green'}} /></a>
            </div>
            <FaArrowAltCircleUp
                style={{ margin:'20px 0  30px 48% '}}
                className = {animate}
                onClick={goHome}
            />

        </div>
    );
}

export default Footer;