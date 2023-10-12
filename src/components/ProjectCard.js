import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, registrationUrl }) => {
  return (
    <a href={registrationUrl} target="_blank"><Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col></a>
  )
}
