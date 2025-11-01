
import './App.css'
import User from './User'
const data= fetch('http://localhost:3000/user').then(res=>res.json());
  

function App() {
  
  

  return (
    <>
     <User data={data}></User>
    </>
  )
}

export default App
