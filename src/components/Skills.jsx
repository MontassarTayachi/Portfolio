import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/Skills/html.svg";
import css from "../assets/img/Skills/css.svg";
import js from "../assets/img/Skills/js.svg";
import Flutter from "../assets/img/Skills/flutter.png";
import react from "../assets/img/Skills/react.svg";
import mongodb from "../assets/img/Skills/mongodb.svg";
import mysql from "../assets/img/Skills/mysql.svg";
import nodejs from "../assets/img/Skills/nodejs.svg";
import postgres from "../assets/img/Skills/postgres.png";
import docker from "../assets/img/Skills/Docker.png";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import LazyLoad from 'react-lazy-load';

export const Skills = () => {
  const [hovored, setHovored] = useState(false);

  const handleHover = (hovored) => {
    setHovored(hovored);
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { name: "HTML5", img: html, shadowClass: "shadow-color-html" },
    { name: "CSS3", img: css, shadowClass: "shadow-color-css" },
    { name: "JavaScript", img: js, shadowClass: "shadow-color-js" },
    { name: "React JS", img: react, shadowClass: "shadow-color-reactjs" },
    { name: "My SQL", img: mysql, shadowClass: "shadow-color-mysql" },
    { name: "Mongo DB", img: mongodb, shadowClass: "shadow-color-mdb" },
    { name: "Pstgress", img: postgres, shadowClass: "shadow-color-css" },
    { name: "Flutter", img:Flutter , shadowClass: "shadow-color-css" },
    { name: "Docker", img: docker, shadowClass: "shadow-color-css" },
    { name: "Node JS", img: nodejs, shadowClass: "shadow-color-njs" },
    
  ];

  return (
    <>
    <section className="skill" id="skills" >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div id="kk" className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              I possess strong programming and problem-solving skills, with a solid foundation in programming languages such as Java, Python, C, and JavaScript. As a full-stack developer, I specialize in React JS and Express JS, and I also have expertise in mobile development using Flutter. Additionally, I am proficient in containerization with Docker and version control using Git. My diverse skill set reflects my commitment to staying at the forefront of modern software development practices..{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                pauseOnHover={true}
                mouseTracking={true}
                className="owl-carousel owl-theme skill-slider"
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
              >
                {skills.map((skill, index) => {
                  const skillImageClass = skill.shadowClass;
                  return (
                    <div className="item" key={index}>
                      <LazyLoad width={150} height={150}>
                        <img src={skill.img} alt="skills" className={skillImageClass} style={{ width: "140px", height: "140px" }} />
                      </LazyLoad>
                      <h5>{skill.name}</h5>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <section className="github">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="github-bx wow zoomIn">
              <h1>Days I Code</h1>
              <p>
                I am an active contributor on GitHub, where I share my projects
                and collaborate with other developers. You can view my GitHub
                profile and explore my repositories below.
              </p>
              <GitHubCalendar
                username="MontassarTayachi"
                blockSize={15}
                blockMargin={5}
                color="#c084f5"
                fontSize={16}
                fullYear={false}
               />
            </div>
          </div>
        </div>
      </div>  
    </section>
    </>
  );
};
