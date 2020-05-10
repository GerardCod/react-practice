import React from "react";
import "./styles.css";
import Header from "./components/header";
import InteractiveDiv from "./components/interactive-div";

export default function App() {
  return (
    <div className="App">
      <Header url="#" />
      <InteractiveDiv click={() => alert("click at div")} />
    </div>
  );
}
