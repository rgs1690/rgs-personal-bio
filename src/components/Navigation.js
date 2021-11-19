import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { signOutUser, signInUser } from '../api/auth';

// const NavStyle = styled.div`
// Nav {
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: right;
// }

// `;
export default function Navigation({ user }) {
  return (
    <>
      <p className="text-center mt-4 mb-4" />
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tech">Tech</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact Me</Nav.Link>
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
          <button
            onClick={signInUser}
            type="button"
            className="btn btn-primary"
          >
            Admin SignIn
          </button>
        )}
      </Nav>
    </>
  );
}
Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  user: null,
};
