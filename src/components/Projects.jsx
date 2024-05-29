import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import cinephile from "../assets/img/Websites/chat.png";
import pokedex from "../assets/img/Websites/sosfood.png";
import gallery from "../assets/img/Websites/Efoulathstoke.png";
import swiftcart from "../assets/img/Websites/swiftcart.png";
import e_learning from "../assets/img/Websites/e-learning.png";
import gestionStock from "../assets/img/Websites/gestionStoke.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const websites = [
    {
      title: "Chat Temperature",
      isWebsite: true,
      description:
        "unique mobile application that offers real-time information on temperature, prayer times, and integrates a chatbot powered by GPT API for contextual responses.",
      imgUrl: cinephile,
      Url: "https://github.com/MontassarTayachi/Chat-Temp-rature-.git",
      githubUrl: "https://github.com/MontassarTayachi/Chat-Temp-rature-.git",
    },
    {
      title: "Sosfood",
      isWebsite: true,
      description: "SOS Food simplifies your college dining experience by providing a hassle-free online platform. Discover the ease of ordering, the diversity of menus and the quality of meals for a tastier student life.",
      imgUrl: pokedex,
      Url: "https://github.com/MontassarTayachi/SOOSFOOD.git",
      githubUrl: "https://github.com/MontassarTayachi/SOOSFOOD.git",
    },
    {
      title: "Elfoulath Stoke",
      isWebsite: true,
      description: "complete ticket management platform for steel products, integrating a QR-code system.",
      imgUrl: gallery,
      Url: "https://github.com/MontassarTayachi/Elfouladh-stocke.git",
      githubUrl: "https://github.com/MontassarTayachi/Elfouladh-stocke.git",
    },
    {
      title: "Swift Cart",
      isWebsite: true,
      description: "E-commerce platform for selling and buying products.",
      imgUrl: swiftcart,
      Url: null,
      githubUrl: null,
    },
    {
      title: "E-learning",
      isWebsite: true,
      description: "E-learning platform for students and teachers.",
      imgUrl: e_learning,
      Url: "https://github.com/MontassarTayachi/E-learning-The-Bridge-User-Interface.git",
      githubUrl: "https://github.com/MontassarTayachi/E-learning-The-Bridge-User-Interface.git",
    },
    {
      title: "Gestion Stock",
      isWebsite: true,
      description: "Stock management platform for companies.",
      imgUrl: gestionStock,
      Url: "https://github.com/MontassarTayachi/gestion-de-stoke-et-de-credit-.git",
      githubUrl: "https://github.com/MontassarTayachi/gestion-de-stoke-et-de-credit-.git",
    },

  ];
 

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    {" "}
                    I'm excited to showcase my passion for illustration and
                    design. As a creative artist, I have honed my skills in
                    producing unique and eye-catching illustrations. My goal is
                    to create art that is aesthetically pleasing and mundane in
                    its own way. I believe that a great illustration should
                    capture the essence of its subject and evoke emotions in the
                    viewer. Take a look at my recent projects and get in touch
                    if you'd like to collaborate or commission me for your
                    project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="second">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                     
                     
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                       "animate__animated animate__slideInUp"
                      }
                    >
                      <Tab.Pane eventKey="second">
                        <Row>
                          {websites.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                     
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
