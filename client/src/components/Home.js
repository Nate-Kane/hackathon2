import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";

const Home = () => (
  <>
    <Header as="h3" textAlign="center">
      Hackathon Judger
    </Header>
    <Button size="massive" as={Link} to="/hackathonform">
      Create Hackathon
    </Button>
  </>
);

export default Home;
