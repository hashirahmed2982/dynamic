import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "./dynamic-table/DynamicTable";
import axios from "axios";
import { Component } from "react";
import "./App.css";
import React, { useState, useEffect } from "react";

const App = () => {
  const [datas, setdatas] = useState([]);
 
  
  useEffect(() => {
    axios.get("http://localhost:4000/user/users").then(({ data }) => {
      setdatas(data);
      console.log(datas);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  
  if(datas.length !== 0 ){
    return (
      console.log(datas.length),
      <DynamicTable TableData={datas} />
    );
  }
  else{
    return(
      "no data found"
    );
  }
  
  
}
export default App;