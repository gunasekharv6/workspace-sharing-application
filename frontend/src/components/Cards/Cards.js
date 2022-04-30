import React, {Component} from 'react';
import flex1 from '../../img/flex1.jpg';
import flex2 from '../../img/flex2.jpg';
import flex3 from '../../img/flex3.jpg';

class Cards extends Component{
    render(){
        return(
            // used bootstrap cards for this part of content
            <section className='section border-top'>
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">The Perfect Workspace You Need</h3>
                            <div className ="underline mx-auto"></div>                                                    
                        </div>
                        {/*customer food sourcing*/}
                        <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {flex1} width="214px" height="225px" className='w-100 border-bottom' alt="Flexible Spaces"/>
                            <div className = "card-body">
                                <h5>Flexible Meeting Spaces</h5>
                                <p>
                                Our offices are ready to move-in and available in various sizes wheather you need a desk for hybrid or remote employees. <strong>Scale your space simply</strong>when your team needs it.
                                </p>
                            </div>
                            </div>
                        </div>
                            {/*Best Work Anywhere*/}
                            <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {flex2} width="214px" height="225px" className='w-100 border-bottom' alt="Best Work Anywhere"/>
                            <div className = "card-body">
                                <h5>Do your Best Work Anywhere</h5>
                                <p>
                                You get to choose the amenities you require and so that you can focus on the work you do make the best out of the time you spend at our space.
                                </p>
                            </div>
                            </div>
                        </div>
                        {/*Service*/}
                        <div className = 'col-md-4 '>
                            <div className = "card shadow">
                            <img src = {flex3} width="214px" height="225px" className='w-100 border-bottom' alt="Serviced Offices"/>
                            <div className = "card-body">
                                <h5>Serviced Offices</h5>
                                <p>
                                You can focus on your work and we will take care of everything else. All the utilities and services included with the minimal upfront costs. We provide you with most cost effective deals than a traditional office space. 
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

export default Cards;