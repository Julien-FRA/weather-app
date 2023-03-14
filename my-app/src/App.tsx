import React from "react";
import "./assets/css/main.css";
import Router from "./Router";
import Header from "./components/inc/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
