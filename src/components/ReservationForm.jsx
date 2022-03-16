// every time you have to build a form, you need a STATE
// -> every time you write a form, you need a Class Components

import { Component } from "react";
import { Form, Button } from "react-bootstrap";

// name <-- string
// phone <-- string || number
// numberOfPeople <-- string || number
// smoking <-- boolean
// dateTime <-- string
// specialRequests <-- string

class ReservationForm extends Component {
  // for creating a form in React, we need a state object
  // because we're going to create a CONTROLLED FORM

  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: 1,
      smoking: false,
      dateTime: "",
      specialRequests: "",
    },
  };

  handleChange = (fieldToUpdate, value) => {
    // console.log("FIELDTOUPDATE", fieldToUpdate);
    this.setState({
      reservation: {
        ...this.state.reservation,
        [fieldToUpdate]: value,
        // this is only needed for setting an object property
        // without the square brackets, you're NOT reading your argument
        // you're actually just setting a NEW property called "fieldToUpdate"
      },
    });
  };

  render() {
    return (
      <div>
        <h2>RESERVE A TABLE NOW!!</h2>
        <Form>
          <Form.Group>
            <Form.Label>Your name</Form.Label>
            {/* Form.Control is the <input /> */}
            <Form.Control
              type="text"
              placeholder="Enter your name here"
              value={this.state.reservation.name}
              // for changing the content of this input field
              // we have to CHANGE THE STATE
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     // the spread operator allows me to start from the EXISTING reservation
                //     // ...this.state.reservation is bringing into this new reservation object
                //     // the existing properties! name, phone, numberOfPeople etc.
                //     name: e.target.value,
                //     // I should find a way of preserving the other fields here!
                //   },
                // })
                this.handleChange("name", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your phone</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone here"
              value={this.state.reservation.phone}
              onChange={(e) =>
                // this.setState({
                //   reservation: {
                //     ...this.state.reservation,
                //     phone: e.target.value,
                //   },
                // })
                this.handleChange("phone", e.target.value)
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>How many people?</Form.Label>
            <Form.Control
              as="select"
              value={this.state.reservation.numberOfPeople}
              onChange={(e) =>
                this.handleChange("numberOfPeople", e.target.value)
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Do you smoke?"
              checked={this.state.reservation.smoking}
              // checked uses true/false
              // value is "on" or "off"
              onChange={(e) => this.handleChange("smoking", e.target.checked)}
              // "checked" is just a checkbox thing :)
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date and time</Form.Label>
            <Form.Control
              type="datetime-local"
              value={this.state.reservation.dateTime}
              onChange={(e) => this.handleChange("dateTime", e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={this.state.reservation.specialRequests}
              onChange={(e) =>
                this.handleChange("specialRequests", e.target.value)
              }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ReservationForm;
