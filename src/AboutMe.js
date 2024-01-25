import React from 'react'
import styled from "styled-components";
import { Button } from "./components/Button.styled"

const AboutMe = () => {
  return (
    <>
      <Wrapper data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" data-aos-once="true">
        <div className="Project-intro">
          <div className="head">About Me</div>
        </div>


        <div className="about-page">
          <div className="about-picture">
            <img src={require("./images/Profile.jfif")} alt="" />

          </div>
        </div>

        <div class="box animate fadeInDown two">
          <div className="current-form">
            Well nothing more to say. Just a passionate javascript developer. Learning and growing everyday on the field of Javascript both in the frontend and the backend part.</div>
          {/* //to resume  */}

          <div className="resume-link">
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1ed_UrzY5yqDqByTiBVjLYgs1kH-ErcwS/view?usp=sharing"><Button>View Resume</Button></a>
          </div>
        </div>

      </Wrapper>
    </>

  )
}


const Wrapper = styled.div`
width:100%;
height:100%;
display:flex;
    flex-direction:column;
  justify-content:center;
  align-items:center;
text-align:center;

.Project-intro{
font-size: 20px;
font-weight: bold;
padding:20px 0;
font-size:40px;
color:${({ theme }) => theme.colors.cream};
margin-bottom: 20px;

}

  .about-page{
.about-picture{
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    background: #FF7A59;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  text-align: center;
  border:4px solid ${({ theme }) => theme.colors.themeColor};

  }
  
}
  }
.box {
  color: white;
  font-size: 14px;
  padding: 20px;
  text-align: center;
  .current-form{
    margin-bottom: 30px;

  }
}

.current-form{
  width:50%;
  margin:auto;
  line-height:25px;
  font-size:18px;
}

`
export default AboutMe