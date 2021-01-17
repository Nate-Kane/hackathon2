import axios from "axios";
import React, { useState } from "react";
import { Button, Card } from "semantic-ui-react";

// Team.js is our 'Members.js' page
// Need Member.js and a MemberForm.js

const Member = ({ id, name }) => {
  return (
    <>
      <p>{name}</p>
    </>
  );
};

export default Member;
