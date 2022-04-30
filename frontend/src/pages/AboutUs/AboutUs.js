import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import MyNavLink from '../../pages/MyNavLink';
import MapContainer from '../../components/MapContainer//MapContainer';
import Footer from '../../components/Footer/Footer';
import about from '../../img/about.jpg';
import Cards from '../../components/Cards/Cards';
class AboutUs extends Component {
    render() {
        return (
            // used bootstrap carousels for this part of content
            <div>
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={about} class=" w-100" alt="..." />
                            <div class="carousel-caption d-none d-md-block">
                                <h1>Shared Spaces</h1>
                                <p>Find Your space</p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='section bg-c-light border-top'>
                    {/*About our story and value*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-4 text-center">
                                <h1 className="main-heading" >About Us</h1>
                                <div className="underline mx-auto"></div>
                            </div>
                            {/*Our value*/}
                            <div className='col-md-4 text-center'>
                                <h5>Our Mission</h5>
                                <p>
                                    We at Shared Spaces believe that a good and peaceful environment leads to amazing results and it would even more better if it is affordable and is readily available to move in. So, we always strive to provide the best of out capabilities to the customers, giving them the coming back to our space feeling.
                                </p>
                            </div>
                            {/*Our value*/}
                            <div className='col-md-4 text-center'>
                                <h5>Our Story</h5>
                                <p>
                                    We are four college students who were simply trying to create collaborative workspaces provding all the required amenities to the clients especially smaller firms like startup's. We want to create a business where quality was never sacrificed for convenience. On 10 April 2021, we have launched this website in Boston and then spreaded over our wings to various places.
                                </p>
                            </div>
                            {/*Our story*/}
                            <div className='col-md-4 text-center'>
                                <h5>Our Value</h5>
                                <p>
                                    We’re in the business of Real Estate and eCommerce . The better your workspaces are, the better you will feel, the better your work will be, and the easier it will be to conquer the obstacles of life.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*amenities*/}
                <section className='section'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3 className="main-heading">We are committed to serve you</h3>
                                <div className="underline mx-auto"></div>
                                <p>
                                    In a world where infrastructural is not being considered to be that important factor as work can either be get done by employees working hybrid or remote, we are willing to provide you those flexible spaces that suit you for your requirement of that particular period. Both individuals and team can book spaces and work in the atmost comfortable and peaceful environment. Our hope is to atleast provide good and affordable spaces for start up companies where budget is a strssful factor in the early stages. Even team meeting of an Fortune 500 company can also be held in our spaces as it is readily available and is sophisticated as well.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <Cards />
                <hr />
                {/*Map*/}
                <MapContainer />
                <hr />
                {/*Footer*/}
                <Footer />
            </div>
        );
    }
}

export default AboutUs;