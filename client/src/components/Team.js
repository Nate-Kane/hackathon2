import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "semantic-ui-react";
import Member from "./Member";
import MemberForm from "./MemberForm";

// Team.js is our 'Members.js' page
// Need Member.js and a MemberForm.js

const Team = ({ id, name, deleteTeam, match }) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    debugger;
    axios
      .get(`/api/hackathons/${match.params.hackathon_id}/teams/${id}/members`)
      .then((res) => {
        console.log("get members worked", res);
        setMembers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteMember = () => {};

  const renderMember = () => {
    return members.map((member) => {
      return <Member key={member.id} {...member} deleteMember={deleteMember} />;
    });
  };

  return (
    <>
      <Card>
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Description>
          <MemberForm />
          {renderMember()}
        </Card.Description>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Edit
            </Button>
            <Button onClick={() => deleteTeam(id)} basic color="red">
              Delete
            </Button>
          </div>
        </Card.Content>
      </Card>
    </>
  );
};

export default Team;
