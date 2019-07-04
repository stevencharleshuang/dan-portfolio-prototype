import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import CV from './CV';
import Drawings from './Drawings';
import Home from './Home';
import Paintings from './Paintings';
import Unmatched from './Unmatched';

export default function Main() {
  return(
    <main>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/cv" component={CV} />
        <Route path="/drawings" component={Drawings} />
        <Route path="/paintings" component={Paintings} />
        <Route exact path="/" component={Home} />
        <Route component={Unmatched} />
      </Switch>
    </main>
  );
}