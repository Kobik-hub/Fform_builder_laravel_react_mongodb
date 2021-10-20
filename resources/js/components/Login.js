import React, {useContext, useState} from "react";
import ReactDOM from "react-dom";
import axios from '../axios';
import {UserContext} from './Index';
import { useHistory } from "react-router-dom";

function Login() {

    const { user,setUser } = useContext(UserContext);
    const [userInfoLogin,setUserInfoLogin] = useState({email:"",password:""});
    const history = useHistory();


    const onLoginHandler =async (e)=>{

        try{
            e.preventDefault();
            const {data} = await axios.post('/login',userInfoLogin);
            const user = data.user;
            const token = data.token;
            setUser({
                id: user._id,
                name: user.name,
                email: user.email,
                token: token
            });
            localStorage.setItem("user", JSON.stringify(user));
            history.push("/");
        }catch (e){
            console.log(e);
        }
    }

    return (
        <div style={{height: '90vh'}} className='d-flex flex-row justify-content-center align-items-center'>
        <div className={'border rounded p-5 '}>
        <h1 className={'mb-4 text-center'}>Login</h1>
        <form className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input onChange={(e)=>setUserInfoLogin({...userInfoLogin,email:e.target.value})} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input onChange={(e)=>setUserInfoLogin({...userInfoLogin,password:e.target.value})} type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
            <div className='col-md-12 text-center'>
        <button onClick={(e)=>onLoginHandler(e)} type="submit" className="btn btn-dark align-center">Sign In</button>
            </div>
    </form>
    </div>
        </div>)
}

export default Login;


