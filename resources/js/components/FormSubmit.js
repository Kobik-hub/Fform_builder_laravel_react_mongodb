import React, { useEffect, useState} from "react";

import axios from '../axios';

const FormSubmit = ({ match })=>{

    const [formData,setFormData] = useState({
        name: "",
        form_items: []
    });
    let formId = match.params.id;
    // path = forms

    useEffect(() => {

            const fetchFormData = async () => {

                const {data}  = await axios.get(`forms/${formId}`);
                console.log(data);
                setFormData(data);
                };
            fetchFormData();
    }, []);


    const formSubmitHandler = (e) =>{
        e.preventDefault();
        let userFormInput = {}
        formData.form_items.map((input,index)=>{
            userFormInput[input.name] = e.target[index].value;
        });

        console.log(userFormInput);
    }
    return (
        <div className={'container  mt-3 text-center'}>
        <h1 className={'text-center'}>{formData.name}</h1>
            <form onSubmit={(e)=> formSubmitHandler(e)} >
                <div className="form-group mb-4 w-50 m-auto">
                    {
                        formData.name.length > 0   && formData.form_items.map((input)=>{
                            return(
                               <div className={'m-2'}>
                                   <label htmlFor={input.name}>{input.name}</label>
                                   <input type={input.type} className="form-control" id={input.name}
                                   />
                               </div>
                            )
                        })
                    }

                </div>

                <button   type="submit" className="btn btn-dark ">Submit</button>
            </form>
        </div>
    )
}

export default FormSubmit;


