import React, {useLayoutEffect, useState, useEffect} from 'react';
import {BiMenu} from 'react-icons/bi';
import { FaTimes } from "react-icons/fa";
import './header.css';
 


/*shownav hook*/


function Action(props) {
  const styles ={
      alignSelf: 'flex-end',
      fontSize: '30px',
      fontWeight: 'lighter'
  }
  if(props.nav === true){
      return <FaTimes style={styles} onClick={props.onClick} />
  }
  return <BiMenu style={styles} onClick={props.onClick} />

}

function Nav(){
  const [width,setWidth] = useState(0);
  const [nav,setNav] = useState(false);
  const [showFixed, setshowFixed] = useState(false);
  const [hideNav, sethideNav] = useState(false);
  const [prevPos, setPrevPos] = useState(window.pageYOffset);
  useLayoutEffect(() => {
      function updateWidth(){
          setWidth(window.innerWidth);
      }
      window.addEventListener('resize',updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize',updateWidth);
  },[nav]);
  useEffect(()=>{
        function showNav(){
        let navHeight = 80;
        if(prevPos > navHeight){
            setshowFixed(true)
        }else{
            setshowFixed(false)
        }
        const currentPos = window.pageYOffset;

        if(prevPos > currentPos){
            sethideNav(false)
        }else{
            sethideNav(true)
            setNav(false)
        }

        setPrevPos(currentPos);
    }
    window.addEventListener('scroll', showNav);
    return () => {
        window.removeEventListener('scroll', showNav);
    }

  },[prevPos]);

  const handleclick = () =>{
      setNav(!nav)
  }
  const mobile = (w ) =>{
      if (nav && w < '720') {return true}else {return false}
  }
  return(
      < div className={`${mobile(width) ? 'nav-hide' : 'nav'} ${showFixed && 'fixed-nav'}`}
        style={{top: `${hideNav? '-100px' : '0'}`}}
      >
          <div className='logo'>
              <a href='/' >HamuntTech</a>
              <span style={{marginRight: `${showFixed && !hideNav? '10%' : ''}`}} >{width < '720' && <Action nav={nav} onClick= {handleclick} />}</span>
          </div>
      
          
          <div className = {`${mobile(width)? 'nav-items': 'nav-items-hide'}`}>
              <a href="/#" onClick={handleclick}>Home</a>
              <a href="#about" onClick={handleclick}>About</a>
              <a href="#stack" onClick={handleclick}>Stack</a>
              <a href="#projects" onClick={handleclick}>Projects</a>
              <a href="#blog" onClick={handleclick}>Blog</a>
              <a href="#contact" onClick={handleclick}>Contact</a>
          </div>
      </div>
  );
}

export default Nav;