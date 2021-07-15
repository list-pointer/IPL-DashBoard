package spit.ac.in.ipldashboard.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import spit.ac.in.ipldashboard.Repository.MatchRepository;
import spit.ac.in.ipldashboard.Repository.TeamRepository;
import spit.ac.in.ipldashboard.model.Match;
import spit.ac.in.ipldashboard.model.Team;

import java.time.LocalDate;
import java.util.List;

@RestController
@CrossOrigin //This annotation is used for allowing sharing data on other servers.
// basically other domains can make a call to this data
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;
    private MatchRepository matchRepository;

    public TeamController(TeamRepository teamRepository, MatchRepository matchRepository) {
        this.teamRepository = teamRepository;
        this.matchRepository = matchRepository;
    }


    @GetMapping("/team")
    public Iterable<Team> getAllTeam() {
        return this.teamRepository.findAll();
    }

    @GetMapping("/team/{teamName}")
    public Team getTeam(@PathVariable String teamName) {
        Team team = this.teamRepository.findByTeamName(teamName);
        team.setMatches(matchRepository.findLatestMatchesbyTeam(teamName, 4));

        return team;
    }

    @GetMapping("/team/{teamName}/matches")
    public List<Match> getMatchesForTeam(@PathVariable String teamName, @RequestParam int year) {
        LocalDate startDate = LocalDate.of(year, 1, 1);
        LocalDate endDate = LocalDate.of(year + 1, 1, 1);

        return this.matchRepository.getMatchesByTeamBetweenDates(teamName, startDate, endDate);
    }
}


