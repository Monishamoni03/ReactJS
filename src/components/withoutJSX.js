import React from 'react';
import ReactDOM from 'react-dom';
class withoutJSX extends React.Component{
  render() {
    return React.createElement('div', null);
  }
}
const e = React.createElement;   //e-->synthetic event
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(e('div',null,'React without JSX'));

export default withoutJSX;