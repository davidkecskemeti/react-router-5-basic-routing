import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a className="navbar-brand" href="http://www.davidk.com">DavidK</a>
                    </div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/products">Product</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}