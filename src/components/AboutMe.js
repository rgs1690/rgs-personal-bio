import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';
import styled from 'styled-components';

const AboutStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 5em;
  img {
    border: 1px solid black;
    border-radius: 200px;
  }
  .information {
    margin-left: 12em;
  }
  Button {
    background-color: transparent;
    color: black;
    border: 1px solid black;
  }
  @media only screen and (max-width:600px) {
    display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  margin-left: 4em;
  margin-top: 1em;
  .information {
    width: 100px;
    margin-left: -4em;
  }
    img {
    width: 250px;
    height: 250px;
    margin-bottom: 1em;
    }
    .cardText{
        font-size: 1em;
        padding: 2em;
    }
  
`;
export default function AboutMe() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  return (
    <>
      <AboutStyle>
        <div>
          <img
            width={600}
            height={650}
            alt="171x180"
            src="https://avatars.githubusercontent.com/u/78558344?v=4"
          />
        </div>
        <div className="information">
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            Background
          </Button>
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card className="cardText" body style={{ width: '400px' }}>
                  My name is Grace Sutherland, and I was born and raised in
                  Nashville, Tennessee. I graduated from MTSU with a Bachelor of
                  Fine Arts where I held a concentration in figurative oil
                  painting. I supported myself through college and after by
                  baking and cake decorating in various bakeries in the
                  Nashville area.
                </Card>
              </div>
            </Collapse>
          </div>
          <Button
            onClick={() => setOpen2(!open2)}
            aria-controls="example-collapse-text"
            aria-expanded={open2}
          >
            Software Development
          </Button>
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open2} dimension="width">
              <div id="example-collapse-text">
                <Card className="cardText" body style={{ width: '400px' }}>
                  COVID-19 hit the food and service industries hard. These
                  events lead me to explore more stable and fulfilling career
                  options. I wanted a career that I could use my problem-solving
                  abilities and creative drive. When I dove into trying to
                  create my own website for a side cake business, I traveled
                  down a rabbit hole of HTML, CSS, and JavaScript tutorials and
                  from there I was hooked. I knew that I would benefit from
                  guided instruction, so I signed up for the Nashville Software
                  School’s introductory jumpstart program. After just a couple
                  of weeks I knew I wanted to dedicate myself to making software
                  development my new career. I then applied and was accepted
                  into Nashville Software School’s part time, full stack, web
                  development E16 cohort. I am almost halfway through the year
                  long program, and I have learned so much and cannot wait
                  continue my learning through out the rest of my career. I have
                  found that background in art has helped develop my eye for
                  detail that is needed for programming as well as design
                  knowledge for front-end development. My experience in the
                  service industry has also made me an excellent team member and
                  empathize with the user in all my applications.
                </Card>
              </div>
            </Collapse>
          </div>
          <Button
            onClick={() => setOpen3(!open3)}
            aria-controls="example-collapse-text"
            aria-expanded={open3}
          >
            Contact Me
          </Button>
          <div style={{ minHeight: '150px' }}>
            <Collapse in={open3} dimension="width">
              <div id="example-collapse-text">
                <Card className="cardText" body style={{ width: '400px' }}>
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
                </Card>
              </div>
            </Collapse>
          </div>
        </div>
      </AboutStyle>
    </>
  );
}
