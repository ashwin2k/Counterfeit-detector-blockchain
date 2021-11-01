import Button from '@mui/material/Button';

import './App.css';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {
  var [productName,setProductName]=useState("")
  const checkProduct=()=>{
    fetch(`http://127.0.0.1:8000/check_chain?item=${productName}`)
    .then(res => res.json())
      .then(
        (result) => {
          alert("RESULT:"+ result.message);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert("Error!")
        }
      )
  }
  const newProductBlock=()=>{
    fetch("http://127.0.0.1:8000/mine_block")
      .then(res => res.json())
      .then(
        (result) => {
          alert("Mined Block:"+ result.hash)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert("Error!")
        }
      )
  }
  return (
    <div className="App" style={{width:"100vw",height:"100vh"}}>
      <div style={{display: 'flex', flexDirection: 'column',justifyContent: 'center',alignItems: 'center',height:"90%"}}>
        <h1>Product Scanning System</h1>
        <TextField id="outlined-basic" label="Enter Number" variant="outlined" style={{width: '50%'}} value={productName} onChange={(e)=>setProductName(e.target.value)}/>
        <div style={{display:"flex", flexDirection:"row",width: '50%',justifyContent:"space-between",marginTop: '15px'}}>
            <Button variant="contained" onClick={checkProduct}>Check genuinity</Button>
          
            <Button variant="contained" onClick={newProductBlock}>Add new item</Button>

            <Button variant="contained" >IDK what this is for</Button>
        </div>
        
      </div>
    </div>
  );
}

export default App;
