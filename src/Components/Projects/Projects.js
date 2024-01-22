import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { DiJsBadge, DiReact, DiNodejs, DiCss3, DiHtml5 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import yelpCamp from "../../Assets/Projects/yelpCamp.png";
import cvBuilder from "../../Assets/Projects/cvBuilder.png";
import todo from "../../Assets/Projects/todo_.png";
import Booking from "../../Assets/Projects/Booking.png";


// set this project at github desktop = 20 min

// set color game app at git hub desktop = 20 min

// color game code as react app + our comco twist = 120 mi

// set other order for icons at skill set and tool set = 40 min
// set more and another icons at skill set and tool set = 50 min

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
							imgPath={yelpCamp}
							isBlog={false}
							title="YELP CAMP PROJECT"
							description="A full CRUD project of social media group of camping"
							techstack="HTML | CSS | JS"
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
							techstack="HTML | CSS | JS"
							link="https://resumes-builder.web.app"
							git="https://github.com/urlsab/cv-app-master"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={todo}
							isBlog={false}
							title="Todo App"
							description="A todo app where users can add tasks, mark it as done, view completed tasks, change the status of tasks & delete the tasks."
							techstack="HTML | CSS | JS | React"
							link="https://todo-page.vercel.app/"
							git="https://github.com/harshmehta813/Todo-4860"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={Booking}
							isBlog={false}
							title="Clone of Booking.com"
							description="Booking.com is a Dutch online travel agency for lodging reservations & other travel products, and a subsidiary of Booking Holdings."
							techstack="HTML | CSS | JS | React | Redux | Material UI"
							link="https://https://lnkd.in/dm6NacQH"
							git="https://github.com/harshmehta813/Booking/tree/main/booking.com"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
