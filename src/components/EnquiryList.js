import axios from "axios";
import { useEffect, useState } from "react";


const EnquiryList = () => {


   let [enquiries,setEnquiries] =  useState();
//use axios, and use get on backend url to get enquiries
 
useEffect( () => {    
    async function fetchData() {
        let resp =  await axios.get(process.env.REACT_APP_BACKEND_URL+'allenquiries');
        let data = await resp.data;  
        setEnquiries(data);
        console.log(data);
      }
      fetchData();    
  },[]);


  if(!enquiries) {
    <h3>Loading enquiries. Please wait. </h3>
  }
  else {
    return (
<div>
    <h3> Enquiries Received so far:</h3>
    <div class="table-responsive">
    <table class="table table-primary">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
                <th scope="col">Remarks</th>
            </tr>
        </thead>
        <tbody>
            {
                enquiries.map(
                    (elem) => {
                        return <tr class="">
                            <td scope="row">{elem.ename}</td>
                            <td>{elem.email}</td>
                            <td>{elem.date}</td>
                            <td>{elem.remarks}</td>
                        </tr>
                    }
                )
            }
           
           
        </tbody>
    </table>
    </div>
        </div>
     );
}
}
 




export default EnquiryList;