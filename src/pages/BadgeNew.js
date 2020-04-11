import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {

    state = { form: {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: ''
    } };

    handleChange = (e) => {
        this.setState ({
            form: {
                ...this.state.form, //todo lo que tenia el estado anteriormente
                [e.target.name]: e.target.value //el nuevo valor
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>

                <div className="container">
                    <div className="row">
                        
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                avatarUrl="https://avatars2.githubusercontent.com/u/8376162?s=100"
                                jobTitle={this.state.form.jobTitle}
                                email={this.state.form.email}
                                twitter={this.state.form.twitter}
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeNew;