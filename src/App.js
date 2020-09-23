import React from "react";
import Jumbotron from "./components/jumbotron";
import Jumbodata from "./fixtures/jumbo.json";

import "./App.css";

function App() {
  return (
    <Jumbotron.Container>
      {Jumbodata.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Pane>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Pane>
          <Jumbotron.Pane>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Pane>
          <p>{item.id}</p>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}

export default App;
