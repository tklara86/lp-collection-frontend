import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// Components
import Navbar from "./components/common/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";

// scss
import '../src/scss/main.scss'


export default class App extends Component {
    render() {

        return (
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </Router>
        );
    }
}
