import React from 'react';
import {Link} from 'react-router-dom';
import './css/MatchSmallCard.scss';

//accepting match parameter from the TeamPage
export const MatchSmallCard = ({teamName, match}) => {
    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;

    const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={isMatchWon ? 'won-card MatchSmallCard' : 'lost-card MatchSmallCard'}>
            <span className="vs>">vs</span>
            <h3>
                <Link to={otherTeamRoute}> {otherTeam}</Link></h3>
            <p className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</p>
        </div>
    );
}
