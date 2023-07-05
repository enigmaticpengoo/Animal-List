import React from "react";
import Counter from "./Counter/Counter";
import AnimalList from "./Animal-List/Animal-List";

const App = () => {
  return (
    <div>
      <Counter heading={"Counter"} />
      <AnimalList />
    </div>
  );
};

export default App;
