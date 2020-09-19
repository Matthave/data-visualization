import React from "react";
import Navigation from "./containers/Navigation/Navigation";
import Header from "./containers/Header/Header";
import Main from "./containers/Main/Main";
import "./css/style.css";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <Main />
    </div>
  );
}

export default App;
