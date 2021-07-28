import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import AppButton from "../AppButton";
class ItemCard extends Component {
  render() {
    const { img, title, desc } = this.props;
    return (
      <Card style={{ width: "18rem" }} data-test="itemCard">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <AppButton emitAction={this.props.emitAction} data-test="appButton">
            Add to Cart
          </AppButton>
        </Card.Body>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  img: PropTypes.any,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  emitAction: PropTypes.func.isRequired,
};

export default ItemCard;
