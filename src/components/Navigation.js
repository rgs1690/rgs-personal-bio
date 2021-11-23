import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';

const NavStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  .navItem {
    color: white;
    font-size: 2em;
    font-style: bold;
  }
 @media only screen and (max-width:600px) {
      .navStyle {
        font-size: .5em;
        justify-content: center;
      }
   
`;
export default function Navigation() {
  return (
    <>
      <NavStyle>
        <Nav className="navStyle" activeKey="/home">
          <Nav.Item>
            <Nav.Link className="navItem" href="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navItem" href="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navItem" href="/projects">
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navItem" href="/tech">
              Tech
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="navItem" href="/contact">
              Contact Me
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </NavStyle>
    </>
  );
}
