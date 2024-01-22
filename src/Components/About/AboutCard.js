import React from "react";
import Card from "react-bootstrap/Card";
import PianoIcon from '@mui/icons-material/Piano';
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Uriel Sabag </span>
            from <span className="purple"> Lod, Israel.</span>
            <br />I am a Full Stack Web Developer
            <br />
            <br />
            Apart from coding, some other activities that I love to do :
          </p>
          <ul>
            <li className="about-activity">
              <HistoryEduIcon /> Writing poems
            </li>
            <li className="about-activity">
              <AutoStoriesIcon /> Reading books
            </li>
            <li className="about-activity">
              <PianoIcon /> Playing the piano
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make the world better!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> Uriel Sabag </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
