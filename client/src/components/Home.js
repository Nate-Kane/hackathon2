import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "semantic-ui-react";
import Hackathons from "./Hackathons";
// import Hackathons from './Hackathons'

const Home = () => {
  // const getHackathons = () => {
  //   axios
  //     .get('api/all_hackathons')
  //     .then((response) => {
  //       console.log(response.data);
  //       setHackathons(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // };

  //  useEffect (() => {
  //     getHackathons();
  //   }, []);

  return (
  <>
    <Header as="h3" textAlign="center">
      Hackathon Judger
    </Header>
    <Button size="massive" as={Link} to="/hackathonform">
      Create Hackathon
    </Button>
    {/* <Hackathons/> */}
  </>
  )
};

export default Home;
