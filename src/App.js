import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

import Main from "./components/Main";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Nav/>
            <Switch>
              <Route path="/" component={Main}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
