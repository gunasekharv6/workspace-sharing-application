import React, {useState} from 'react';
import PublicComboDetail from "../PublicComboDetail";
import preview1 from '../../img/preview1.png';
import preview2 from '../../img/preview2.png';
import preview3 from '../../img/preview3.png';
import preview4 from '../../img/preview3.png';
import './layout.scss';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function ComboPreview(props){
    //set state of ComboPreview
    const[showModal,setShowModal]=useState(false);

    /** control the visibility of combo detail
     *
     */
    const openModal=()=>{
        setShowModal(pre=>!pre);
    }

    // Same as ComboPreview
    const{Name}=props;
    var num=Math.floor(Math.random()*4); ;
    const preArray = [preview1, preview2, preview3, preview4];
    return (
                <div >
                    <div className="card-container">
                        <img src={preArray[num]} alt="" onClick={openModal} className="rounded"/>
                    </div>
                    <div className="name">{Name}</div>
                    <PublicComboDetail combo={props} showModal={showModal} setShowModal={setShowModal}/>
                </div>
    );
}

export default ComboPreview;