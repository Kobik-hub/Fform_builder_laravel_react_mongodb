import React, {useContext, useEffect, useState} from "react";
import axios from '../axios';
import {UserContext} from './Index';

function Forms() {

    const { user } = useContext(UserContext);
    const [forms,setForms] = useState([]);

    useEffect(() => {
        const fetchForms = async () => {
            const userId = user._id;
            console.log(userId);
            const {data}  = await axios.get(`users/forms/${userId}`);
            console.log(data);
            setForms(data);
        };
        fetchForms();
    }, []);

    return (
        <div className={'container mt-3'}>
            <h1 className={'text-center pb-3'}>Forms list page</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Form Id</th>
                    <th scope="col">Form Name</th>
                    <th scope="col"># Submissions</th>
                    <th scope="col">Submit Page</th>
                </tr>
                </thead>
                <tbody>
                {
                    forms.length > 0 &&  forms.map((form)=>{
                        return(
                            <tr>
                                <td>{form._id}</td>
                                <td>{form.name}</td>
                                <td>{form.submissions}</td>
                                <td><a href={`/forms/${form._id}`}>View button</a></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )


}

export default Forms;


