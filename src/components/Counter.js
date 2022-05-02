import React from "react";

const Counter = React.forwardRef((props, ref) => {
       return (
         <div className="App">
           <input type="text" ref={ref} />
         </div>
       )
})
   
export default Counter;