import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    //process form here
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <div>
        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="bio" secondary={bio} />
          </ListItem>
        </List>
        <Button
          style={ButtonStyles}
          variant="contained"
          color="primary"
          onClick={this.continue}
        >
          Confirm & Continue
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
