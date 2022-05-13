import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setDate] = useState([]);      //hooks
  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => { console.log(res.data)
    setDate(res.data)
  }).catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>AXIOS</h1>
      <table>
        <tr>
          <th>Course code</th>
          <th>Subject</th>
        </tr>
        <tr>
        <td>MA8877</td>
        <td>Maths</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
