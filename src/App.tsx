import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Landing from "./components/Landing";
import Game from "./components/Game";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/game" exact component={Game} />
    </BrowserRouter>
  );
}

export default App;
