import TopBanner from './pages/TopBanner';
import ListTest from './pages/ListTest';
import './basic.css';
import { useEffect, useState } from 'react';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(result => setData(result))
  }, []);

  console.log(Object(data[0]).id)


  return (
    <div>
      {
        data.map(it => <li key={it.id}>{it.id} {it.title}</li>)
      }
    </div>
  )
}

export default App;