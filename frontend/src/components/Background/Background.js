import React, {Component} from 'react';
import front4 from '../../img/front4.jpg';

class Background extends Component{
    render(){
        return(
            
            <div id="carouselExampleCaptions" className="carousel slide1" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={front4} className=" w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Find Your Space</h1>
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default Background;