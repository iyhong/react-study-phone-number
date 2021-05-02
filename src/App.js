import {useState} from 'react'
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

function App() {
  
  let age = 5;
  // let id = useState(0)
  
  const [name, setName] = useState('gg')
  const [count, setCount] = useState(0)
  const [id, setId] = useState(3)
  const [keyword, setKeyword] = useState('');
  const [information, setInfomation] = useState([
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

  const handleChange = (e) => {
    setKeyword(e.target.value)
  }

  const handleCreate = (data) => {
    console.log(id)
    setInfomation(information.concat({
      ...data,
      id: id
    }));
    age = age+1;
    setId(id+1);
  }

  const handleRemove = (id)=>{
    console.log('handleRemove')
    setInfomation(information.filter(info => info.id !== id))
  }

  const handleUpdate = (id, data) =>{
    setInfomation(information.map(info => {
      if(info.id === id) return {id, ...data}
      else return info;
    }))
  }

  return (
    <div className="App">
      <PhoneForm onCreate={handleCreate}/>
      <input 
        value={keyword} 
        onChange={handleChange} 
        placeholder="검색..."
      />
      <PhoneInfoList 
        data={information.filter(info=>info.name.indexOf(keyword)>-1)}
        onRemove={handleRemove}
        onUpdate={handleUpdate}
        />
    </div>
  );
}

export default App;
