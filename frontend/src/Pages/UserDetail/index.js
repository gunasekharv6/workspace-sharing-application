import React, {Component} from 'react';
import {getCombo} from "../../services/palnServices";
import ComboPreview from "../../components/ComboPreview";
import './layout.scss'
import {Button} from 'react-bootstrap';

class UserDetail extends Component {
    //set state of ViewPlan
    state={comboList:[]};

    /** query all combos from database
     *
     * @returns {Promise<void>}
     */
    initState=async ()=>{
        const user=localStorage.getItem("user");
        const {data}=await getCombo(user);
        // console.log(data);
        this.setState({comboList:data});
    }

    /** clear cur user from localStorage
     *
     */
    logOut=()=>{
        localStorage.clear();
        this.props.removeUser();
    }

    /** initialize state
     *
     */
    componentDidMount() {
        this.initState();
    }

    render() {
        const {comboList}=this.state;
        return (
            <div>
                <ul className="card-list">
                    {
                        comboList.map((combo)=>{
                            return <ComboPreview key={combo._id} {...combo} deleteCurCombo={this.props.deleteCombo}/>;
                        })
                    }
                </ul>
                <div className="but1">
                    <p></p>
                    <Button onClick={this.logOut} bsStyle="primary">Log-Out</Button>
                </div>
            </div>
        );
    }
}

export default UserDetail;