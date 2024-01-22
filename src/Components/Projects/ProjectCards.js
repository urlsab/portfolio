import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FiExternalLink,FiGithub } from "react-icons/fi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="proImg">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>{props.techstack}</Card.Text>
        <Button
          style={{ margin: "0.5rem" }}
          variant="primary"
          href={props.link}
          target="_blank"
        >
          <FiExternalLink /> &nbsp; View Project
        </Button>
        <Button
          style={{ margin: "0.5rem" }}
          variant="primary"
          href={props.git}
          target="_blank"
        >
          <FiGithub /> &nbsp; View on GitHub
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
