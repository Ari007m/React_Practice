import { useState } from 'react'

function App() {

  const[list,setList] = useState(["jack","ari","Nah"]);
  const[name,setName] = useState("");

  const addList = () =>{
    setList([...list,name]);
    setName("");
  }
 
  return (
    <>
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
      <button onClick={addList}> add</button>
    </div>
    </>
  )
}

export default App
