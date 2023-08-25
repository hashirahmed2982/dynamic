import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from "./dynamic-table/DynamicTable";
import { Component } from "react";
import "./App.css";

class App extends Component{
  render(){
  return (
    <DynamicTable />
  );
  }
}
export default App;