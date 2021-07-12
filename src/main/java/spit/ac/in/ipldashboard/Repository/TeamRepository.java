package spit.ac.in.ipldashboard.Repository;

import org.springframework.data.repository.CrudRepository;
import spit.ac.in.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team, Long> {

    Team findByTeamName(String teamName);

}