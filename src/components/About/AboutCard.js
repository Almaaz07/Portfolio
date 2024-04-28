import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Almaaz Siddiqui </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I am currently final year Student of B.Tech.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p >
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Almaaz Siddiqui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
