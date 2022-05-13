import { useState } from "react";

function UseState() {
  const [color, setColor] = useState("Black");
  
  return (
    <div>
      <h1>My car color is {color}</h1>
    </div>
  )
}

export default UseState;