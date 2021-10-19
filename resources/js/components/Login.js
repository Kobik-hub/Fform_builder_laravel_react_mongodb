import React from "react";
import ReactDOM from "react-dom";
import axios from '../axios';

function Login() {
    const onLoginHandler =async (e)=>{
        try{
            e.preventDefault();
            const user = await axios.post('/login',{
                email: 'ko@gmail.com',
                password: '12345678'
            });
            console.log(user);
        }catch (e){
            console.log(e);
        }
    }

    return <div className={'border rounded p-5'}>
        <h1 className={'mb-4'}>Form Builder</h1>
        <form className="mb-3 ">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

        <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
            <div className='col-md-12 text-center'>
        <button onClick={(e)=>onLoginHandler(e)} type="submit" className="btn btn-dark align-center">Submit</button>
            </div>
    </form>
    </div>
}

export default Login;


