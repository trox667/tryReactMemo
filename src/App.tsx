import React, { useEffect, useState, useCallback } from "react";
const App = () => {
  const [count, setCount] = useState(0);

  const [countEven, setCountEven] = useState(0);

  const increment = (_e) => setCount(count + 1);

  console.log("render App component", count, countEven);

  useEffect(() => {
    if (count > 0 && count % 2 === 0) setCountEven(countEven + 1);
  }, [count]);

  return (
    <div>
      <h1>App component</h1>
      <button onClick={increment}>Increment</button>
      <Child count={countEven} />
    </div>
  );
};

export default App;

interface Props {
  count: number;
}
const Child: React.FC<Props> = React.memo((props) => {
  console.log("render Child component", props.count);
  return <h2>Child component</h2>;
});
