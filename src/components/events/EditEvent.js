import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getEvent, updateEvent } from "../../actions/eventActions";
//import eventReducers from "../../reducers/eventReducers";

class EditEvent extends Component {
  state = {
    date: "",
    time: "",
    cost: "",
    name: "",
    desc: "",
    userId: "",
    no: "",
    street: "",
    city: "",
    postcode: "",
    errors: {}
  };

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    const { date, time, cost, name, desc, userId, address } = nextProps.event;

    const no = address.no;
    const street = address.street;
    const city = address.city;
    const postcode = address.postcode;
    this.setState({
      date,
      time,
      cost,
      name,
      desc,
      userId,
      no,
      street,
      city,
      postcode
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getEvent(id);
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const {
      date,
      time,
      cost,
      name,
      desc,
      userId,
      no,
      street,
      city,
      postcode
    } = this.state;

    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (date === "") {
      this.setState({ errors: { date: "Date is required" } });
      return;
    }

    if (time === "") {
      this.setState({ errors: { time: "Time is required" } });
      return;
    }

    if (desc === "") {
      this.setState({ errors: { desc: "Description is required" } });
      return;
    }

    if (street === "") {
      this.setState({ errors: { street: "Street is required" } });
      return;
    }

    if (city === "") {
      this.setState({ errors: { city: "City is required" } });
      return;
    }

    if (postcode === "") {
      this.setState({ errors: { postcode: "Postcode is required" } });
      return;
    }

    const { id } = this.props.match.params;
    const updEvent = {
      id,
      date,
      time,
      cost,
      name,
      desc,
      userId,
      address: {
        no,
        street,
        city,
        postcode
      }
    };

    this.props.updateEvent(updEvent);

    this.setState({
      id: "",
      date: "",
      time: "",
      cost: "",
      name: "",
      desc: "",
      userId: "",
      address: {},
      errors: {}
    });
    this.props.history.push("/event/delUpd");
  };
  render() {
    const {
      date,
      time,
      cost,
      name,
      desc,
      no,
      street,
      city,
      postcode,
      errors
    } = this.state;
    return (
      <div className="card mb-3">
        <div className="card-header">Update Event </div>
        <div className="card-body ">
          <form onSubmit={this.onSubmit.bind(this)}>
            <TextInputGroup
              label="Name"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={this.onChange}
              error={errors.name}
            />
            <TextInputGroup
              label="Date"
              name="date"
              value={date}
              placeholder="Enter Date"
              onChange={this.onChange}
              type="date"
              error={errors.date}
            />
            <TextInputGroup
              label="Time"
              name="time"
              value={time}
              type="time"
              placeholder="Enter Time of Event"
              onChange={this.onChange}
              error={errors.time}
            />
            <TextInputGroup
              label="Cost"
              name="cost"
              value={cost}
              placeholder="Enter Cost of Event"
              onChange={this.onChange}
              error={errors.cost}
            />
            <TextInputGroup
              label="Description"
              name="desc"
              value={desc}
              placeholder="Enter Description of Event"
              onChange={this.onChange}
              error={errors.desc}
            />
            <TextInputGroup
              label="No"
              name="no"
              value={no}
              placeholder="Enter Street no"
              onChange={this.onChange}
              error={errors.no}
            />
            <TextInputGroup
              label="Street Name"
              name="street"
              value={street}
              placeholder="Enter Street Name"
              onChange={this.onChange}
              error={errors.street}
            />
            <TextInputGroup
              label="City"
              name="city"
              value={city}
              placeholder="Enter City"
              onChange={this.onChange}
              error={errors.city}
            />
            <TextInputGroup
              label="Postcode"
              name="postcode"
              value={postcode}
              placeholder="Enter Postcode"
              onChange={this.onChange}
              error={errors.postcode}
            />

            <input
              type="submit"
              value="Edit Event"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

EditEvent.propTypes = {
  event: PropTypes.object.isRequired,
  getEvent: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  event: state.event.event
});

export default connect(mapStateToProps, { getEvent, updateEvent })(EditEvent);
