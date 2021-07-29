import React, { Component } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

class AppButton extends Component {
  submitEvent() {
    if (this.props.emitAction) {
      this.props.emitAction();
    }
  }
  render() {
    const { buttonText } = this.props;
    return (
      <Button
        data-test="appButton"
        style={{ marginTop: "auto", marginBottom: "0.5rem" }}
        onClick={() => this.submitEvent()}
      >
        {buttonText}
      </Button>
    );
  }
}

AppButton.propTypes = {
  buttonText: PropTypes.string,
  emitAction: PropTypes.func,
};

export default AppButton;
