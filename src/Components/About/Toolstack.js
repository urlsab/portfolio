import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiCodesandbox,
	SiVisualstudiocode,
	SiCodepen,
	SiPostman,
	SiHeroku,
	SiGithub,
	SiVercel
} from "react-icons/si";

import { FaBootstrap } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";



function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p>VS Code</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
				<p>Firebase</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
			<FaBootstrap />
				<p>Bootstrap</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
				<p>Heroku</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
				<p>Express</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
