import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import {
    Nav,
    NavBarContainer,
    NavLogo, MobileIcon,
    NavMenu,
    NavItem,
    NavBtn,
    NavBtnLinks,
    NavLinks} from './NavBarElements';


const NavBar = ({toggle}) =>{
    const [scrollNav, setScrollNav] = useState(false);
    
    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(()=>{
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return (
    <>
        <IconContext.Provider value={{color: 'red'}}>
    <Nav scrollNav={scrollNav}>
        <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>Dollar</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
               <NavItem>
                 <NavLinks to="about"
                           smooth={true}
                           duration={500}
                           spy={true}
                           exact='true'
                           offset={-80}
                 >About</NavLinks>
               </NavItem>
               <NavItem>
                  <NavLinks to="discover"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                  >Discover</NavLinks>
               </NavItem>
                <NavItem>
                  <NavLinks to="services"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                  >Services</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="signup"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                  >Sign Up</NavLinks>
                </NavItem>
            </ NavMenu>
            <NavBtn>
                <NavBtnLinks to="/signin">Sign In</ NavBtnLinks>
            </NavBtn>
        </NavBarContainer>
    </Nav>
        </IconContext.Provider>
    </>
    );
};

export default NavBar;