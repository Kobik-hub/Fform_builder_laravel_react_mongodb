import React from "react";
import ReactDOM from "react-dom";


function Index() {
    return <div>
        <button type="button" className="btn btn-secondary">Secondary</button>

    </div>
}

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
