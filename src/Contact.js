import React from 'react'
import styled from "styled-components";



const Contact = () => {
  return (
    <Wrapper>
      <div className="Project-intro" data-aos="zoom-in-down" data-aos-once="true">
        <div className="head">Connect With Me</div>
      </div>

      <div className="contact-form">
        <form
          action="https://formspree.io/f/meqwqdwa"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            placeholder="Your Name"
            name="Name"
            required
            autoComplete="off"
          />

          <input
            type="Email"
            name="Email"
            placeholder="Your Email_ID"
            autoComplete="off"
            required
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Send Your Message"></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>

      <div className="social-icons" >
        <ul data-aos="flip-left" data-aos-offset="10">
          <li ><a target="_blank" rel="noreferrer" href="https://github.com/meanish"><i className="fa fa-github" aria-hidden="true" ></i> </a> </li>
          <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anish-gho-shrestha-94a5b8138/"> <i className="fa fa-linkedin" aria-hidden="true"></i> </a> </li>
          <li><a target="_blank" rel="noreferrer" href="mailto:anishgshrestha"> <i className="fa fa-google" aria-hidden="true"></i> </a> </li>
          <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/anishghoshrestha/"> <i className="fa fa-instagram" aria-hidden="true"></i> </a> </li>
          <li><a target="_blank" rel="noreferrer" href="https://twitter.com/GhoAnish"> <i className="fa fa-twitter" aria-hidden="true"></i> </a> </li>
          <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/anishgho/"> <i className="fa fa-facebook" aria-hidden="true"></i> </a> </li>

        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
text-align:center;
overflow:hidden;
.Project-intro{
font-size: 20px;
font-weight: bold;
padding:20px 0;
font-size:40px;
color:${({ theme }) => theme.colors.cream};
margin-top:20px;
margin-bottom: 20px;
}

.contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input,textarea{
font-size:12px;
font-weight: bold;
            padding:10px;
            color:${({ theme }) => theme.colors.themeColor};
          
          }
          input, textarea::placeholder{
            font-size:13px;
          }
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            width:15%;
            margin:auto;
            font-size:20px;
         font-weight: bold;

            &:hover {
              background-color: ${({ theme }) => theme.colors.pic1};
              border: 1px solid ${({ theme }) => theme.colors.themeColor};
              color: ${({ theme }) => theme.colors.forbg};
              transform: scale(0.9);
            }
          }
        }
      }

.social-icons{
  display:flex;
    justify-content:center;
    overflow: hidden;
    ul{
    position: absolute;
    bottom: 10%; 
     width: 80%; 
      text-align: center;
    transform: translate(0,-50%);  

}
ul li{
    list-style: none;
    display: inline-block;
    position: relative;
    width: 35px;  height: 40px;
    margin: 0 40px;
    transform: rotate(-25deg) skewX(20deg);
    box-shadow: none;
    transition: .9s;
}
ul li::before{
   content: '';
   position: absolute;
   top: 0;  left: -15px;
   width: 15px;   height: 100%;
   background: #b1afaf;
   transform-origin: right;
   transform: skewY(-45deg);
   transition: .5s;
}
ul li::after{
    content: '';
    position: absolute;
    bottom: -15px;  left: 0;
    width: 100%;   height: 15px;
    background: #dcd9d9;
    transform-origin: top;
    transform: skewX(-45deg);
    transition: .5s;
 }
ul li a{
    display: inline-block;
    position: relative;
    text-decoration: none;  
    color: #262626;  
     background: #fff;
    width: 100%;  height: 100%;   line-height: 35px;
    font-size: 20px;
    transition: .5s;
 
}
ul li a:hover{
  color: #fff;
}
ul li:hover{
    transform: translateY(-18px) rotate(-25deg) skewX(20deg);
    box-shadow: -60px 60px 30px rgb(0 0 0 / 50%);
}
ul li:hover a{
   color: #fff;
}

${'' /* //facebook */}
ul li:nth-of-type(6) a{
  color: #3b5999;
}

ul li:hover:nth-of-type(6) a{
    background: #3b5999;
    color: #fff;
}
ul li:hover:nth-of-type(6)::before{
    background: #3866ca;
}
ul li:hover:nth-of-type(6)::after{
    background: #5173bd;
}

${'' /* instagram */}
ul li:nth-of-type(4) a{
  color: #e1306c;
}

ul li:hover:nth-of-type(4) a{
    background: #e1306c;
    color: #fff;
}
ul li:hover:nth-of-type(4)::before{
    background: #e0658f;
}
ul li:hover:nth-of-type(4)::after{
    background: #e88eac;
}


${'' /* twitter */}
ul li:nth-of-type(5) a{
  color: #55acee;
}
ul li:hover:nth-of-type(5) a{
    background: #55acee;color: #fff;
}
ul li:hover:nth-of-type(5)::before{
    background: #369ae7;
}
ul li:hover:nth-of-type(5)::after{
    background: #7eb8e5;
}

${'' /* gmail */}
ul li:nth-of-type(3) a{
  color: #dd4b39;
}
ul li:hover:nth-of-type(3) a{
    background: #dd4b39;color: #fff;
}
ul li:hover:nth-of-type(3)::before{
    background: #eb402a;
}
ul li:hover:nth-of-type(3)::after{
    background: #cc6356;
}

${'' /* Linkedin */}
ul li:nth-of-type(2) a{
  color: #0077B5;
}
ul li:hover:nth-of-type(2) a{
    background: #0077B5;color: #fff;
}
ul li:hover:nth-of-type(2)::before{
    background: #005c8c;
}
ul li:hover:nth-of-type(2)::after{
    background: #2498d4;
}

${'' /* Skypre */}
ul li:nth-of-type(7) a{
  color: #00AFF0;
}
ul li:hover:nth-of-type(7) a{
    background: #00AFF0;color: #fff;
}
ul li:hover:nth-of-type(7)::before{
    background: #0894c8;
}
ul li:hover:nth-of-type(7)::after{
    background: #26c4ff;
}


${'' /* github */}
ul li:nth-of-type(1) a{
  color: #333;
}
ul li:hover:nth-of-type(1) a{
    background: #333;color: #fff;
}
ul li:hover:nth-of-type(1)::before{
    background: #666262;
}
ul li:hover:nth-of-type(1)::after{
    background:#666262;
}


${'' /* //Tooltip */}

.tooltip {
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
  position: relative;
}

.tooltip::before {
  content: attr(data-tooltip);
  font-size: 13px;
  position: absolute;
  left: 20%;
  bottom: 100%;
  background: #d4edf4;
  padding: 5px 10px;
  opacity: 0;
  color: #000;
  z-index: 5;
  border-radius: 5px;
  transition: 100ms opacity;
}

.tooltip::after {
  content: "";
  position: absolute;
  left: 25%;
  bottom: 92%;
  width: 8px;
  height: 8px;
  background: #d4edf4;
  opacity: 0;
  transform: rotate(45deg);
  transition: 100ms opacity;
}

.tooltip:hover::before,
.tooltip:hover::after {
  opacity: 1;
}

}
  `

export default Contact