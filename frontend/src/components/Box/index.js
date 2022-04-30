import React, {Component} from 'react';
import './Box.css';
class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 0,
            id: props.id
        }
    }

    /**
     * increase count
     */
    increase() {
        this.setState({
            num: (this.state.num == this.props.max) ? this.props.max : (this.state.num + 1)
        });
        this.props.increaseGoods(this.state.id, this.state.num + 1);
    }

    /**
     * decrease count
     */
    decrease() {
        this.setState({
            num: (this.state.num == this.props.min) ? this.props.min : (this.state.num - 1)
        });
        this.props.decreaseGoods(this.state.id, this.state.num + 1);
    }

    render() {
        return (
            /**
             * ADD img with Button connected by id
             */
            <div className="card text-center p-3 border bg-light" id="cardButton" >
               <img id="ingrePic" className="card-img-top"  key={this.state.id} src={require("../../img/amenities/" + this.state.id + ".jpg").default} alt="" /><br></br>
                <div className="card-body">
                <input type="button" className="btn btn-success" value='-' onClick={this.decrease.bind(this)}/>
                <input id={this.state.id} className="btn btn-success" type="button" value={this.state.num}/>
                <input type="button" className="btn btn-success" value='+' onClick={this.increase.bind(this)}/>
            </div>
            </div>
        )
    }
}

export default Box;