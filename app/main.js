import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { SportsEvents } from "./components/eventsContainer.jsx";

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let { store } = this.context;
  }

  render() {
    return (
      <Router>
        <main>
          <Route exact path="/" component={SportsEvents} />
        </main>
      </Router>
    )
  }
}

render(
  <AppContainer />,
  document.getElementById('root')

);