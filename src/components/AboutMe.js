import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';

export default function AboutMe() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img
        src="https://avatars.githubusercontent.com/u/78558344?v=4"
        className="img-fluid"
        alt="headShot"
      />
      <div>
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
                working in various bakeries in the Nashville area by baking and
                cake decorating. Cake decorating scratched that creative itch
                for me and I fully through myself into learning everything I
                could about it.
              </Card>
            </div>
          </Collapse>
        </div>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          Software Development
        </Button>
        <div style={{ minHeight: '150px' }}>
          <Collapse in={open} dimension="width">
            <div id="example-collapse-text">
              <Card body style={{ width: '400px' }}>
                My name is Grace Sutherland, and I was born and raised in
                Nashville, Tennessee. I graduated from MTSU with a Bachelor of
                Fine Arts where I held a concentration in figurative oil
                painting. I supported myself through college and after by
                working in various bakeries in the Nashville area by baking and
                cake decorating. Cake decorating scratched that creative itch
                for me and I fully through myself into learning everything I
                could about it.
              </Card>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}
