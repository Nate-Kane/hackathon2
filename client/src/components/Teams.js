import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "semantic-ui-react";
import Team from "./Team";
import TeamForm from "./TeamForm";

const Teams = ({ match }) => {
  const [hackathon, setHackathon] = useState([]);
  const [teams, setTeams] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/hackathons/${match.params.hackathon_id}`)
      .then((res) => {
        console.log("get hackathon worked", res);
        setHackathon(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/api/hackathons/${match.params.hackathon_id}/teams`)
      .then((res) => {
        console.log("got teams", res);
        setTeams(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  const addTeam = async (newTeam) => {
    try {
      let res = await axios.post(
        `/api/hackathons/${match.params.hackathon_id}/teams`,
        newTeam
      );
      console.log("team added");
      setTeams([res.data, ...teams]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTeam = async (id) => {
    try {
      let res = await axios.delete(
        `/api/hackathons/${match.params.hackathon_id}/teams/${id}`
      );
      console.log("team deleted", res.data);
      let newTeam = teams.filter((p) => p.id !== res.data.id);   //  WHY DOES THIS WORK?
      setTeams(newTeam);
    } catch (err) {
      console.log(err);
    }
  };

  const renderTeams = () => {
    return teams.map((team) => {
      return <Team key={team.id} {...team} deleteTeam={deleteTeam} match={match} />;
    });
  };

  return (
    <>
      <div>
        <h1>{hackathon.name}</h1>
        <br></br>
      </div>
      <div>
        <TeamForm addTeam={addTeam} />
      </div>
      <br></br>
      <Card.Group itemsPerRow={2}>{renderTeams()}</Card.Group>
    </>
  );
};

export default Teams;
