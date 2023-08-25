
import TableData from "./TableData";
import { Table } from "react-bootstrap";
function DynamicTable(){

// get table column
 const column = Object.keys(TableData[0]);

 // get table heading data
 const ThData =()=>{
    
     return column.map((data)=>{
         return <th className="col-wrapper" key={data}>{data}</th>
     })
 }

// get table row data
const tdData =() =>{
   
     return TableData.map((data)=>{
       return(
           <tr>
                {
                   column.map((v)=>{
                       return <td >{data[v]}</td>
                   })
                }
           </tr>
       )
     })
}


  return (
    <div className="table-wrapper" >
      <Table striped bordered  variant="dark" responsive >
        <thead>
         <tr >{ThData()}</tr>
        </thead>
        <tbody>
        {tdData()}
        </tbody>
       </Table>
       </div>
       
  )
}
export default DynamicTable;