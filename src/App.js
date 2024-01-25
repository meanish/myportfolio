import React, { useContext } from 'react';
import { ThemeProvider } from "styled-components";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe"
import Project from "./Project"
import Contact from "./Contact";
import Nav from "./Navbar";
import { NavDisplay } from "./Reducer/Context";


const theme = {
  colors: {
    themeText: "#5B63B7",
    forbg: "#204FA1",
    text: "#EAEBE7",
    backtheme: "#D7D7FF",
    pic1: "#cc161f",
    themeColor: "#FAB464",
    cream: "#EEE8A9",
  }
}


function App() {
  const { show } = useContext(NavDisplay);

  console.log(show);


  return (
    <ThemeProvider theme={theme}>

      <div className='grid-two-column'>

        {
          show === "true" ? <Nav /> : null
        }

        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
