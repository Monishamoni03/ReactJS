import React from 'react';
import ReactDOM from 'react-dom';
function Subject(){
  return <div>
    <h1>Maths</h1>
    <h1>Science</h1>
  </div>
}
function Subjectcode(){
  return <div>
    <h2>EM135</h2>
    <h2>ES531</h2>
  </div>
}
function FunctionComponent(){
  return <div>
     <Subject />
    <Subjectcode />
  </div>
}
ReactDOM.render(<App />,document.getElementById('root'))
export default FunctionComponent;