// import React from "react";
// import { Route, Switch } from "react-router-dom";
// import Home from "./components/Home";
// import NavBar from "./components/Navbar";
// import ThingsDemo from "./things/ThingsDemo";
// import { Container } from "semantic-ui-react";
// import BasicUpload from "./images/BasicUpload";
// import Navbar1 from "./components/Navbar1";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import FetchUser from "./components/FetchUser";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Hooks from "./hooks";

// function App() {
//   return (
//     <>

//       <Navbar />
//       <FetchUser>
//         <Container>
//           <Switch>
//             <Route exact path="/" component={Home} />
//             <ProtectedRoute exact path="/thingsDemo" component={ThingsDemo} />
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/register" component={Register} />
//           </Switch>
//         </Container>
//       </FetchUser>
//     </>
//   );
// }

// export default App;

import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <Fragment>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </Fragment>
)

export default App;