import { useState } from "react";

interface Props {
  heading: string;
}

const Counter = ({ heading }: Props) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="container text-center">
      <h1>{heading}</h1>
      <div>{counter}</div>
      <button className="btn btn-light" onClick={() => setCounter(counter + 1)}>
        Click Me!
      </button>
    </div>
  );
};

export default Counter;
