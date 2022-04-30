import React, {Component} from 'react';
import front1 from '../../img/front1.jpg';
import front2 from '../../img/front2.jpg';
import front3 from '../../img/front3.jpg';


class Slider extends Component{
    render(){
        return(
            // used bootstrap carousel for this part of content
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            { /* First Div of the carousel*/ }
            <div className="carousel-inner">
                <div class="carousel-item active">
                <img src={front1} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h4>Large open spaces</h4>
                    <p>Providing pleasent working spaces</p>
                </div>
                </div>
                { /* Second Div of the carousel*/ }
                <div className="carousel-item">
                <img src={front2} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h4>Work around the schedule</h4>
                    <p>Workspaces aren't boring anymore</p>
                </div>
                </div>
                { /* Third Div of the carousel*/ }
                <div className="carousel-item">
                <img src={front3} className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h4>Customisable Workspaces</h4>
                    <p>Unbeatable locations and premium amenities</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        );
    }
}
export default Slider;
