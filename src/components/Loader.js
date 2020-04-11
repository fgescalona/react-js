import React from 'react';

import loading from '../images/loading.svg';

class Loader extends React.Component {

    render() {
        return (
            <img src={loading} alt="Loading"/>
        );
    }
}

export default Loader;