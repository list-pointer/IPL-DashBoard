import {React} from 'react';
import {MatchDetailedCard} from "../components/MatchDetailedCard";
import {MatchSmallCard} from "../components/MatchSmallCard";

//exporting function so that you have to import the function name explicitly
export const TeamPage = () => {
    return (
        <div className="TeamPage">
            <h1>Team Name</h1>
            <MatchDetailedCard/>
            <MatchSmallCard/>
            <MatchSmallCard/>
            <MatchSmallCard/>
        </div>
    );
}

