import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import ContactView from '../views/ContactView';
import TechView from '../views/TechView';
import ProjectsView from '../views/ProjectsView';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/about" component={AboutView} />
      <Route exact path="/contact" component={ContactView} />
      <Route exact path="/projects" component={ProjectsView} />
      <Route exact path="/tech" component={TechView} />
    </Switch>
  );
}
