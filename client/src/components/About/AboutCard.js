import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone! I’m <span className="purple">Pornima Sadanshiv</span>, and I’m from the vibrant city of 
            <span className="purple"> Pune, India.</span>
            <br />
            Currently, I’m in my <span className="purple">third year at PICT</span>, where I’m pursuing my passion for 
            development and technology.
            <br />
            <br />
            Beyond coding and development, I have a zest for life and love engaging in:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> ✨ Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> 💃 Dancing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Excited to connect and grow together! 😊"
          </p>
          <footer className="blockquote-footer">Pornima</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
