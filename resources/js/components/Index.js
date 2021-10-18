import React from "react";
import ReactDOM from "react-dom";

function Index() {
    return <h1>start</h1>;
}

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
