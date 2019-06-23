import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import CV from './CV';
import Drawings from './Drawings';
import Home from './Home';
import Paintings from './Paintings';

export default function Main() {
  return(
    <main>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/cv" component={CV} />
        <Route exact path="/drawings" component={Drawings} />
        <Route exact path="/paintings" component={Paintings} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}