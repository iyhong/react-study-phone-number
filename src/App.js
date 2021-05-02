import {useState} from 'react'
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

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

  const handleRemove = (id)=>{
    console.log('handleRemove')
    setInfo(arrInfo.filter(info => info.id !== id))
  }

  return (
    <div className="App">
      <PhoneForm onCreate={handleCreate}/>
      <PhoneInfoList 
        data={arrInfo}
        onRemove={handleRemove}
        />
    </div>
  );
}

export default App;
