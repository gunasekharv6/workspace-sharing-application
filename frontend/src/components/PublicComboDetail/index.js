import React, {useRef,useState} from 'react';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
import detail from '../../img/comboDetail/detail.png';
import detail2 from '../../img/comboDetail/detail2.png';
import bowlImg from '../../img/comboDetail/bowl.png';
import amenitiesImg from '../../img/comboDetail/amenities.png';
import gamingImg from '../../img/comboDetail/gaming.png';
import roomImg from '../../img/comboDetail/room.png';
import fitnessImg from '../../img/comboDetail/fitness.png';
import cafeteriaImg from '../../img/comboDetail/cafeteria.png';
import commentImg from '../../img/comboDetail/comment.png';
import {updateCombo} from '../../services/palnServices';
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
  width: 1000px;
  height: 660px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  top: 5%;   
  left: 15%;
  border-radius: 10px;
  overflow:auto;
`;

/** combo detail content div
 *
 * @type {StyledComponent<"div", AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const ModalContentLeft = styled.div`
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

/** comment div
 *
 * @type {StyledComponent<"div", AnyIfEmpty<DefaultTheme>, {}, never>}
 */
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  border-right-radius: 10px;
  background-image:url(${detail2});
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
    const{_id,Name,Owner,OwnerEmail,Comments,Bowl,Cafeteria}=combo;
    const modalRef=useRef();
    const comment=useRef();
    const [refresh,setRefresh]=useState(Comments);

    /** use forwardRef hock to create textarea object
     *
     * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
     */
    const MyComponent = React.forwardRef((props,ref)=>(
        <textarea ref={comment} placeholder="leave your comments here!"/>
    ));

    /** function to control the visibility of combo detail
     *
     * @param event
     */
    const closeModal=event=>{
        if(modalRef.current===event.target){
            setShowModal(false);
        }
    }

    /** add comments to database
     *
     * @returns {Promise<void>}
     */
    const updateComment=async ()=>{
        const cur={"Content":comment.current.value,"Owner":localStorage.getItem("user"),"CreatedTime":new Date().toLocaleString()};
        console.log(new Date().toLocaleString());
        let newComment=[...Comments,cur];
        console.log(newComment);
        setRefresh(newComment);
        await updateCombo(_id,{Comments:newComment});
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
                                <li><img src={bowlImg} alt=" "/>Services
                                    <ul className="ingredients">
                                        <li><img src={amenitiesImg}alt=" "/>Amenities
                                            {
                                                Bowl[0].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                        <li><img src={fitnessImg} alt=" "/>Fitness
                                            {
                                                Bowl[1].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                        <li><img src={roomImg} alt=" "/>Rooms
                                            {
                                                Bowl[2].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                        <li><img src={gamingImg} alt=" "/>Gaming
                                            {
                                                Bowl[3].map((c,index)=>{
                                                    return <span key={index}> {c.Name}*{c.Amount}</span>
                                                })
                                            }
                                        </li>
                                    </ul>
                                </li>
                                <li className="end2"><img src={cafeteriaImg} alt=" "/> Cafeteria <span>{Cafeteria}</span></li>
                            </ul>
                        </ModalContentLeft>
                        <ModalContent>
                            <ul className="ul-outer">
                                <h1>Comments</h1>
                                {/*read and display comments detail from combo attribute*/}
                                <ul className="comments">
                                    {
                                        refresh.map((c,index)=>{
                                            // console.log(c);
                                            return <li key={index}>
                                                <div><img src={commentImg} alt=" "/> {c.Content}</div>
                                                <div className="time"><span>{c.Owner} {c.CreatedTime}</span></div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <li className="leave-comment"><MyComponent ref={comment}></MyComponent></li>
                                <li className="leave-comment"><button onClick={updateComment}>Submit Comments</button></li>
                            </ul>
                        </ModalContent>
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