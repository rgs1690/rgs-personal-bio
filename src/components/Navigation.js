import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { signOutUser, signInUser } from '../api/auth';

export default function Navigation({ user }) {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/tech">Tech</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact Me</NavLink>
        </NavItem>
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
      <hr />
    </div>
  );
}
Navigation.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Navigation.defaultProps = {
  user: null,
};
