class Home extends Component {
    render() {
        return (
            <div>
                <Slider/>
                {/* Bootstrap carousel for this part of the content*/}
                    <section className='section'>
                        <div className ="container">
                            <div className = "row">
                                <div className = "col-md-12 text-center">
                                    <h3 className ="main-heading">Our App</h3>
                                    <div className ="underline mx-auto"></div>
                                    {/*Brieft Introduction about the restaurant*/}
                                    <p>
                                    Flexible spaces that suit a team of one or any size. Spaces that will let you work in the way you want to. Desks suiting the employees working hybrid or remote. Ready to move in collaborative work environments made accesscible to you.
                                    </p>
                                    <MyNavLink to="../AboutUs/AboutUs" className = "btn btn-warning shadow">Read More</MyNavLink>                             
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Our value and story below*/}
                    <section className='section bg-c-light border-top'>
                {/*About our story and value*/}
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">About Us</h3>
                            <div className ="underline mx-auto"></div>                                                    
                        </div>
                        {/*Our value*/}
                        <div className = 'col-md-4 text-center'>
                            <h6>Our Mission</h6>
                            <p>
                            We at Shared Spaces believe that a good and peaceful environment leads to amazing results and it would even more better if it is affordable and is readily available to move in. So, we always strive to provide the best of out capabilities to the customers, giving them the coming back to our space feeling.</p>
                        </div>
                            {/*Our value*/}
                        <div className = 'col-md-4 text-center'>
                            <h6>Our Story</h6>
                            <p>
                            We are four college students who were simply trying to create collaborative workspaces provding all the required amenities to the clients especially smaller firms like startup's. We want to create a business where quality was never sacrificed for convenience. On 10 April 2021, we have launched this website in Boston and then spreaded over our wings to various places.</p>
                        </div>
                        {/*Our story*/}
                        <div className = 'col-md-4 text-center'>
                            <h6>Our Value</h6>
                            <p>
                            We’re in the business of Real Estate and eCommerce . The better your workspaces are, the better you will feel, the better your work will be, and the easier it will be to conquer the obstacles of life.
                            </p>
                        </div>
                    </div>
                </div>
        </section>
                    {/*What customers say about us*/}                   
                    <Cards/>
                    <Customer/>
                    <MapContainer/>
                    <Footer/>                    
            </div>
        );
    }
}

export default Home;