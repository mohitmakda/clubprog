import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ArrowRightCircle } from 'react-bootstrap-icons';

import hackweek from "../assets/img/hackweek.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Hackweek = () => {
  return (
    <section className="project project2" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h2>Hackweek: Unleashing Innovation and Creativity</h2>
                  <img
                    className=""
                    src={hackweek}
                    alt="Image"
                    style={{ maxWidth: "80%", height: "auto", margin: "10px 0" }}
                  />

                  <p>Welcome to our HackWeek! An exhilarating event that celebrates innovation, collaboration, and creative problem-solving. This week-long extravaganza is a unique opportunity for our talented team to come together, break boundaries, and create something extraordinary. At HackWeek, we believe that every idea, no matter how big or small, has the potential to spark innovation. It's a time when our team members are encouraged to dream big, think outside the box, and challenge the status quo. From the seed of an idea to the final product, we foster an environment where innovation knows no bounds. Throughout this exhilarating week, the halls are alive with brainstorming sessions, huddles of enthusiastic minds, and the hum of creative energy. We have dedicated spaces where teams huddle together, sketching out their visions, discussing possibilities, and forming strategies to bring their concepts to life. One of the most magical aspects of HackWeek is the spirit of collaboration that permeates the air. In our usual day-to-day work, we often focus on our respective roles and responsibilities. However, during HackWeek, those boundaries vanish as we unite as a single force, eager to complement each other's strengths. Our developers, designers, marketers, and visionaries come together to form diverse and dynamic teams. They bring unique perspectives to the table, blending technical expertise with creative flair. This harmonious blend of talents propels innovation forward, leading to breakthroughs that might not have been possible in a siloed environment.</p>

                  <button onClick={() => console.log('connect')} style={{ color: "#fff" }}>
                    JOIN HACKWEEK <ArrowRightCircle size={25} style={{ color: "#fff" }} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}


