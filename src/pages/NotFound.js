import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';

function NotFound() {

    return (
        <React.Fragment>
            <div className="Home">
                <div className="container text-center">
                    <img className="notFoundImage" src="https://static.platzi.com/static/images/error/img404.png" alt="Atronauta 404"/>
                    <h1>404</h1>
                    <h3>Not Found</h3>
                    <Link to="/" className="btn btn-primary">Go to Home Page</Link>
                </div>
            </div>
        </React.Fragment>
    );
}

export default NotFound;