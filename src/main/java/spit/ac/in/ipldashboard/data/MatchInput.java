package spit.ac.in.ipldashboard.data;

import lombok.Data;

//This class is used to store the data from csv file on temp basis so that only required data can be used to shift in the entity class
@Data
public class MatchInput {

    private String id;
    private String city;
    private String date;
    private String player_of_match;
    private String venue;
    private String neutral_venue;
    private String team1;
    private String team2;
    private String toss_winner;
    private String toss_decision;
    private String winner;
    private String result;
    private String result_margin;
    private String eliminator;
    private String method;
    private String umpire1;
    private String umpire2;
    private long totalWins;
}
