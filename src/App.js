import React, { Component } from "react";
import Header from "./components/layout/Header";
import Events from "./components/events/Events";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import AddEvent from "./components/events/AddEvent";
import EditEvent from "./components/events/EditEvent";
import EventsDelUpd from "./components/events/EventsDelUpd";
import LoginUser from "./components/users/LoginUser";
import LogoutUser from "./components/users/LogoutUser";

import store from "./store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Events} />
                <Route exact path="/event/add" component={AddEvent} />
                <Route exact path="/event/delUpd" component={EventsDelUpd} />
                <Route exact path="/event/edit/:id" component={EditEvent} />
                <Route exact path="/user/login" component={LoginUser} />
                <Route exact path="/user/logout" component={LogoutUser} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
