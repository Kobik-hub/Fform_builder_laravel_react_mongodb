import React,{useContext,useState} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Nav from "./Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
        <Nav/>
      
        <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                </Switch>
    </BrowserRouter>
    </UserContext.Provider>)
}

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
