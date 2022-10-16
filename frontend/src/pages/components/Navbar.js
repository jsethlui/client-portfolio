
import React from 'react'
import "./Navbar.css"

const Navbar: React.FC = () => {

    return (
        <div className="navbar-wrapper"> 
            <div className="left links-wrapper">
                <a href="#about" className="navbar-link">ABOUT</a>
                <a href="#experience" className="navbar-link">EXPERIENCE</a>
                <a href="#projects" className="navbar-link">PROJECTS</a>
                <a href="#resume" className="navbar-link">RESUME</a>
            </div>

            <div className="right links-wrapper">
                <a href="ma&#105;l&#116;&#111;&#58;h%61%7&#50;&#109;%&#54;F&#110;%79&#46;&#99;%6&#56;a&#110;6&#64;&#103;%6&#68;%6&#49;%69l&#46;&#99;&#111;m" className="contact-link" target="_blank">CONTACT</a>
            </div>
        </div>
    )
}

export default Navbar;