import React, { useContext } from 'react';
import styled from "styled-components"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img from './images/pattern15.png';
import { NavDisplay } from "./Reducer/Context";
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';


AOS.init({
  offset: 400,
  duration: 1000,
  once: true,
});
const Navbar = () => {
  const { hideNav } = useContext(NavDisplay);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Wrapper data-aos="fade-up"
      data-aos-duration="3000">
      <nav role='navigation'>
        <ul>
          <NavLink to="/" onClick={() => hideNav()}><li className={splitLocation[1] === "" ? "active" : ""}>Home</li></NavLink>
          <NavLink to="/about"><li className={splitLocation[1] === "" ? "active" : ""}>About</li></NavLink>
          <NavLink to="/project"><li className={splitLocation[1] === "" ? "active" : ""}>Projects</li></NavLink>
          <NavLink to="/contact"><li className={splitLocation[1] === "" ? "active" : ""}>Contact Me</li></NavLink>

        </ul>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.div`
z-index:99999;
box-shadow:0px 3px 10px rgba(102,102,104,0.6);
top:0;
height:100vh;
position:sticky;
background-image: url(${img});
.nav{

}
a, li {  
  transition: all 0.5s ease;
  -webkit-transition: all 0.5s ease;
}
a {
    
    text-decoration:none;}

li {
    list-style-type: none;
    
    }
nav {
  height: 100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: -2px 1px 3px 0px rgba(0, 0, 0, 0.5);
 

  ul{
    padding:0;
    margin:0;
  }
}

.active{
  color:${({ theme }) => theme.colors.themeColor}; 
    font-weight:bolder;
}
nav ul li {
  position:relative;
  padding: 30px 20px;
  font-size:20px;
margin-bottom:70px;
}
nav ul li:hover {
  background: ${({ theme }) => theme.colors.forbg};
  border-left: 5px solid ${({ theme }) => theme.colors.themeColor};
  color: ${({ theme }) => theme.colors.text};
}
nav ul li:hover:before {
  content: '';
  border-color: transparent ${({ theme }) => theme.colors.themeColor} transparent transparent ;
  right: 0;
  border-width:10px;
  position: absolute;
  border-style: solid;
  top: 29px;
}

`
export default Navbar