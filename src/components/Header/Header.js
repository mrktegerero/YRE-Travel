import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {animateScroll as scroll} from 'react-scroll'
import { Link } from 'gatsby'


const menuData = [
  {title: "Home", link: "/"},
  {title: "Coverage Area", link: "/area"},
  {title: "About Us", link: "/about"},
  {title: "Contacts", link: "/contacts"},
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen(!isOpen)

  const closeMobileMenu = () => setIsOpen(false);



  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  })

const toggleHome = () => {
  scroll.scrollToTop()
}

const activeStyles = {
  color: '#ADADAD'
}

  return (
    <Nav scrollNav={scrollNav}>
      <NavTitle scrollNav={scrollNav} onClick={() => { toggleHome(); closeMobileMenu(); }} to="/">YRE <span>.</span> </NavTitle>
      <MobileIcon scrollNav={scrollNav} onClick={handleClick}> {isOpen ? <CloseIcon/> : <Bars/>  } </MobileIcon>
      
      <NavMenu onClick={handleClick} isOpen={isOpen} scrollNav={scrollNav}>
      <NavItem>
        {menuData.map((item, index) => (
            <NavLink scrollNav={scrollNav} to={item.link} activeStyle={activeStyles}
            smooth={true} duration={500} 
            key={index}>
              {item.title}
            </NavLink>
        ))}

        </NavItem>
      </NavMenu>
    </Nav>
  )
  }

export default Header



const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav? '#fff' : 'transparent')};
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: sticky;
  color: blue;
  backdrop-filter: blur(20px);
  flex-wrap: wrap;
  height: ${({ scrollNav }) => (scrollNav? '80px' : '100px')};
  box-shadow:${({ scrollNav }) => (scrollNav? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);' : 'none')};
  transition: .8s all ease;

  @media screen and (max-width: 768px) {
    background: #fff;
    height: 80px;
  }
 
`
const NavTitle = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav? '#111111' : 'linear-gradient(to right, #303C3B , #314041, #4D5859)')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2rem;
  height: 100%;
  cursor: pointer;
  font-size: 2.3rem;
  transition: .8s all ease;
  font-family: 'Abril Fatface', cursive;
  background: ${({ scrollNav }) => (scrollNav? '#111111' : '-webkit-linear-gradient(#F7F8F8, #939B9F)')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -2px;


  span{
    font-size: 4rem;
    font-family: 'Abril Fatface', cursive;
    margin-bottom: 1.2rem;
    margin-left: .5rem;
    background: ${({ scrollNav }) => (scrollNav? '#111111' : '#fff')};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media screen and (max-width: 768px) {
    background: #111111;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span{
      background: #111111;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
  }



`

const NavLink = styled(Link)`
  color: ${({ scrollNav }) => (scrollNav? '#111111' : '#fff')};
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  font-size: 1.09rem;
  font-family: 'Noto Sans', sans-serif;

  &:hover{
    color: ${({ scrollNav }) => (scrollNav? '#1A7371' : '#1A7371')};
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    font-size: 1.5rem;
    color: #111111;
  }
`



const NavMenu = styled.div`

  display: flex;
  align-items: center;
  margin-right: -1;
  position: relative;

@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 80px;
  left: ${({isOpen}) => (isOpen ? 0 : '-100%')};
  opacity: 1;
  transition: all 0.5s ease;
  background: #fff;
  backdrop-filter: blur(20px);
}
`
const CloseIcon = styled(AiOutlineClose)``

const Bars = styled(FaBars)``

const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px) {
display: block;
position: absolute;
top: 0;
right: 0;
transition: .8s all ease;
transform: translate(-100%, 90%);
font-size: 1.8rem;
cursor: pointer;
color: ${({ scrollNav }) => (scrollNav? '#111111' : '#fff')};

@media screen and (max-width: 768px) {
    color: #111111;
  }

}
`
const NavItem = styled.div`
@media screen and (max-width: 768px) {
 margin: 3rem 0;
}
`

