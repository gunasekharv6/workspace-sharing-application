import React, {Component} from 'react';
import {getAllCombo} from "../../services/palnServices";
import PublicComboPreview from "../../components/PublicComboPreview";
import './layout.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


    class ViewPlan extends Component {
    state={comboList:[]};

    //Get all combos
    initState=async ()=>{
        // eslint-disable-next-line no-unused-vars
        const user=localStorage.getItem("user");
        const {data}=await getAllCombo();
        this.setState({comboList:data});
    }

    componentDidMount() {
        this.initState();
    }

    render() {
        const {comboList}=this.state;
        return (
            <div className="ebg">

                <ul className="card-list">
                    {
                        comboList.map((combo)=>{
                            return <PublicComboPreview key={combo._id} {...combo}/>;
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ViewPlan;