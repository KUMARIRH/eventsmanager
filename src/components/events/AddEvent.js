import React, { Component } from "react";
import TextInputGroup from "../layout/TextInputGroup";
import { addEvent } from "../../actions/eventActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AddEvent extends Component {
  state = {
    id: "",
    date: "",
    time: "",
    cost: "",
    name: "",
    desc: "",
    no: "",
    street: "",
    city: "",
    postcode: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const {
      id,
      date,
      time,
      cost,
      name,
      desc,
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

    const { userLogged } = this.props.login;
    const userId = userLogged.id;
    const newEvent = {
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

    this.props.addEvent(newEvent);

    this.setState({
      id: "",
      date: "",
      time: "",
      cost: "",
      name: "",
      desc: "",
      no: "",
      street: "",
      city: "",
      postcode,
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
    const { login } = this.props.login;

    if (!login) {
      alert("Login  or Register  first to use this option");
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div></div>
        <div className="card mb-3">
          <div className="card-header">Add Event </div>
          <div className="card-body ">
            <form onSubmit={this.onSubmit.bind(this)}>
              <TextInputGroup
                label="Name"
                name="name"
                value={name}
                placeholder="Enter Event Name"
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
                value="Add Event"
                className="btn btn-light btn-block"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

AddEvent.propTypes = {
  addEvent: PropTypes.func.isRequired,
  login: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  login: state.login
});

export default connect(mapStateToProps, { addEvent })(AddEvent);
