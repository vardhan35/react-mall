import React, { Component } from "react";
import AppButton from "../AppButton";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

class CartItem extends Component {
  render() {
    const { image, title, price, amount } = this.props.data;
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
          <Card.Text>{amount * price}</Card.Text>
          <div
            style={{
              display: "flex",
              margin: "auto",
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <AppButton
              buttonText="-"
              emitAction={() => this.props.removeFromCart(this.props.data.id)}
              style={{
                margin: "auto",
              }}
            />
            {amount}
            <AppButton
              buttonText="+"
              emitAction={() => this.props.addToCart(this.props.data)}
              style={{
                margin: "auto",
              }}
            />
          </div>
        </Card.Body>
      </Card>
    );
  }
}

CartItem.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  price: PropTypes.number,
  emitAction: PropTypes.func,
};

export default CartItem;
