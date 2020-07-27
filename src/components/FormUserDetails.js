import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <TextField
          label="Enter Your First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />

        <TextField
          label="Enter Your Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />

        <TextField
          label="Enter Your Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <Button
          style={ButtonStyles}
          variant="contained"
          color="primary"
          onClick={this.continue}
        >
          continue
        </Button>
      </div>
    );
  }
}

const ButtonStyles = {
  marginTop: "3rem",
};
