import axios from 'axios';
import React, { Component, useEffect }  from 'react';
import './App.css';


function App() {
  
  const dictionaryApi = async() => {
    try{
      const data=await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );


      console.log(data);
    }catch(error){
      console.log(error);
    }
     
  }
 useEffect(() => {
  dictionaryApi();
 }, [])

  return <div className="App">HARSH</div>;
}

export default App;
