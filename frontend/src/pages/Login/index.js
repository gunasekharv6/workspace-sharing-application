import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from "../../services/userService";
import './login.scss';
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import MapContainer from '../../components/MapContainer/MapContainer';
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Background/Background';

class Login extends Component {
    //set state of Login
    state = { find: false, submitted: false };

    /** find user
     * If user is verified successfully,put user info into localStorage
     * @param event
     * @returns {Promise<void>}
     */
    // findUser=async (event)=>{
    //     event.preventDefault();
    //     this.setState({submitted:true});
    //     const{email,password}=this;
    //     const {data}=await getUser(email.value);
    //     if(data.length===0 || data[0].Password!==password.value)//if user doesn't exist or password doesn't match
    //         return;
    //     this.setState({find:true});
    //     localStorage.setItem("user",email.value);
    //     localStorage.setItem("password",password.value);
    //     this.props.getUser();
    // }

    findUser = async (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this;
        console.log("Inside findUser in Frontend Login page. email:", email.value);
        console.log("Inside findUser in Frontend Login page. password:", password.value);
        const { data } = await getUser({ email: email.value, password: password.value });
        console.log("Inside findUser in Frontend Login page 2", data);
        if (data.length === 0)//if user doesn't exist or password doesn't match
            return;
        this.setState({ find: true });
        localStorage.setItem("user", email.value);
        localStorage.setItem("password", data[0].Password);
        this.props.getUser();
    }

    render() {
        const { find, submitted } = this.state;
        return (
            <div>
                <Background />
                <Row className="Login">
                    <h1>LOGIN</h1>
                    <form onSubmit={this.findUser}>
                        <span style={{ display: submitted && !find ? 'block' : 'none' }}>E-mail or password is wrong.</span>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" placeholder="Enter your email" inputRef={c => this.email = c} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" placeholder="Enter your password" inputRef={c => this.password = c} />
                        </FormGroup>
                        <p></p>
                        <Button type="submit" bsStyle="primary">Sign-In</Button>
                        <p></p>
                        <span>Don't have account?<Link to="/register">Create Account</Link></span>
                    </form>
                </Row>
                <hr />

                <section className='section1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">We are committed to change to serve you</h3>
                                <div className="underline mx-auto"></div>
                                <p>
                                    In a world where infrastructural is not being considered to be that important factor as work can either be get done by employees working hybrid or remote, we are willing to provide you those flexible spaces that suit you for your requirement of that particular period. Both individuals and team can book spaces and work in the atmost comfortable and peaceful environment. Our hope is to atleast provide good and affordable spaces for start up companies where budget is a strssful factor in the early stages. Even team meeting of an Fortune 500 company can also be held in our spaces as it is readily available and is sophisticated as well.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <hr />
                <MapContainer />

                <Footer />
            </div>
        );
    }
}

export default Login;