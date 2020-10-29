import { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = styled.nav`
  background-color: #252c3b;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  transform: translateX(-9000px);
  transition: transform 1.2s ease-in-out, background-color 1.6s;
  font-family: 'Bevan', cursive;
  text-shadow: 5px 5px 2px black;
  border-right: 2px solid #3e2b41;
  z-index: 999;

  &.active {
    transform: translateX(0px);
    background-color: #3e2b41;
  }

  
`;

const NavList = styled.ul`
  list-style: none;
  font-size: 4rem;
  text-align: center;
`;

const NavListItem = styled.li`
  padding: 5% 0;

  & a {
    color: rgb(255, 255, 255);
    cursor: pointer;
    padding: 5%;
    text-decoration: none;
    text-transform: uppercase;
    transition: font-size 1.3s, color 1.5s, text-shadow 1.5s;
  }

  & a:hover,
  & a:active {
    color:#e25757;
    font-size: 4.5rem;
    text-shadow: 10px 15px 4px black;
  }

  @media screen and (max-width: 568px) {
    & a:hover,
    & a:active {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 496px){
    & a {
      font-size: 2.8rem;
    }
  }
`;

const HamburgerMenu = styled.button`
  background: none;
  padding: 25px;
  color: #fff;
  border: none;
  position: fixed;
  top: 0;
  right: 0;
  outline: 0;
  cursor: pointer;
  z-index: 1000;
      
  &.active .hamburger-line:nth-child(1){
    transform: translateX(15px) rotate(45deg) translateY(20px);
    border: 2px solid #af0000;
  }
      
  &.active .hamburger-line:nth-child(2){
    transform: translateX(900px);
  }
      
  &.active .hamburger-line:nth-child(3){
    transform: translateX(15px) rotate(-45deg) translateY(-20px);
    border: 2px solid #af0000;
  }

  @media screen and (max-width: 568px){
    & {
      top: 85vh;
      
      border-radius: 30px;
      background: var(--accent-color);
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
      left: 35px;
      transition: background 1s, box-shadow 0.6s;
    }
  
    &.active {
      background: #3e2b41;
      box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.25);
    }
  
    &.active .hamburger-line:nth-child(2){
      transform: translateX(-900px);
    }
  }
`;

const HamburgerLine = styled.span`
  display: block;
  margin-top: 10px;
      
  border: 2px solid #bebebe;
  padding: 0 10px 0 30px;
  transition: transform 0.5s, border 0.5s;
`;


function Nav() {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const [toggleSettings, setToggleSettings] = useState(false);

    const handleClick = () => {
        setToggleNavbar(!toggleNavbar);
    }

    return (
        <>
            <Navigation className={toggleNavbar ? 'active' : ''}>
                <NavList>
                    <NavListItem><Link to="/" onClick={handleClick}>Home</Link></NavListItem>
                    <NavListItem><Link to="/resume" onClick={handleClick}>Résumé</Link></NavListItem>
                    <NavListItem><Link to="/portfolio" onClick={handleClick}>Portfolio</Link></NavListItem>
                    <NavListItem><Link to="/contact" onClick={handleClick}>Contact</Link></NavListItem>
                </NavList>
            </Navigation>

            <HamburgerMenu className={toggleNavbar ? 'active' : ''} onClick={handleClick}>
                <HamburgerLine className="hamburger-line"></HamburgerLine>
                <HamburgerLine className="hamburger-line"></HamburgerLine>
                <HamburgerLine className="hamburger-line"></HamburgerLine>
            </HamburgerMenu>
        </>
    )
}

export default Nav;