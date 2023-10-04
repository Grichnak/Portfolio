import React from "react";
import Navbar from "./components/navbar/navbar";
import Landing from "./components/landing/landing";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Portfolio />
    </div>

  );
}

export default App;
