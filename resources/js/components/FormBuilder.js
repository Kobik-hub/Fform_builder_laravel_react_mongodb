import React, {useContext, useEffect, useState} from "react";
import axios from '../axios';
import {UserContext} from './Index';
import { MdAddCircle } from "react-icons/md";
import { useHistory } from "react-router-dom";
function FormBuilder() {
    MdAddCircle
    const { user } = useContext(UserContext);
    const [formInputs,setFormInputs] = useState([]);
    const [formName,setFormName] = useState('');
    const [input,setInput] = useState({name:"",type:"text"})
    const [isAddInputActive,setIsAddInputActive] = useState(false);
    const history = useHistory();
    const addInputHandler = (e)=>{
        setFormInputs([...formInputs,input])
        setIsAddInputActive(false);
    }

    const onCreateFormHandler =async ()=>{
   try{
       console.log(formInputs);
       const form =await axios.post('/forms/create',{
           name : formName,
           user_id: user._id,
           form_items: formInputs
       });
       history.push("/");
   }catch (e){
       alert(e.message);
   }
    }
    return (
        <div className={'container mt-3'}>
        <h1 className={'text-center'}>Form Builder</h1>
            <h2>Form Name</h2>
            <label className={"p-2"} htmlFor="fname">Form name</label>
            <input onChange={(e)=>setFormName(e.target.value)} type="text" id="fname" name="fname"/><br/>
            <div onClick={()=> setIsAddInputActive(!isAddInputActive)} className={' mb-3'}><MdAddCircle size={30}/></div>
            {isAddInputActive &&
                <div>
                    <label className={'m-2'} htmlFor="name">Name</label>
                    <input onChange={(e)=>setInput({...input,name:e.target.value})} type="text" id="name" name="name"/><br/>
                    <label className={'m-2'} htmlFor="type">Input Type</label>
                    <select onChange={(e)=>setInput({...input,type:e.target.value})} id="type">
                        <option value="text">text</option>
                        <option value="date">date</option>
                        <option value="email">email</option>
                        <option value="tel">tel</option>
                        <option value="number">number</option>
                    </select>
                    <br/>
                    <button onClick={()=>addInputHandler() } className={'btn btn-dark mb-3'}>Add to from</button>
                </div>
            }
            <h2 className={'pb-3'}>{formInputs.length >0? 'Your Form Inputs' : 'You dont have any input yet'}</h2>
            {
                formInputs.length >0 &&
                formInputs.map((input,index)=>{
                    return(
                        <h3>{index +1}: Input name: {input.name}, Input type: {input.type}</h3>
                    )
                })
            }
            {
                formInputs.length >0 &&
                <button onClick={()=>onCreateFormHandler() } className={'btn btn-dark mb-3'}>Create Form</button>
            }
        </div>
    )


}

export default FormBuilder;


