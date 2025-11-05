import { useRef,useEffect, useState } from 'react'
// import './App.css'

function App() {

  const inputRef = useRef(null); 
  
  const initialValue =[
    {id: 1, name:"Ari"},
    {id: 2, name:"John"}
  ];
  const idRef = useRef(initialValue.length+1);

  const [names,setNames] = useState(() => initialValue);

  useEffect(()=>{
    inputRef.current.focus();
  },[]);

  const addName = () =>{
    const val = inputRef.current?.value?.trim();
    if (!val) return;     
    setNames((prev) => [...prev, { id: idRef.current++, name: val }]);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const onKeyDown =(e) => {
    if(e.key =='Enter') addName();
  }

  return (
    <div>
      <div>
        {names.map((name) => (
          <div key={name.id}>{name.id} - {name.name}</div>
        ))}
      </div>
      <div>
        <input type="text" ref={inputRef} onKeyDown={onKeyDown}/>
        <button onClick={addName}>ADD</button>
      </div>
    </div>
  );
}

export default App
