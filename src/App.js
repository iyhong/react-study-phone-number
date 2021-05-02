import {useState} from 'react'
import PhoneForm from './components/PhoneForm';

function App() {

  const [name] = useState('gg')
  const [count, setCount] = useState(0)

  let age = 5;
  // let id = useState(0)
  const id = useState(0)
  let getId = id[0];
  const setId = id[1];
  

  const information = useState([]);
  const arrInfo = information[0];
  const setInfo = information[1];

  const handleCreate = (data) => {
    console.log(getId)
    setInfo(arrInfo.concat({
      ...data,
      id: getId
    }));
    age = age+1;
    setId(getId+1);
  }

  return (
    <div className="App">
      <PhoneForm onCreate={handleCreate}/>
      {JSON.stringify(arrInfo)}
    </div>
  );
}

export default App;
