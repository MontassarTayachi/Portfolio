import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";

import Typed from "typed.js"; // Import Typed.js library
import { BrowserRouter as Router } from "react-router-dom";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const Banner = () => {
  // Create a ref for the text element that you want to animate
  
  
  const textRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js once the component is mounted
    const toRotate = ["Full-Stack Developer", "Designed", "developed"," software systems"];
    const options = {
      strings: toRotate,
      typeSpeed: 50, // typing speed in milliseconds
      backSpeed: 25, // backspacing speed in milliseconds
      startDelay: 1000, // delay before typing starts in milliseconds
      backDelay: 1000, // delay before backspacing starts in milliseconds
      loop: true, // loop the animation indefinitely
      showCursor: false,
    };

    const typed = new Typed(textRef.current, options);

    // Cleanup function
    return () => {
      typed.destroy(); // destroy Typed.js instance when the component unmounts
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              
              <h1>{"Montassar Tayachi"}</h1>
              <span className="wrap">
                {"{ "}
                <span ref={textRef}></span> {/* Use the textRef for Typed.js */}
                {"}"}
              </span>
              <p>
              Full Stack Developer specialized in mobile and web development, with strong expertise in React.js, Node.js, and Flutter. Experienced in creating innovative solutions, managing complex projects, and integrating APIs. Passionate about continuous learning and implementing modern technologies to enhance user experience and system efficiency. </p>
             <a id="oo"
            href="https://montassartayachi.github.io/My-CV/"
            target="_blank"><span className="tagline">See my CV</span></a> 
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header" style={{ width: "100%", height: "auto" }} />
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
