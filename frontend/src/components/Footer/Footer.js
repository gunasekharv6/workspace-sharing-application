import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <section className='section footer'>
                {/*There are three columns for contents in footer*/}
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            {/*First Column*/}
                            <h6>Shared Spaces</h6>
                            <p className='text'>
                                Wide Open spaces with all facilities available. <br />
                                Rental Spaces<br />
                                Covid-19 safety
                            </p>
                        </div>
                        {/*Second Column*/}
                        <div className='col-md-4'>
                            <h6>Contact Info</h6>
                            <div><p className=' mb-1'>360 Huntington Avenue, Boston, MA 02115</p></div>
                            <div><p className=' mb-1'>+1(347)-111-5757</p></div>
                            <div><p className=' mb-1'>admin@sharedspaces.com</p></div>
                        </div>
                        {/*Third Column*/}
                        <div className='col-md-4'>
                            <h6>Customer Service Hours</h6>
                            <div><p className=' mb-1'>Monday - Friday</p></div>
                            <div><p className=' mb-1'>10:00AM - 11:00PM</p></div>
                            <div><p className=' mb-1'>Saturday - Sunday</p></div>
                            <div><p className=' mb-1'>10:00AM - 05:00AM</p></div>
                        </div>
                        <hr />
                        <p>© 2022 Shared Spaces. All rights reserved.</p>
                    </div>
                </div>
            </section>
        );
    }
}
export default Footer;