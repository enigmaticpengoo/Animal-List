import React from "react";
import Counter from "./Counter/Counter";
import AnimalList from "./Animal-List/Animal-List";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <AnimalList />
    </div>
  );
};

export default App;
