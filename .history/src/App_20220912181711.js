import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home/Home";
import List from "./components/List/List";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router basename="/my-flying">
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
