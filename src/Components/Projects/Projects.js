import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import yelpCamp from "../../Assets/Projects/yelpCamp.png";
import cvBuilder from "../../Assets/Projects/cvBuilder.png";
import colorGame from "../../Assets/Projects/colorGame.png";

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've created
				</p>
				<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={colorGame}
							isBlog={false}
							title="COLOR GAME"
							description="A smart and nice game with a original extra challange"
							techstack=" HTML | CSS | JS "
							link="https://color-game-react.vercel.app/"
							git="https://github.com/urlsab/color-game-react"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={yelpCamp}
							isBlog={false}
							title="YELP CAMP PROJECT"
							description="A full CRUD project of social media group of camping"
							techstack="NODEJS | EJS | MONGODB"
							link="https://yelp--camp--project.herokuapp.com"
							git="https://github.com/urlsab/YelpCamp-project"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={cvBuilder}
							isBlog={false}
							title="CV BUILDER APP"
							description="A resume builder app with built in PDF & print functions"
							techstack="REACT | FIRESTORE | AUTHENTICATION"
							link="https://resumes-builder.web.app"
							git="https://github.com/urlsab/cv-app-master"
						/>
					</Col>

				</Row>
			</Container>
		</Container>
	);
}

export default Projects;