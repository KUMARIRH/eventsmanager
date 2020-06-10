import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import EventDelUpd from "./EventDelUpd";
import { getUserEvents } from "../../actions/eventActions";
import { Redirect } from "react-router-dom";

class EventsDelUpd extends Component {
  componentDidMount() {
    const { id } = this.props.login.userLogged;
    this.props.getUserEvents(id);
  }

  render() {
    const { events } = this.props;
    const { login } = this.props.login;

    if (!login) {
      alert("Login first to use this option");

      return <Redirect to="/" />;
    }

    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Event</span>
          List
        </h1>
        {events.map(event => {
          return <EventDelUpd key={event.id} event={event} />;
        })}
      </React.Fragment>
    );
  }
}

EventsDelUpd.propTypes = {
  events: PropTypes.array.isRequired,
  getUserEvents: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events,
  login: state.login
});

export default connect(mapStateToProps, { getUserEvents })(EventsDelUpd);
