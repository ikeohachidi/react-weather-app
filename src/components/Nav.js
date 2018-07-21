import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    constructor() {
        super()
        this.onSearch = this.onSearch.bind(this)
    }
    onSearch(e) {
        e.preventDefault()
        alert("not wired")
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <NavLink to="/weather" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/about" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/examples" className="nav-link" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0" onSubmit={this.onSearch}>
                        <input class="form-control mr-sm-2" type="search" placeholder="Search Weather" aria-label="Search"/>
                        <button class="btn btn-primary" type="submit">Get Weather</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Nav;

        // let old = (
//     <div>
//         <NavLink to="/weather" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Weather</NavLink>
//         <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
//         <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
//     </div>
// )

