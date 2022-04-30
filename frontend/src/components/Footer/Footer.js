import React, { Component } from 'react';
import './Footer.css';

// class Footer extends Component{
//     render(){
//         return(
//             <section className='section footer'>
//                 {/*There are three columns for contents in footer*/}
//                 <div className='container'>
//                     <div className='row'>
//                         <div className='col-md-4'>
//                             {/*First Column*/}
//                             <h6>Green Kitchen</h6>
//                             <p className='text'>
//                             Careers Investors Relations Press <br/>
//                             Green Kitchen app<br/>
//                             Covid-19 safety 
//                             </p>
//                         </div>
//                         {/*Second Column*/}
//                         <div className='col-md-4'>
//                             <h6>Contact Info</h6>
//                             <div><p className=' mb-1'>360 Huntington Ave, Boston, MA 02115</p></div>
//                             <div><p className=' mb-1'>+1 987 654 3210</p></div>
//                             <div><p className=' mb-1'>admin@greenkitchen.com</p></div>
//                         </div>
//                         {/*Third Column*/}
//                         <div className='col-md-4'>
//                             <h6>Customer Service Hours</h6>
//                             <div><p className=' mb-1'>Monday - Thursday</p></div>
//                             <div><p className=' mb-1'>10:00AM - 11:00PM</p></div>
//                             <div><p className=' mb-1'>Friday - Sunday</p></div>
//                             <div><p className=' mb-1'>12:00AM - 03:00AM</p></div>
//                         </div>
//                         <hr/>
//                         <p>© 2021 Green Kitchen. All rights reserved.</p>
//                     </div>
//                 </div>
//             </section>
//         );
//     }
// }

const Footer = () => {
    return (
        <section className='section footer'>
            {/*There are three columns for contents in footer*/}
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        {/*First Column*/}
                        <h6>Shared Spaces</h6>
                        <p className='text'>
                            Careers Investors Relations Press <br />
                            Green Kitchen app<br />
                            Covid-19 safety
                        </p>
                    </div>
                    {/*Second Column*/}
                    <div className='col-md-4'>
                        <h6>Contact Info</h6>
                        <div><p className=' mb-1'>360 Huntington Ave, Boston, MA 02115</p></div>
                        <div><p className=' mb-1'>+1 987 654 3210</p></div>
                        <div><p className=' mb-1'>admin@greenkitchen.com</p></div>
                    </div>
                    {/*Third Column*/}
                    <div className='col-md-4'>
                        <h6>Customer Service Hours</h6>
                        <div><p className=' mb-1'>Monday - Thursday</p></div>
                        <div><p className=' mb-1'>10:00AM - 11:00PM</p></div>
                        <div><p className=' mb-1'>Friday - Sunday</p></div>
                        <div><p className=' mb-1'>12:00AM - 03:00AM</p></div>
                    </div>
                    <hr />
                    <p>© 2021 Green Kitchen. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}


export default Footer;