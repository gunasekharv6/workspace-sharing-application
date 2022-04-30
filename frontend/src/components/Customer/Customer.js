import React, { Component } from 'react';
import customer1 from '../../img/customer1.jpg';
import customer2 from '../../img/customer2.jpg';
import customer3 from '../../img/customer3.jpg';

class Customer extends Component {
    render() {
        return (
            // used bootstrap cards for this part of content
            <section className='section border-top'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading">What Our Users Say About Us</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        {/*customer testmonials*/}
                        <div className='col-md-4 '>
                            <div className="card shadow">
                                <img src={customer1} className='w-100 border-bottom' alt="customers" style={{ height: '275px' }} />
                                <div className="card-body" style={{ height: '230px' }}>
                                    <h6>Sai Charan K</h6>
                                    <div className='underline'></div>
                                    <p>
                                        "I love working with Shared Spaces! The spaces that they have are really great. I have referred many friends here who all love the service. It makes my life a lot easier and worth the cost.  Love the silent and workable energy they have provided."
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*customer 2*/}
                        <div className='col-md-4 '>
                            <div className="card shadow">
                                <img src={customer2} className='w-100 border-bottom' alt="customers" />
                                <div className="card-body">
                                    <h6>Pranaya G</h6>
                                    <div className='underline'></div>
                                    <p>
                                        "We absolutely loved the experience here. They really put a lot of efforts to maintain the place. They have the best support team. The staff is very friendly and we can't think of going to any other workspaces."
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*Custmer 3*/}
                        <div className='col-md-4 '>
                            <div className="card shadow">
                                <img src={customer3} className='w-100 border-bottom' alt="customers" />
                                <div className="card-body">
                                    <h6>Emma W</h6>
                                    <div className='underline'></div>
                                    <p>
                                        "When I found Shared Spaces, everything finally fell into place. Even with my incredibly high standards, they have met my expectations again and again. I have been so impressed by them and so relieved I found them."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Customer;