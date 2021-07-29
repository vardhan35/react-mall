import React from "react";
import ItemCard from "./Components/Item";
import { Container, Row, ProgressBar } from "react-bootstrap";
import NavBar from "./Components/Navbar";
import useFetch from "./FetchApi/useFetch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const { data, loading, error } = useFetch("");
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
                return <ItemCard key={data.id} data={data} />;
              })}
            </Row>
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
