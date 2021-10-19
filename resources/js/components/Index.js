import React,{useContext,useState} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";

import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";

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
                    //if user not logged in it will render login component
                    <Route exact path="/" >
                        {
                            user.name.length > 0 ? <Redirect to="/" /> : <Login/>
                        }
                    </Route>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
    </BrowserRouter>
    </UserContext.Provider>)
}

export default Index;

if (document.getElementById("index")) {
    ReactDOM.render(<Index />, document.getElementById("index"));
}
