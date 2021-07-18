import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
    //default props
    static  defaultProps = {
       title: "LP Collection"
    }

    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        return (
            <nav className="navbar">
                <div className="navbar--title">
                    <Link to="/">{this.props.title}</Link>
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
