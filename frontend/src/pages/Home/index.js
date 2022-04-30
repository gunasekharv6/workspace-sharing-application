import React, { Component } from 'react';
import MyNavLink from '../../pages/MyNavLink';
// eslint-disable-next-line no-unused-vars
import AboutUs from '../AboutUs/AboutUs';
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';
import Customer from '../../components/Customer/Customer';
import MapContainer from '../../components/MapContainer/MapContainer';
import Cards from '../../components/Cards/Cards';
class Home extends Component {
    render() {
        return (
            <div>
                <Slider />
                {/* Bootstrap carousel for this part of the content*/}
                <section className='section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">Our App</h3>
                                <div className="underline mx-auto"></div>
                                {/*Brieft Introduction about the restaurant*/}
                                <p>
                                    Flexible spaces that suit a team of one or any size. Spaces that will let you work in the way you want to. Desks suiting the employees working hybrid or remote. Ready to move in collaborative work environments made accesscible to you.
                                </p>
                                <MyNavLink to="../AboutUs/AboutUs" className="btn btn-warning shadow">Read More</MyNavLink>
                            </div>
                        </div>
                    </div>
                </section>



                {/*What customers say about us*/}
                <Cards />
                <Customer />
                <MapContainer />
                <Footer />
            </div>
        );
    }
}

export default Home;