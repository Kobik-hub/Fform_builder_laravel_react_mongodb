import React,{useContext,useState} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";

export const UserContext = React.createContext(null);
function Index() {
    const [user, setUser] = useState({
        name: "",
        id: "",
        email: "",
        token:""
    });
    return(
    <UserContext.Provider value={{ user, setUser }}>
        {
            user.name.length > 0 ?
                <h1>kobi</h1>:
            <div style={{height: '100vh'}} className='d-flex flex-row justify-content-center align-items-center'>
                <Login/>
            </div>
        }
    </UserContext.Provider>)
}

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
