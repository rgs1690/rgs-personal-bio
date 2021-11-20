import React from 'react';
import styled from 'styled-components';
import { Accordion } from 'react-bootstrap';
import Typist from 'react-typist';

const AboutStyle = styled.div`
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 2em;
  }
  .accordion {
    margin-top: 2em;
  }

  .accordionItem {
    width: 50em;
  }
  img {
    border-radius: 300px;
    width: 25em;
    height: 25em;
    border: solid white 5px;
    margin-left: 10em;
  }
  h1 {
    margin-left: 10em;
    font-size: 5em;
  }
  .accordionBody {
    color: white;
  }
`;
export default function About() {
  return (
    <AboutStyle>
      <div className="container">
        <Typist>
          <h1>About Me</h1>
        </Typist>
        <img
          src="https://avatars.githubusercontent.com/u/78558344?v=4"
          className="img-fluid"
          alt="headShot"
        />

        <div>
          <Accordion className="accordion" defaultActiveKey="0">
            <Accordion.Item className="accordionItem" eventKey="0">
              <Accordion.Header className="accordionHeader">
                Background
              </Accordion.Header>
              <Accordion.Body>
                My name is Grace Sutherland, and I was born and raised in
                Nashville, Tennessee. I graduated from MTSU with a Bachelor of
                Fine Arts where I held a concentration in figurative oil
                painting. I supported myself through college and after by
                working in various bakeries in the Nashville area by baking and
                cake decorating. Cake decorating scratched that creative itch
                for me and I fully through myself into learning everything I
                could about it.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="accordionItem" eventKey="1">
              <Accordion.Header>
                Journey into software development
              </Accordion.Header>
              <Accordion.Body>
                COVID-19 hit the food and service industries hard. These events
                lead me to explore more stable and fulfilling career options. I
                wanted a career that I could use my problem-solving abilities
                and creative drive. When I dove into trying to create my own
                website for a side cake business, I traveled down a rabbit hole
                of HTML, CSS, and JavaScript tutorials and I from there I was
                hooked. I knew that I would benefit from guided instruction, so
                I signed up for the Nashville Software School’s introductory
                jumpstart program. After just a couple of weeks I knew I wanted
                to dedicate myself to making software development my new career.
                I then applied and was accepted into Nashville Software School’s
                part time, full stack, web development E16 cohort. I am almost
                halfway through the year long program, and I have learned so
                much and cannot wait continue my learning through out the rest
                of my career. I have found that background in art has helped
                develop my eye for detail that is needed for programming as well
                as design knowledge for front-end development. My experience in
                the service industry has also made me an excellent team member
                and empathize with the user of all my applications.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="accordionItem" eventKey="2">
              <Accordion.Header>Contact me!</Accordion.Header>
              <Accordion.Body>
                Email: rgs1690@gmail.com
                <hr />
                <a
                  href="https://www.linkedin.com/in/grace-sutherland4724/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin
                </a>
                <hr />
                <a
                  href="https://github.com/rgs1690"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <hr />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </AboutStyle>
  );
}
