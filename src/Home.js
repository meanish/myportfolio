import React, { useContext, useEffect } from 'react';
import styled from "styled-components"
import { NavLink } from "react-router-dom"
import { NavDisplay } from "./Reducer/Context";


const Home = () => {
  const { showNav, hideNav } = useContext(NavDisplay);

  useEffect(() => {
    hideNav();
  }, [])
  
  return (
    <Wrapper>
      <div className="container">
        <div className="intro">
          <span class="text1">
            <div className="name">Hi, I'm <p>Anish Gho Shrestha</p> </div>
            <p>A FullStack Developer</p>
          </span>
        </div>
        <span class="text2">
          <p>Click To Visit My Portfolio</p>
          <NavLink to="/about" onClick={() => showNav()}>
            <div>
              <svg class="arrows">
                <path class="a1" d="M0 0 L30 32 L60 0"></path>
                <path class="a2" d="M0 20 L30 52 L60 20"></path>
                <path class="a3" d="M0 40 L30 72 L60 40"></path>
              </svg>
            </div>
          </NavLink>
        </span>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
background: ${({ theme }) => theme.colors.forbg};
  height:100vh !important;
  position:absolute;
  top:0;
  width:100%;
  display:flex;
  justify-content: center;
  align-items: center;

  .intro{
    position:relative;
    line-height:70px;
  }
.container{
  text-align: center;  
  width: 100%;

}
.container span{
  display: block;
}
.text1{
  color:${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 4px;
  margin-bottom: 20px;
  animation: text 2s 1;
  opacity:1;
  .name{
display:flex;
text-align: center;
justify-content: center;
gap:15px;
p{
    animation: text 3s 1;
    font-family: 'Patua One', cursive;
    color:${({ theme }) => theme.colors.themeColor};
    font-size: 50px;
  font-weight: 800;
}
  }

}
.text2{
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text};
  animation: text2 2s 1;
 display:flex;
 justify-content:center;
 align-items:center;
 left:50%;
 position:absolute;
  transform: translate(-50%,-50%);
  bottom:0px;

}

@keyframes text {
  0%{
    color: black;
    margin-bottom: -40px;
    opacity:0.54;
  }
  30%{
    letter-spacing: 12px;
    margin-bottom: -40px;
    opacity:0.8;
  }
  85%{
    letter-spacing: 8px;
    margin-bottom: -40px;
    
  }
}
@keyframes text2 {
    0%{
    bottom: -250px;
  }
  85%{
    letter-spacing: 8px;   
  }
}

//arrows effect//

.arrows {
	width: 60px;
   margin-top:30px;
	height: 78px;
	left: 50%;
	bottom: -100px;
}

.arrows path {
	stroke:${({ theme }) => theme.colors.themeColor};
	fill: transparent;
	stroke-width: 4px;	
	animation: arrow 2s infinite;
	-webkit-animation: arrow 2s infinite; 
}

@keyframes arrow
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

@-webkit-keyframes arrow /*Safari and Chrome*/
{
0% {opacity:0}
40% {opacity:1}
80% {opacity:0}
100% {opacity:0}
}

.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {	
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
}
`


export default Home