import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css'
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import Loader from '../components/Loader';

class Badges extends React.Component {

    /* constructor(props) {
        super(props);
        console.log('constructor');
        
        this.state = {
            data: []
        };
    } */

    //Inicializamos el estado vacío
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {
            results: []
        }
    }

    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            //Recibimos la respuesta de la API
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
            //Le sacamos los datos a la respuesta
            const data = await response.json();
            //Guardamos esos datos con setState()
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(
                        this.state.data.results,
                        data.results
                    )
                },
                nextPage: this.state.nextPage + 1
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
        
    }

    /* componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');

        console.log({
            prevProps: prevProps,
            prevState: prevState
        });

        console.log({
            props: this.props,
            state:this.state
        });
    } */

    /* componentWillUnmount() {
        console.log('componentWillUnmount');
        clearTimeout(this.timeoutId);
    } */

    render() {
        
        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} className="Badges_conf-logo" alt="Conf Logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    
                    <div className="BadgesList">
                        <div className="Badges__container">
                            <div className="Badges__buttons">
                                <Link to="/badges/new" className="btn btn-primary"> New Badge </Link>
                            </div>
                            <BadgesList badges={this.state.data.results} />

                            {this.state.loading && (
                                <div className="loader">
                                    <Loader />
                                </div>
                            )}

                            {!this.state.loading && (
                                <button onClick={() => this.fetchCharacters()} className="btn btn-primary">Load More</button>
                            )}

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Badges;