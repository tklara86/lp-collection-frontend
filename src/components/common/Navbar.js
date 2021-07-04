import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar">
                <div className="navbar--title">
                    <Link to="/">LP Collection</Link>
                </div>
                <div className="navbar--links">
                    <ul>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
