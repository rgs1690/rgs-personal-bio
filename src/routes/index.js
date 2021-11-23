import React from 'react';
import PropTypes from 'prop-types';
import AdminRoutes from './AdminRoutes';
import UnAuthRoutes from './UnAuthRoutes';
import SecretLogin from '../adminComponents/SecretLogin';

export default function Routes({ user }) {
  return (
    <>
      {user?.isAdmin && <AdminRoutes user={user} />}
      <UnAuthRoutes user={user} />
      <SecretLogin user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

Routes.defaultProps = {
  user: null,
};
