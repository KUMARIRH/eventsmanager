import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Event extends Component {
  state = {
    showEventInfo: false
  };

  render() {
    const { date, time, cost, name, desc, address } = this.props.event;
    const { street, no, city, postcode } = address;

    const { showEventInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h3>
          {name}{" "}
          <i
            onClick={() =>
              this.setState({
                showEventInfo: !this.state.showEventInfo
              })
            }
            className="fas fa-sort-down"
            style={{ cursor: "pointer" }}
          />
        </h3>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item ">
              <div className="row">
                <div className="col-3">Date: {date}</div>
                <div className="col-3">
                  Time:
                  {time}
                </div>{" "}
                <div className="col-3">Entry:{cost}</div>
              </div>
            </li>
            <li className="list-group-item">
              Addess: {no} {street} , {city} {postcode}
            </li>
            <li className="list-group-item">{desc}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired
};
export default connect(null)(Event);
