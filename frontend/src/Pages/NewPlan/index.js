/* eslint-disable react/jsx-no-duplicate-props */
import React, {Component} from 'react';
import Box from "../../components/Box";
import {addNewCombo} from '../../services/palnServices';
import './pic.scss'

class NewPlan extends Component {


    constructor(props) {
        super(props);
        this.state={
            /**
             * data should be sent to database
             */
            amenities:[],
            room:[],
            fitness:[],
            gaming:[],
            cafeteria: []
        }
    }

    /**
     * get content from input frame
     * @param e
     */
    handelChange(e){
        this.setState({
            inpValu:e.target.value
        })
    }


    render() {
        const amenitiesImgArr =  ['wifi', 'noNoice', 'projector', 'whiteboard', 'laptop', 'printer']
        const roomImgArr =  ['personalDesk', 'meetingRoom', 'conferenceRoom', 'discussionRoom',
        'smokingRoom', 'eventSpace']
        const fitnessImgArr = ['fitnessConsultant', 'gymArea', 'danceRoom', 'yoga']
        const gamingImgArr = ['snooker', 'tableTennis', 'playStation']
        const cafeteriaArr = ['tea', 'coffee','sandwich']

        const saveData = async() =>{

            function getWordCnt(arr){
                var obj = {};
                for(var i= 0, l = arr.length; i< l; i++){
                    var item = arr[i];
                    obj[item] = (obj[item] +1 ) || 1;
                }
                return obj;
            }

            let amenitiesContents = getWordCnt(this.state.amenities)
            let roomContents = getWordCnt(this.state.room)
            let fitnessContents = getWordCnt(this.state.fitness)
            let gamingContents = getWordCnt(this.state.gaming)

            function getJson(obj){
                let res = [];
                console.log("obj",obj);
                for(let key in obj){
                    res.push({"Name":key,"Amount":Number(obj[key])});
                }
                console.log(res);
                return res;
            }

            alert("Congratulation! You have created a Plan!")

            await addNewCombo({Name:this.state.inpValu,
                Bowl:[getJson(amenitiesContents),getJson(roomContents),getJson(fitnessContents),getJson(gamingContents)],
                OwnerEmail:localStorage.getItem("user"), Owner:localStorage.getItem("user"), Cafeteria:(this.state.cafeteria).toString()})
        }

        /**
         * save added Amenities
         * @param name
         * @param quantity
         */
        const increaseAmenities = (name, quantity) => {
            this.state.amenities.push(name)
            console.log(this.state.amenities)
        }

        /**
         * delete Amenities
         */
        const decreaseAmenities = () => {
            this.state.amenities.pop()
            console.log(this.state.amenities)
        }

        /**
         * save added Room
         * @param name
         * @param quantity
         */
        const increaseRoom = (name, quantity) => {
            this.state.room.push(name)
            console.log(this.state.room)
        }

        /**
         * delete Room
         */
        const decreaseRoom = () => {
            this.state.room.pop()
            console.log(this.state.room)
        }

        /**
         * save added Fitness
         * @param name
         * @param quantity
         */
        const increaseFitness = (name, quantity) => {
            this.state.fitness.push(name)
            console.log(this.state.fitness)
        }

        /**
         * delete Fitness
         */
        const decreaseFitness = () => {
            this.state.fitness.pop()
            console.log(this.state.fitness)
        }

        /**
         * save added Gaming
         * @param name
         * @param quantity
         */
        const increaseGaming = (name, quantity) => {
            this.state.gaming.push(name)
            console.log(this.state.gaming)
        }

        /**
         * delete Gaming
         */
        const decreaseGaming = () => {
            this.state.gaming.pop()
            console.log(this.state.gaming)
        }

        /**
         * add Cafeteria
         * @param name
         */
        const increaseCafeteria = (name) => {
            this.state.cafeteria.push(name)
            console.log(this.state.cafeteria)
        }

        /**
         * delete Cafeteria
         */
        const decreaseCafeteria = () => {
            this.state.cafeteria.pop()
            console.log(this.state.cafeteria)
        }

        return (
            <section className='section border-top'>
                <div className ="container">
                    <div className = "row">
                        <div className = "col-md-12 mb-4 text-center">
                            <h3 className ="main-heading">CREATE YOUR PLAN</h3>
                            <div className ="underline mx-auto"></div>
                        </div>
                <div className="text-center">
                    <label htmlFor="bowlName">PLAN NAME:</label><br></br>
                    <input type="text" id="bowlName" className="bowlName" onChange={this.handelChange.bind(this)}
                           defaultValue={this.state.inpValu}/><br></br>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Amenities</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                    <div className="row g-3">
                {
                    amenitiesImgArr.map((item) => {
                        return (
                            <div className="col-4">
                            <Box key={item} id={item} min='0' max='5'
                                 increaseGoods={increaseAmenities}
                                 decreaseGoods={decreaseAmenities}/>
                            </div>
                            )
                    })
                }
                    </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Rooms and Spaces</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        roomImgArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='5'
                                     increaseGoods={increaseRoom}
                                     decreaseGoods={decreaseRoom}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Fitness Center</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        fitnessImgArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='5'
                                     increaseGoods={increaseFitness}
                                     decreaseGoods={decreaseFitness}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Gaming Area</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        gamingImgArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='5'
                                     increaseGoods={increaseGaming}
                                     decreaseGoods={decreaseGaming}/>
                                </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div>
                    <div className = "col-md-12 mb-4 text-center">
                        <h1 id="subtitle" className ="main-heading">Cafeteria</h1>
                        <div className ="underline mx-auto"></div>
                    </div>
                    <div className="container">
                        <div className="row g-3">
                    {
                        cafeteriaArr.map((item) => {
                            return (
                                <div className="col-4">
                                <Box key={item} id={item} min='0' max='1'
                                     increaseGoods={increaseCafeteria}
                                     decreaseGoods={decreaseCafeteria}/>
                    </div>
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
                <div className="text-center">
                            <br></br>
                    <button className="btn btn-primary" type="button" class_Name="btn btn-success" onClick={saveData}>ADD ALL</button>
                </div>
                </div>
                </div>
            </section>
        )
    }

}

export default NewPlan;