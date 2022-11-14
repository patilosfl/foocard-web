import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";

import Header from './header';
import Patients from "./patients";
import Register from "./register";
import Doctors from "./doctors";
import Home from './home';
import Login from './login';
import Booking from './booking';
import { React } from "react";

import AuthVerify from "./authVerify";

import UserProvider from './UserContext';

const App = () => {
  console.log("in app js");
  const history = useHistory();

  return (
    <>
      <Router>

        <UserProvider>
          <Header></Header>
          <Route path="/login" component={Login} />
          <Route path="/patients" component={Patients} />
          <Route path="/doctors" component={Doctors} />
          <Route path="/booking" component={Booking} />
        </UserProvider>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
        </Switch>
        <AuthVerify history={history}></AuthVerify>
      </Router>
    </>
  );
}

export default App;
