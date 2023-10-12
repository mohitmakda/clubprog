import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import cops from '../assets/img/cops.png'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} style={{
              color: '#fff',         // Text color to white
              textDecoration: 'none', // Remove underline
              fontWeight: 400,       // Font weight
              letterSpacing: '0.8px', // Letter spacing
              padding: '0 25px',     // Padding
              fontSize: '18px',      // Font size
              opacity: 0.75,         // Opacity
            }}
            >
              Home
            </Link>


            {/* <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> */}
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Domains</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Past Events</Nav.Link>
            <Nav.Link href="#UpcomingEvents" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Upcoming Events</Nav.Link>

            <Nav.Link href="#hackweek" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('hackweek')}>About-Hackweek</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="http://www.linkedin.com/in/cops-sstc-793491295" target="_blank"><img src={navIcon1} alt="" /></a>
              <a href="https://twitter.com/COPS_SSTC" target="_blank"><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/cops_sstc/" target="_blank"><img src={navIcon3} alt="" /></a>
            </div>
            {/* <  Link to="/login" ><button className="vvd" ><span>Hackweek</span></ button></Link> */}

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}
