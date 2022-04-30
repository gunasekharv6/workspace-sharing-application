import React, {Component} from 'react';
import MyNavLink from '../../pages/MyNavLink';
import './Navbar.css';

class Navbar extends Component {
    //set state of Navbar
    state={user:null};

    /** put user into state
     *
     */
    getUser=()=>{
        this.setState({user:localStorage.getItem("user")});
        // console.log("Navbar",this.state.user);
    }

    /** initialize state
     *
     */
    componentDidMount() {
        this.getUser();
    }

    render() {
        const{user}=this.state;
        return (
            //List all pages in Nav menu
            <nav className='NavbarItems'>
                <h1 className = "navbar-logo">Shared Spaces<i className='fab fa-react'></i></h1>
                                  
                <ul className='nav-menu active'>
                    <li ><MyNavLink to="/home" className="nav-item">Home</MyNavLink></li>
                    <li ><MyNavLink to="/AboutUs" className="nav-item">About Us</MyNavLink></li>
                    {/*control the accessibility of view and create combo page*/}
                    <li ><MyNavLink to={user===null?"/login":"/create"} onClick={this.getUser} className="nav-item">New Plan</MyNavLink></li>
                    <li ><MyNavLink to={user===null?"/login":"/view"} onClick={this.getUser} className="nav-item">View Plan</MyNavLink></li>
                    <li ><MyNavLink to={user===null?"/login":"/account"} onClick={this.getUser} className="nav-item">My Account</MyNavLink></li>   
                    <li ><MyNavLink to={user===null?"/login":"/locations"} onClick={this.getUser} className="nav-item">Find Locations</MyNavLink></li>                               
                </ul>       
            </nav>
        );
    }

}


export default Navbar;