import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { signOutUser, signInUser } from '../api/auth';

const NavStyle = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  .navItem {
    color: white;
    font-size: 2em;
    font-style: bold;
  }
  .btn {
    background-color: transparent;
    border: 0;
    color: transparent;
  }
`;
export default function Navigation({ user }) {
  return (
    <>
      <NavStyle>
        <Nav className="justify-content-end" activeKey="/home">
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
          {user ? (
            <button
              onClick={signOutUser}
              type="button"
              className="btn btn-primary"
            >
              Admin SignOut
            </button>
          ) : (
            <button onClick={signInUser} type="button" className="btn">
              Admin SignIn
            </button>
          )}
        </Nav>
      </NavStyle>
    </>
  );
}
Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  user: null,
};
