import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import './style.css';

class TypeWriterC extends Component {
    render() {
        return (
            <div className="type display-3">
                <span className="badge badge-dark typewriter-badge">
                    <Typewriter
                        options={{
                            strings: ['Graph Algorithms', 'Sorting Algorithms', "8 Queen"],
                            autoStart: true,
                            loop: true,
                            cursor: '|', // Custom cursor
                        }}
                    />
                </span>
            </div>
        );
    }
}

export default TypeWriterC;