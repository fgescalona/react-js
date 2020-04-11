import React from 'react';

import './styles/BadgesList.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter); 

class BadgesList extends React.Component {

    render() {
        return (
            <div>
                <ul className="list-unstyled">
                    {this.props.badges.map((badge) => {
                        return (
                            <li className="BadgesListItem" key={badge.id} >
                                <img className="BadgesListItem__avatar" src={badge.image} alt=""/>
                                <div>
                                    <span className="font-weight-bold"> {badge.name} </span>
                                    <br/>
                                    <span className="twitter-color"><FontAwesomeIcon className="twitteIcon" icon={['fab', 'twitter']} /> @{badge.name}</span>
                                    <br/>
                                    {badge.species}
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;