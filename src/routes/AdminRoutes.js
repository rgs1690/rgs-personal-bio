import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import EditProjectView from '../adminComponents/EditProjectView';
import ProjectForm from '../adminComponents/ProjectForm';
import AdminEditView from '../adminComponents/AdminEditView';

export default function AdminRoutes({ user }) {
  return (
    <Switch>
      <Route
        exact
        path="/projectForm"
        component={() => <ProjectForm user={user} />}
      />
      <Route exact path="/editProjectView" component={EditProjectView} />
      <Route exact path="/adminEditView/:key" component={AdminEditView} />
    </Switch>
  );
}
AdminRoutes.propTypes = {
  user: PropTypes.shape(PropTypes.obj),
};

AdminRoutes.defaultProps = {
  user: null,
};
