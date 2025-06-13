import { useState } from 'react'
import logonav from '../assets/logonav.svg'
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { IconContext } from 'react-icons'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from '../styles/Navbar.style';
import { navbarData } from '../data/NavbarData';

const Navbar = ({ hide }) => {
  const [show, setShow] = useState();
  return (
    <Nav hide={hide}>
      <NavbarContainer>
        <NavLogo to="/" onClick={scroll.scrollToTop}>
          <NavIcon src={logonav}/>
        </NavLogo>

        {!hide && (
          <>
            <IconContext.Provider value={{ color: '#f9f9f9' }}>
              <MobileIcon onClick={() => setShow(!show)}>
                {show ? <HiX /> : <HiMenuAlt3 />}
              </MobileIcon>
            </IconContext.Provider>
            <NavMenu $hide={hide} $show={show}>
              {navbarData.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks
                    spy={true}
                    duration={500}
                    smooth={true}
                    exact="true"
                    offset={el.offset}
                    onClick={() => setShow(true)}
                    to={el.to}
                  >
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
          </>
        )}
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;