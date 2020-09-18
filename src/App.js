import React from "react";
import Navigation from "./components/Navigation/NaviagtionView";
import Header from "./components/Header/Header";
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
