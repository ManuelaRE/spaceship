import React from "react";

import "./App.css";
import RocketForm from "./pages/Form";
import rocket from "./rocket.svg";

function App() {
  return (
    <div className="App-header">
      <h1 className="Title">Mr Little Z Spaceport</h1>
      <h5 className="Title">
        Help Mr Little Z select his spaceship by filling in the below form.
      </h5>
      <div className="App-form">
        <RocketForm />
        <img src={rocket} className="App-logo" alt="logo" />
      </div>
    </div>
  );
}

export default App;
