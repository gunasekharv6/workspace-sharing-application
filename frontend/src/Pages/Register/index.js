import React, { Component } from 'react';
import { addNewUser, getUser } from "../../services/userService";
import MyNavLink from '../../pages/MyNavLink';
import { Button, ControlLabel, FormControl, FormGroup, Row } from "react-bootstrap";
import './register.scss'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/Footer';
import Background from '../../components/Background/Background';
import MapContainer from '../../components/MapContainer/MapContainer';

class Register extends Component {
    //set state of Register
    state = { isSame: false, existed: false, confirm: false };

    /** add user to database
     *
     * @param event
     * @returns {Promise<void>}
     */
    addUser = async (event) => {
        event.preventDefault();
        const { username, password, mail } = this;
        const { data } = await getUser(mail.value);
        if (data.length !== 0) {//check whether cur user is existed
            this.setState({ existed: true });
            return;
        }
        if (!this.state.isSame)
            return;
        await addNewUser({ Username: username.value, Mail: mail.value, Password: password.value });
        this.props.addUser();
    }

    /** confirm two passwords are same or not
     *
     */
    confirmPassword = () => {
        this.setState({ confirm: true });
        const { password, re_password } = this;
        if (password.value !== re_password.value) {
            this.setState({ isSame: false });
        } else {
            this.setState({ isSame: true });
        }
    }

    render() {
        return (
            <div >
                <Background />
                <br />
                <h3 className='promo'>Sign up to book your spaces with your favorite ameneties!</h3>
                <Row className="Register">
                    <form onSubmit={this.addUser}>
                        <FormGroup>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl type="text" name="username" placeholder="Enter your user name" inputRef={c => this.username = c} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" placeholder="Enter your email" inputRef={c => this.mail = c} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" placeholder="Enter your password" inputRef={c => this.password = c} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Confirm Password</ControlLabel>
                            <FormControl type="password" name="password" placeholder="Please confirm password here" inputRef={c => this.re_password = c} onChange={this.confirmPassword} />
                            {/*control the visibility and content of warning line depending on user's input*/}
                            <span style={{ display: (!this.state.isSame && this.state.confirm) || this.state.existed ? 'block' : 'none' }}>
                                {this.state.existed ? <MyNavLink to="/login">User already existed,please Login</MyNavLink> : "Please enter same password!"}
                            </span>
                        </FormGroup>
                        <p></p>
                        <Button type="submit" bsStyle="primary">Register</Button>
                    </form>
                </Row>
                <hr />
                <section className='section1'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">We are committed to change</h3>
                                <div className="underline mx-auto"></div>
                                <p>
                                    In a world where the long- and short-term effects of climate change pose major challenges for farmers, the need for regenerative food systems has never been more important. That’s why we’ve made a promise to do more for the planet, by taking less. Our plant-forward menu means that we’re already on average 30% less carbon intensive than the average American meal.
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

export default Register;