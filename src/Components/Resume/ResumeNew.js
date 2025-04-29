import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Card, CardMedia } from "@mui/material";

const ResumeNew = () => {
	const [width, setWidth] = useState(1200);

	useEffect(() => {
		console.log(width);
		setWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"

						// or 'view' or 'preview'
						href={"https://drive.google.com/file/d/1zo3EGpwYov0LcwAtszuFGAgkgsTewmzb/view?usp=sharing"}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>

				<Row className="resume">
					<Card sx={{ maxWidth: 660 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							Height="890px"
							src={"https://drive.google.com/file/d/1zo3EGpwYov0LcwAtszuFGAgkgsTewmzb/view?usp=sharing"}
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={"https://drive.google.com/file/d/1zo3EGpwYov0LcwAtszuFGAgkgsTewmzb/view?usp=sharing"}
						target="_blank"
					>
						<AiOutlineDownload />
						&nbsp;Download Resume
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default ResumeNew;