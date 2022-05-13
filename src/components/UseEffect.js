import React from "react";
import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <div>
      <p>Number :  {count}</p> 
      <button onClick={() => setCount((a) => a + 1)}>Add</button>
      <p>Addition of Number: {calculation}</p>
    </div>
  );
}
export default UseEffect;