import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import events from "../assets/img/events.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Club Of Programmers",
      description: "introductive session",
      imgUrl: projImg1,
    },
    {
      title: "Club Of Programmers",
      description: "coding contest",
      imgUrl: events,
      registrationUrl: "https://forms.gle/NYpfp9GA6ZTiLL1UA",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Past-events</h2>
                  <p>Dive into the memorable experiences of our past events, captured in the posters below. Rewind and relive the highlights that made each occasion special.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      {/* <Nav.Item>
                      <Nav.Link eventKey="first"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third"></Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      {/* <Tab.Pane eventKey="first"> */}
                      <Row className="row">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                      {/* </Tab.Pane> */}
                      <Tab.Pane eventKey="section">
                        <p>Discover our journey through a series of successful coding challenges, workshops, and innovative projects that have fueled our passion for technology.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
      <img className="background-image-left" src={colorSharp} alt="Image" />

      {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
