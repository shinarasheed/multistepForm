import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <TextField
          label="Enter Your Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />

        <TextField
          label="Enter Your City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />

        <TextField
          label="Enter Your Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
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

        <Button
          style={{ marginTop: "3rem", marginLeft: "1rem" }}
          variant="contained"
          color="primary"
          onClick={this.back}
        >
          back
        </Button>
      </div>
    );
  }
}

const ButtonStyles = {
  marginTop: "3rem",
};
