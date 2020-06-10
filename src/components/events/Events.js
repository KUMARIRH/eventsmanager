import React, { Component } from "react";
import Event from "./Event";
//import Header from "../layout/Header";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEvents } from "../../actions/eventActions";
//import AddEvent from "./AddEvent";
//import { Redirect } from "react-router-dom";

class Events extends Component {
  componentDidMount() {
    this.props.getEvents();
  }

  render() {
    const { events } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Event</span>
          List
        </h1>
        {events.map(event => {
          return <Event key={event.id} event={event} />;
        })}
      </React.Fragment>
    );
  }
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
  getEvents: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  events: state.event.events
});

export default connect(mapStateToProps, { getEvents })(Events);
