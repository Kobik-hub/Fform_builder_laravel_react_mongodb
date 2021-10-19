import React from "react";
import ReactDOM from "react-dom";
import Login from "./Login";


function Index() {

    return <div style={{height: '100vh'}} className='d-flex flex-row justify-content-center align-items-center'>
        <Login/>
    </div>
}

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
