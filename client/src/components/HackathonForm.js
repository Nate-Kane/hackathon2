import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const HackathonForm = () => {
  const [hackathon, setHackathon] = useState([]);

  const handleSubmit = () => {
    console.log("Submit clicked");
    //Axios.put(`api/hackathon`)
  };

  return (
    <>
      <div>
        <h1>Hackathon Creation Form</h1>
      </div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Hackathon Name"
            placeholder="Hackathon Name"
            name="name"
            value={hackathon.name}
            onChange={(e) => setHackathon(e.target.value)}
          />
          <Form.Input
            label="Judges"
            placeholder="Judges"
            name="judges"
            value={hackathon.judges}
            onChange={(e) => setHackathon(e.target.value)}
          />
          <Form.Input
            label="Date"
            placeholder="Date"
            name="date"
            value={hackathon.date}
            onChange={(e) => setHackathon(e.target.value)}
          />
          <Button>Create</Button>
        </Form>
      </div>
    </>
  );
};

export default HackathonForm;
