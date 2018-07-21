import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <NavLink to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink>
            <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
            <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
        </div>
    )
}

export default Nav;