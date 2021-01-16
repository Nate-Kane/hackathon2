import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from 'axios';
import Hackathon from './Hackathon';

const HackathonForm = ({ addHackathon, hackathonProp , hackathonId}) => {
  const [name, setName] = useState('');
  const [active, setActive] = useState(false);
  const [date, setDate] = useState('');
  const [judges, setJudges] = useState('');

  const [hackathon, setHackathon] = useState(
    hackathonProp ? {
      name: hackathonProp.name,
      active: hackathonProp.active,
      judges: hackathonProp.judges,
      date: hackathonProp.date
    }:
    {
      name: '',
      active: false,
      judges: '',
      date: ''
    }
  );

    const editHackathon = (id, hackathon) => {
      axios.put(`/api/hackathons/${id}`, hackathon)
       .then((res)=>{
         console.log(res)
         setHackathon(res.data)
       })
       .catch((err)=>{
         console.log(err)
       });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hackathonProp) {
      editHackathon(hackathonId, {name: name, active: active, judges: judges, date:date});
    } else {
      addHackathon({name: name, active: active, judges: judges, date: date});
    };
  };

  return (
    <>
      <div>
        <p>Hackathon Creation Form</p>
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
          <Form.Checkbox
            label='active'
            onChange={() => setActive(!active)}
          />
          <Form.Input
            label="Date"
            placeholder="Date"
            name="date"
            value={hackathon.date}
            onChange={(e) => setHackathon(e.target.value)}
          />
          <Button link_to='/hackathons'>Submit</Button>
        </Form>
      </div>
    </>
  );
};

export default HackathonForm;
