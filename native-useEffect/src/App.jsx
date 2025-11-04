import { useState,useEffect } from 'react'

const StopWatch = ()=>{
  const [time,setTime] = useState(0);

  useEffect(() => {
    const intravel = setInterval(() => {
      setTime((t) => {
        console.log(t); 
        return t+1;
      });
      return () => clearInterval(intravel);
    },1000)
  },[])

  return <div>Time : {time}</div>;
}
function App() {

  const [names,setNames] = useState([]);

  useEffect(() => {
    fetch("/names.json")
    .then((respose) => respose.json())
    .then((data) => setNames(data));
  },[]);

  const[selectedName,setSelectedName] = useState();
  const [details,setDetails] = useState();

  useEffect(() => {
    fetch(`/${selectedName}.json`)
    .then((respose) => respose.json())
    .then((data) => setDetails(data));
  },[selectedName]);

  return (
    <div>
      <StopWatch/>
      <div>
        {names.map((name) =>(
          <button onClick={() => setSelectedName(name)}>{name}</button>
        ))}
      </div>
      <div>{JSON.stringify(details)}</div>
    </div>
  )
}

export default App