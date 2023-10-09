import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const rowStyles = {
    flexShrink: 0,
    width: "100%",
    maxWidth: "100%",
    paddingRight: "calc(var(--bs-gutter-x) * .5)",
    paddingLeft: "calc(var(--bs-gutter-x) * .5)",
    marginTop: "var(--bs-gutter-y)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "px",
    flexDirection: "column",
  };

  const colStyles = {
    flexShrink: 0,
    width: "100%",
    maxWidth: "100%",
    paddingRight: "calc(var(--bs-gutter-x) * .5)",
    paddingLeft: "calc(var(--bs-gutter-x) * .5)",
    marginTop: "var(--bs-gutter-y)",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    marginBottom: "px",
    flexDirection: "column",
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" style={rowStyles}>
          {/* <MailchimpForm /> */}
          <Col xs={12} sm={6} style={colStyles}>
            <img src={logo} alt="Icon" />
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end" style={colStyles}>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Club Of Programmers, SSTC</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
