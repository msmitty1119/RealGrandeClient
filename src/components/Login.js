import axios from "axios";
import { useState } from "react";
import {useNavigate}  from 'react-router-dom';


const Login = () => {
  let [formObj, setFormObj] = useState({ email: '', password: '' });
  let [invalidLoginMsg, setInvalidLoginMsg] = useState('');
   let navigate = useNavigate();


  let changeHandler = (e) => {
    //console.log(e.target.value);
    setFormObj(e.target.value);
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
    //console.log(formObj);
  }


  let clickHandler = (e) => {
    e.preventDefault();
    // console.log(formObj);    
    let authCheck= async () => {
    try{
      console.log(" in try block");    
      const options = {
        headers: {"content-type": "application/json"}
      }
      let resp = await axios.post(process.env.REACT_APP_BACKEND_URL+"login",{...formObj},options);
      let userdata = await resp.data;
      if(userdata == 'Authentication Failed') {        
        //set message - use state variable
        setInvalidLoginMsg(" Sorry. Invalid login credentials.Please try again");
      }
      else {
        console.log("auth passed!");
        console.log(userdata);
        setInvalidLoginMsg('');
       // localStorage.setItem('custname',userdata.name);
       // localStorage.setItem('custemail',userdata.email);


      sessionStorage.setItem('custname',userdata.name);
      sessionStorage.setItem('custemail',userdata.email);
      console.log("role is "+ userdata.role)
      if(userdata.role == 'realtor')
        navigate('/enquiries');
      else
        navigate('/');
      }
    }
    catch(e){
      console.log(e);
    }
    }
    authCheck();
  }


  return (
    <div className="row">
          <div className="col-sm-6 offset-3">
        <form encType="application/json">
       
          <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input type="email" onChange={(e) => changeHandler(e)} name="email" id="email" className="form-control" placeholder="" aria-describedby="helpId" />
            <small id="helpId" className="text-muted"> your email address</small>
          </div>




          <div className="mb-3">
            <label htmlFor="" className="form-label">Password</label>
            <input type="text" onChange={(e) => changeHandler(e)} name="password" id="password" className="form-control" placeholder="" aria-describedby="helpId" />
            <small id="helpId" className="text-muted">Your password</small>
          </div>


          <h6 className="text-danger">  {invalidLoginMsg} </h6>
   
          <button type="submit" onClick={clickHandler} className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
}


export default Login;
 
