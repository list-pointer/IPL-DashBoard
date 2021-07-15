import {React, useEffect, useState} from 'react';
import {MatchDetailedCard} from "../components/MatchDetailedCard";
import {MatchSmallCard} from "../components/MatchSmallCard";
import {Link, useParams} from 'react-router-dom';
import './css/TeamPage.scss';
import {PieChart} from "react-minimal-pie-chart";

//exporting function so that you have to import the function name explicitly
export const TeamPage = () => {

    //team is the state name,setTeam is the fun used to set the data.
    // when you pass the object with set data team will have the state data
    const [team, setTeam] = useState({matches: []});
    // this is used to pass the parameter from app file URL parameter
    const {teamName} = useParams();
    //you cannot make the effect as async function
    // hence the useeffect function will call other async function internally for fetching the data
    useEffect(
        () => {
            const fetchTeam = async () => {
                //this will fetch the data from the passed URL i.e API call
                // await can only be used inside an async function within regular JavaScript code.
                const response = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await response.json();
                setTeam(data);
                console.log(data);
                // console.log(team.toString());

            };
            fetchTeam();
        }, [teamName] //components loads when hook is changed
    );

    if (!team.teamName || !team) return <h1>Team Not Found!!!!</h1>;
    return (
        <div className="TeamPage">
            <div className="team-name-section"><h1 className="team-name">{team.teamName}</h1></div>
            {/*<h2>{team.totalWins}</h2>*/}
            <div className="win-loss-section">Wins / Losses
                <PieChart data={[{
                    title: 'Losses',
                    value: team.totalMatches - team.totalWins,
                    color: '#a34d5d'
                }, {title: 'Wins', value: team.totalWins, color: '#4da375'}]}/>
            </div>
            <div className="match-detail-section">
                <h3>Latest Matches</h3>
                <MatchDetailedCard teamName={team.teamName} match={team.matches[0]}/>
            </div>

            {team.matches.slice(1).map(match => <MatchSmallCard teamName={team.teamName} match={match}/>)}
            {/*this will call the match small card for the no of matches present*/}
            {/*console.log({team.matches});*/}
            <div className="more-link">
                <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More ></Link>
            </div>
        </div>
    );
}


