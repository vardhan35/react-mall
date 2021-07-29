import React, { useState } from "react";
import ItemCard from "./Components/Item";
import { Container, Row, ProgressBar } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import useFetch from "./FetchApi/useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./Components/cart";

function App() {
  const { data, loading, error } = useFetch("");
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isIncart = prev.find((item) => item.id === clickedItem.id);
      if (isIncart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.id === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Container className="App">
            <Row style={{ position: "relative" }}>
              {loading && (
                <ProgressBar
                  now={60}
                  style={{
                    margin: "auto",
                  }}
                  label="Loading..."
                />
              )}
              {error && <h1>Error, Try Again !</h1>}
              {data.map((data) => {
                return (
                  <ItemCard key={data.id} data={data} addToCart={addToCart} />
                );
              })}
            </Row>
          </Container>
        </Route>
        <Route>
          <Cart
            cartItems={cartItems}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
