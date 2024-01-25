import React from 'react'
import styled from "styled-components";
import ProjectData from './ProjectData';
import Slider from "./Slider";
import { Button } from "./components/Button.styled";
import AOS from 'aos';
import '../node_modules/aos/dist/aos.css';


AOS.init({
    offset: 200,
    duration: 2500,
});

const Project = () => {
    return (
        <Wrapper>
            <div className="Project-intro" data-aos="fade-down" data-aos-once="true">
                <div className="head">My Projects</div>
            </div>
            <div className="projects">
                {
                    ProjectData.map((currEle, index) => {
                        const { name, description, img, gitlink, livehost, dataaos, used } = currEle;
                        return (<div key={index} className="project-box" data-aos={dataaos} data-aos-once="false">
                            <div className="project-heading">{index + 1})  {name}</div>
                            <div className="project-ss">
                                <Slider img={img} />
                            </div>
                            <div className="project-decription">{description}</div>
                            <div className="used-to-built">
                                {/* <div className="heading"><h4>Used</h4></div> */}
                                {
                                    used.map((currEle, index) => {
                                        return (
                                            <button key={index}>{currEle}</button>
                                        )
                                    })
                                }


                            </div>
                            <div className="project-links">
                                {
                                    currEle.gitlink ? <div className="github-code"><a target="_blank" rel="noreferrer" href={gitlink}><Button>Get Code</Button></a></div> : null
                                }
                                {
                                    currEle.livehost ? <div className="livehost"><a target="_blank" rel="noreferrer" href={livehost}><Button>View Live</Button></a></div>
                                        : null
                                }


                            </div>

                        </div>)



                    })
                }
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
text-align: center;
width:100%;
color:${({ theme }) => theme.colors.text};
overflow: hidden;

.Project-intro{
font-size: 20px;
font-weight: bold;
padding:20px 0;
font-size:40px;
display: flex;
align-items: center;
justify-content:center;
color:${({ theme }) => theme.colors.cream};
border-bottom: 4px solid ${({ theme }) => theme.colors.pic1};
margin-bottom: 20px;





}
.projects{
    
}
.project-box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding:40px 0;
    border-bottom-style: double;
    border-color:${({ theme }) => theme.colors.cream};


    .project-heading{
        font-size: 30px;
        color:${({ theme }) => theme.colors.text};
        padding-bottom:20px;

    }

    .project-ss{
        margin:20px 0;
    }
    .project-decription{
        margin:20px 0;
        width:50%;
        text-align:start;
        font-size:16px;
    }
    .used-to-built{
        display: flex;
        justify-content:center;
        gap:1rem;
        align-items:center;
        width:100%;
        margin:1rem 0 1.5rem;
        
       
        button{
            border:none;
            outline:none;
            box-shadow: 0 -5px 3px -3px black, 0 5px 3px -3px #ccc;
            background:${({ theme }) => theme.colors.forbg};
            transition:0.2s ease-in-out;
            color:yellow;
            font-size:13px;
            font-weight:bolder;
            &:hover{
                box-shadow: 0.2rem 0.2rem black, -0.2rem -0.2rem #ccc;
            }
        }
    }
    .project-links{
    display: flex;
    justify-content: center;
    gap:25px;
}
}
`
export default Project


