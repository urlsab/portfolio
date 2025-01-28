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
						href={"https://drive.google.com/file/d/124-LHwAlTOO8kjNxzZwewsAz6g41DRdt/preview"}
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
							src="https://drive.google.com/file/d/124-LHwAlTOO8kjNxzZwewsAz6g41DRdt/preview"
						/>
					</Card>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={"https://drive.google.com/file/d/17BH6LbqBvfKht9mmtJQfEQIikwgoih0x/preview"}
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