import React from "react";
import Counter from "./Counter/Counter";
import ListGroup from "./List-Group";

const App = () => {
  return (
    <div>
      <Counter heading={"Counter"} />
      <ListGroup />
    </div>
  );
};

export default App;
