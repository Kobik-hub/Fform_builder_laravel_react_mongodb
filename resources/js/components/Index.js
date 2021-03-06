import React,{useContext,useState} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import Register from "./Register";
import Nav from "./Nav";
import Forms from "./Forms";
import {BrowserRouter, Redirect, Route, Switch, useHistory} from "react-router-dom";
import FormBuilder from "./FormBuilder";
import FormSubmit from "./FormSubmit";
import FormSubmitSuccess from "./FormSubmitSuccess";

export const UserContext = React.createContext(null);
function Index() {
    const [user, setUser] = useState({
        name: "",
        _id: "",
        email: "",
        token:""
    });

    if(localStorage.getItem('user') && user._id < 1){
        const userFromLocalStorage = localStorage.getItem('user');
        setUser(JSON.parse(userFromLocalStorage));
    }

    return(
    <UserContext.Provider value={{ user, setUser }}>
        <Nav/>

        <BrowserRouter>
                <Switch>
                    //if user not logged in it will render login component
                    <Route exact path="/" >
                        {
                            user.name.length > 0 ? <Redirect to="/Forms" /> : <Login/>
                        }
                    </Route>
                    <Route exact path="/FormSuccess" component={FormSubmitSuccess} />
                    <Route exact path="/FormBuilder" component={FormBuilder} />
                    <Route exact path="/forms/:id" component={FormSubmit} />
                    <Route exact path="/Forms" component={Forms} />
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
