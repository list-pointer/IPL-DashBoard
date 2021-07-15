import React from "react";
import {Link} from 'react-router-dom';
import './css/MatchDetailCard.scss';

export const MatchDetailedCard = ({teamName, match}) => {
    if (!match) return null;

    const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
const isMatchWon = teamName === match.matchWinner;

    return (
        <div className={isMatchWon ? 'won-card MatchDetailedCard' : 'lost-card MatchDetailedCard'}>
            <div>
                <span className="vs>">vs</span>
                <h1><Link to={otherTeamRoute}>{otherTeam}</Link></h1>
                <h2 className="match-date">{match.date}</h2>
                <h3 className="match-venue">at {match.venue}</h3>
                <h3 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h3>
            </div>
            <div className="additional-detail">
                <h3>First Innings</h3>
                <p>{match.team1}</p>
                <h3>Second Innings</h3>
                <p>{match.team2}</p>
                <h3>Who won the toss</h3>
                <p>{match.tossWinner}</p>
                <h3>Man of the match</h3>
                <p>{match.playerOfMatch}</p>
            </div>

        </div>
    );
}
