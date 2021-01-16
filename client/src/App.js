import React, { Fragment } from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from "./components/ProtectedRoute";
import HackathonForm from "./components/HackathonForm";
import TeamForm from "./components/TeamForm";
import Objectives from "./components/Objectives";
import Hackathons from './components/Hackathons';
import ShowHackathon from './components/ShowHackathon';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/hackathonform" component={HackathonForm} />
          <Route exact path="/hackathons" component={Hackathons} />
          <Route exact path="/showHackathon" component={ShowHackathon} />
          <Route exact path="/teamform" component={TeamForm} />
          <Route exact path="/hackathon/:hackathon_id/objectives" component={Objectives}/>
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
);

export default App;
