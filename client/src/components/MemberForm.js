import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "semantic-ui-react";

const MemberForm = ({ addMember }) => {
  const [name, setName] = useState([]);

  const handleSubmit = (e) => {
    console.log("Submit clicked");
    addMember({ name: name });
  };

  return (
    <>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Member Name"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button>+</Button>
        </Form>
      </div>
    </>
  );
};

export default MemberForm;
