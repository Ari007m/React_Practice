import { useMemo, useState } from 'react'

function SortedNames({list}){
  const sortedNames =useMemo(() => {
    return [...list].sort();
  },[list]);

  return(
    <div>
      {sortedNames.join(", ")}
    </div>
  )
}

function App() {
  const [numbers] = useState([10,20,30]);
  const total = useMemo(() => numbers.reduce((acc,number) => acc+number,0),[numbers]);

  const [names] = useState(["Ari","john","bill"]);

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const countTot = useMemo(() => count1+count2 ,[count1,count2]);

  return (
    <>
      <div>Total : {total}</div>
      <div>Names : {names.join(", ")}</div>
      <div>sortedNames : {<SortedNames list={names}/>}</div>
      <button onClick={() => {setCount1(count1+1)}}>Count1 : {count1}</button>
      <button onClick={() => {setCount2(count2+1)}}>Count2 : {count2}</button>
      <div>Total Count: {countTot}</div>
    </>
  )
}

export default App
