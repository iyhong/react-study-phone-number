import {useState} from 'react'
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {

  const [name] = useState('gg')
  const [count, setCount] = useState(0)

  let age = 5;
  // let id = useState(0)
  const id = useState(3)
  let getId = id[0];
  const setId = id[1];
  

  const information = useState([
    {
      id: 0,
      name: '홍길동',
      phone: '010-2233-1455'
    },
    {
      id: 1,
      name: '김미림',
      phone: '010-1111-0035'
    },
    {
      id: 2,
      name: '김민준',
      phone: '010-2113-1000'
    }
  ]);
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

  const handleUpdate = (id, data) =>{
    setInfo(arrInfo.map(info => {
      if(info.id === id) return {id, ...data}
      else return info;
    }))
  }

  return (
    <div className="App">
      <PhoneForm onCreate={handleCreate}/>
      <PhoneInfoList 
        data={arrInfo}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
        />
    </div>
  );
}

export default App;
