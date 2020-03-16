import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small blue pt-4 c-background-purple">
                <div className="container text-center text-md-left text-white">
                    <div className="row">
                        <div className="col-12 mt-md-0 mt-3">
                            <ul className="list-unstyled list-inline text-center">
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-fb mx-1 text-white c-link-hover">
                                        <i className="fab fa-facebook-f"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-tw mx-1 text-white c-link-hover">
                                        <i className="fab fa-twitter"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-gplus mx-1 text-white c-link-hover">
                                        <i className="fab fa-google-plus-g"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-li mx-1 text-white c-link-hover">
                                        <i className="fab fa-linkedin-in"> </i>
                                    </a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="#!" className="btn-floating btn-li mx-1 text-white c-link-hover">
                                        <i className="fab fa-instagram"> </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="footer-copyright text-center py-3 text-muted">© 2020 Copyright: <a href="https://github.com/syllomex/MMI/" target="_new">Grupo Topperson</a>
                </div>
            </footer>
        );
    }
}

export default Footer;