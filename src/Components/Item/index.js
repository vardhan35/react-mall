import React, { Component } from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";
import AppButton from "../AppButton";
class ItemCard extends Component {
  render() {
    const { image, title, price } = this.props.data;
    return (
      <Card
        style={{
          width: "18rem",
          margin: "1rem auto",
          justifyContent: "space-between",
          display: "flex",
        }}
        data-test="itemCard"
      >
        <Card.Img
          variant="top"
          src={image}
          style={{ width: "16rem", height: "16rem", margin: "0.5rem" }}
        />
        <Card.Body
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <AppButton
            emitAction={this.props.emitAction}
            data-test="appButton"
            buttonText="Add To Cart"
          />
        </Card.Body>
      </Card>
    );
  }
}

ItemCard.propTypes = {
  imgage: PropTypes.any,
  title: PropTypes.string,
  price: PropTypes.number,
  emitAction: PropTypes.func,
};

export default ItemCard;
