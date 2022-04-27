import React, {Component} from 'react';
import {Route,Redirect,Link,withRouter,Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.js';
import Home from './pages/Home';
import NewPlan from './pages/NewPlan';
import ViewPlan from './pages/ViewPlan';
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDetail from "./pages/UserDetail";
import './App.css';
import AboutUs from "./pages/AboutUs/AboutUs";
import Locations from "./pages/Locations"

class App extends Component {

    /** redirect user to his/her combo list after login successfully
     *
     */
    getUser=()=>{
        this.props.history.push('/account');
    }

    /**redirect user to login page after log out
     *
     */
    removeUser=()=>{
        this.props.history.push('/login');
    }

    /**redirect user to login page after register successfully
     *
     */
    addUser=()=>{
        this.props.history.push('/login');
    }

    /** redirect user to my account after delete combo
     *
     */

    deleteCombo=()=>{
        this.props.history.push('/account');
    }

    render() {
        return (
            <div className="app-container">
                <div><Navbar/></div>
                <div>
                    {/*<Switch>   </Switch>  use Switch to reroute?*/}
                    <Route path="/home" component={Home}/>
                    <Route path="/create" component={NewPlan}/>
                    <Route path="/view" component={ViewPlan}/>
                    <Route path="/login" component={() => <Login getUser={this.getUser}/>}/>
                    <Route path="/register" component={() => <Register addUser={this.addUser}/>}/>
                    <Route path="/account" component={()=><UserDetail removeUser={this.removeUser} deleteCombo={this.deleteCombo}/>}/>
                    <Route path="/AboutUs" component={AboutUs}/>
                    <Route path="/locations" component={Locations}/>
                    <Redirect to="/home"/>
                   
                </div>
            </div>
        );
    }
}
//use withRouter to get access to this.props.history
export default withRouter(App);