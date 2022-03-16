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
                this.setState({
                  reservation: {
                    name: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone here" />
          </Form.Group>
          <Form.Group>
            <Form.Label>How many people?</Form.Label>
            <Form.Control as="select">
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
            <Form.Check type="checkbox" label="Do you smoke?" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date and time</Form.Label>
            <Form.Control type="datetime-local" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Any special request?</Form.Label>
            <Form.Control as="textarea" rows={4} />
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
