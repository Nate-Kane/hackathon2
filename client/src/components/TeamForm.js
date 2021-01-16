import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const TeamForm = () => {
  const [Teams, setTeams] = useState([]);
  const [member, setMember] = useState([]);

  const addTeam = (team) => {
    setTeams([team, ...Teams]);
  };

  const handleSubmit = (e) => {
    console.log("Submit clicked");
    //Axios.put(`api/teams`)
    addTeam(e);
  };

  // const renderTeams = () => {
  //   return Teams.map((teams) => {
  //     return <
  //   })
  // }

  return (
    <>
      <div>
        <h1>Current Hackathon Name</h1>
        <br></br>
        <h2>Team Form</h2>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Team Name"
            name="name"
            value={Teams.name}
            onChange={(e) => setTeams(e.target.value)}
          />
          <Button>+</Button>
        </Form>
      </div>
     
    </>
  );
};

export default TeamForm;
