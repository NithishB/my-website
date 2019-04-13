import React from 'react';
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import icon from '../images/icon.png'
import about from './About'
import interests from './Interests'
import projects from './Projects'
import research from './Research'
import publications from './Publications'

const NavItem = props => {
  const pageURI = window.location.pathname+window.location.search
  const liClassName = (props.path === pageURI) ? "nav-item active" : "nav-item";
  return (
    <li className={liClassName}>
      <Link to={props.path} className="nav-link">
        {props.name}
        {(props.path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
      </Link>
    </li>
  );
}

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/"><img src={icon} className="icon-button"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <NavItem path="/about" name="About Me" />
              <NavItem path="/interests" name="Interests" />
              <NavItem path="/projects" name="Projects" />
              <NavItem path="/research" name="Research" />
              <NavItem path="/publications" name="Publications" />
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/about" component={about} />
          <Route exact path="/interests" component={interests} />
          <Route exact path="/projects" component={projects} />
          <Route exact path="/research" component={research} />
          <Route exact path="/publications" component={publications} />
        </Switch>
      </Router>
    )
  }
}

export default Navigation;
