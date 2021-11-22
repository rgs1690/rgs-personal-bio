import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';
import styled from 'styled-components';

const AboutStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 7em;
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
                <Card body style={{ width: '400px' }}>
                  My name is Grace Sutherland, and I was born and raised in
                  Nashville, Tennessee. I graduated from MTSU with a Bachelor of
                  Fine Arts where I held a concentration in figurative oil
                  painting. I supported myself through college and after by
                  working in various bakeries in the Nashville area by baking
                  and cake decorating. Cake decorating scratched that creative
                  itch for me and I fully through myself into learning
                  everything I could about it.
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
                <Card body style={{ width: '400px' }}>
                  My name is Grace Sutherland, and I was born and raised in
                  Nashville, Tennessee. I graduated from MTSU with a Bachelor of
                  Fine Arts where I held a concentration in figurative oil
                  painting. I supported myself through college and after by
                  working in various bakeries in the Nashville area by baking
                  and cake decorating. Cake decorating scratched that creative
                  itch for me and I fully through myself into learning
                  everything I could about it.
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
                <Card body style={{ width: '400px' }}>
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
