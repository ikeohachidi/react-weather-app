import React from 'react';
import { Route } from 'react-router-dom';

import Weather from "./Weather";
import Examples from "./Examples";
import About from "./About";

const Main = () => {
    return(
        <div>
            <h1>Main Component</h1>
            <hr/>
            <Route path="/weather" component={Weather}/>
            <Route path="/about" component={About}/>
            <Route path="/examples" component={Examples}/>
        </div>
    )
}

export default Main;