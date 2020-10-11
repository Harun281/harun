import React, {} from 'react';
import Nav from './Navbar'
import About from './about';
import Blog from './blog';
import Contact from './contact';
import Footer from './footer';
import Header from './header';
import Projects from './projects';
import Stack from './stack';
import Twitter from './twitter';
import './app.css'
import './header.css';


function App() {


  return (
      <div>
        <div className="headernav">
          <Nav />
          <Header />
        </div>
        <About />
        <Stack />
        <Projects />
        <Blog />
        <Contact />
        <Twitter />
        <Footer />

      </div>
  );
}

export default App;
