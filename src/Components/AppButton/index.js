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
      <Button data-test="appButton" onClick={() => this.submitEvent()}>
        {buttonText}
      </Button>
    );
  }
}

AppButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  emitAction: PropTypes.func.isRequired,
};

export default AppButton;
