import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiVisualstudiocode,
	SiHeroku,
	SiGithub,
} from "react-icons/si";

import { FaBootstrap } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { IoLogoVercel } from "react-icons/io5";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
				<p>VS Code</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
			<FaBootstrap />
				<p>Bootstrap</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGithub />
				<p>Github</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
				<p>Express</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
				<p>Firebase</p>
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
				<p>Heroku</p>
			</Col>
			
			<Col xs={4} md={2} className="tech-icons">
				<IoLogoVercel />
				<p>Vercel</p>
			</Col>
		</Row>
	);
}

export default Toolstack;
