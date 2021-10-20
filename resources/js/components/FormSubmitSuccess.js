import React, { useEffect, useState} from "react";

import axios from '../axios';
import { useHistory } from "react-router-dom";
const FormSubmitSuccess = ({  })=>{


    return (
        <div className={'container d-flex p-2  mt-5 align-items-center justify-content-center'}>
            <h1>
                The form has been successfully submitted
            </h1>
        </div>
    )
}

export default FormSubmitSuccess;


