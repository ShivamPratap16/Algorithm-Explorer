import React, { Component } from 'react';
// import GitHubButton from 'react-github-btn'
import "./style.css";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4">

               

                <div className="footer-copyright text-center py-3">
                    © 2024 Copyright: <a href="https://github.com/shivampratap16" style={{ color: "#65b6f0" }}> Shivam_Pratap_Raj</a>
                </div>

            </footer>
        );
    }
}

export default Footer;