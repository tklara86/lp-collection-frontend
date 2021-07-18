import React, {Component} from 'react';
import Albums from "./Albums";

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="text--lg">Home</h1>
                <Albums />
            </div>
        );
    }
}
