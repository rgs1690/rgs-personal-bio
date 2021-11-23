import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';
import { signOutUser, signInUser } from '../api/auth';

const LoginStyle = styled.div`
  .nav {
    justify-content: right;
  }
  .btn {
    background-color: transparent;
    border: 0;
    color: transparent;
  }
`;
export default function SecretLogin({ user }) {
  return (
    <div>
      <LoginStyle>
        <Navbar className="nav" fixed="bottom">
          <div>
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
          </div>
        </Navbar>
      </LoginStyle>
    </div>
  );
}
SecretLogin.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

SecretLogin.defaultProps = {
  user: null,
};
