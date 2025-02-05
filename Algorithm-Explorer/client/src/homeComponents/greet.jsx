import React, { Component } from 'react';
import "./style.css";

class Greet extends Component {
    render() {
        return (
            <div className="greet">
                <h1 className="display-3 animated-title">
                    Welcome to Algorithm Explorer
                </h1>
                <hr className="dropdown-divider" />
                <h1 className="display-5 subtitle">
                    Unravel the Mysteries of Algorithms with Interactive Visualizations
                </h1>
            </div>
        );
    }
}

export default Greet;