import React, {Component, useRef, useState} from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import detail from '../../img/comboDetail/detail.png';
import bowlImg from '../../img/comboDetail/bowl.png';
import amenitiesImg from '../../img/comboDetail/base.png';
import gamingImg from '../../img/comboDetail/dreesing.png';
import roomsImg from '../../img/comboDetail/preminum.png';
import fitnessImg from '../../img/comboDetail/topping.png';
import {deleteCombo, updateCombo} from '../../services/palnServices';
import './layout.scss';

/** background div
 *
 * @type {StyledComponent<"div", AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const Background = styled.div`
    border: solid 1px black;
    position: fixed;
    left: 50%;
    top: 50%;
    background:rgba(0,0,0,0.0);
    z-index: 10;
    border-width: 0px;

    height: 100%;
    margin-top: -350px;

    width: 100%;
    margin-left: -700px;
`

/** container div
 *
 * @type {StyledComponent<"div", AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const ModalWrapper = styled.div`
  width: 500px;
  height: 660px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  top: 5%;   
  left: 30%;
  border-radius: 10px;
  overflow:auto;
`;

/** combo detail content div
 *
 * @type {StyledComponent<"div", AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const ModalContentLeft = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  border-left-radius: 10px;
  background-image:url(${detail});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  p {
    margin-bottom: 1rem;
  }
`;

/** close button
 *
 * @type {StyledComponent<(props: IconBaseProps) => JSX.Element, AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


export const ComboDetail=({combo,showModal,setShowModal})=>{
    const{_id,Name,Owner,OwnerEmail,Comments,Bowl,deleteCurCombo}=combo;
    const modalRef=useRef();

    /** function to control the visibility of combo detail
     *
     * @param event
     */
    const closeModal=event=>{
        if(modalRef.current===event.target){
            setShowModal(false);
        }
    }

    /**
     *
     * @returns {Promise<void>}
     */
    const delete_combo=async ()=>{
        deleteCombo(_id);
        deleteCurCombo();
    }

    return (
        <div>
            {showModal? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper showModal={showModal}>
                        <ModalContentLeft>
                            <h1>Detail</h1>
                            <ul className="left-container">
                                <li>Name <span>{Name}</span></li>
                                <li>Owner <span>{Owner}</span></li>
                                <li className="end1">OwnerEmail <span>{OwnerEmail}</span></li>
                                {/*read and display ingredients detail from combo attribute*/}
                                <li><img src={bowlImg}/>Bowl
                                    <ul className="ingredients">
                                        <li><img src={amenitiesImg}/>Amenities
                                            {
                                                Bowl[0].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                        <li><img src={fitnessImg}/>Fitness
                                            {
                                                Bowl[1].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                        <li><img src={roomsImg}/>Rooms
                                            {
                                                Bowl[2].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                        <li><img src={gamingImg}/>Gaming
                                            {
                                                Bowl[3].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="button-group">
                                {/*<button className="update">Update</button>*/}
                                <button className="delete" onClick={delete_combo}>Delete</button>
                            </div>
                        </ModalContentLeft>
                        <CloseModalButton
                            aria-label='Close modal'
                            onClick={() => setShowModal(prev => !prev)}
                        />
                    </ModalWrapper>
                </Background>
            ):null}
        </div>
    );
}

export default ComboDetail;