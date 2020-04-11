import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import api from '../api';
import md5 from 'md5';

class BadgeNew extends React.Component {

    state = {
        loading: false,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: ''
        } 
    };

    handleChange = (e) => {
        this.setState ({
            form: {
                ...this.state.form, //todo lo que tenia el estado anteriormente
                [e.target.name]: e.target.value //el nuevo valor
            }
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({
            loading: true,
            error: null
        });

        const hash = md5(this.state.form.email);
        this.state.form.avatarUrl = `https://www.gravatar.com/avatar/${hash}?d=identicon`;
        
        try {
            await api.badges.create(this.state.form);
            this.setState({
                loading: false
            });

            this.props.history.push('/badges');

        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    render() {

        if (this.state.loading) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName || 'First Name'}
                                lastName={this.state.form.lastName || 'Last Name'}
                                avatarUrl="https://avatars2.githubusercontent.com/u/8376162?s=100"
                                jobTitle={this.state.form.jobTitle || 'Job Title'}
                                email={this.state.form.email || 'email'}
                                twitter={this.state.form.twitter || 'Twitter Account'}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm
                                onSubmit={this.handleSubmit}
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;