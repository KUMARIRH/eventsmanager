import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/eventActions";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

class EventDelUpd extends Component {
  state = {
    showEventInfo: false
  };

  onDeleteClick = id => {
    this.props.deleteEvent(id);
    return <Redirect to="event/delUpd" />;
  };

  render() {
    const { id, date, time, cost, name, desc, address } = this.props.event;
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
          <i
            className="fas fa-times"
            style={{ cursor: "pointer", float: "right", color: "red" }}
            onClick={this.onDeleteClick.bind(this, id)}
          />
          <Link to={`/event/edit/${id}`}>
            <i
              className="fas fa-pencil-alt"
              style={{
                cursor: "pointer",
                float: "right",
                color: "black",
                marginRight: "1rem"
              }}
            />
          </Link>
        </h3>
        {showEventInfo ? (
          <ul className="list-group">
            <li className="list-group-item">
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

EventDelUpd.propTypes = {
  event: PropTypes.object.isRequired,
  deleteEvent: PropTypes.func.isRequired
};

export default connect(null, { deleteEvent })(EventDelUpd);
