import React, { Component } from 'react';
import Die from './Die';
import './RollDie.css';

class RollDie extends Component{
    constructor(props){
        super(props);
        this.state = { num1 : 4, num2: 2, rolling: false};
        this.roll = this.roll.bind(this);
        this.animationTimeOut = this.animationTimeOut.bind(this);
    }
    roll(){
        let rand1 = Math.floor(Math.random() * 6) + 1;
        let rand2 = Math.floor(Math.random() * 6) + 1;
        this.setState({ num1: rand1, num2: rand2, rolling: true});
        this.animationTimeOut()
    }
    animationTimeOut(){
        setTimeout(()=>{
            this.setState({rolling: false})
        }, 1000)
    }
    render(){
        return (
            <div className='RollDie'>
                <Die face={this.state.num1} anim={this.state.rolling}/>
                <Die face={this.state.num2} anim={this.state.rolling}/>
                <button className="RollDie-button" onClick={this.roll}>
                {
                this.state.animation
                ? 'Rolling...'
                : 'Roll Dice'
                }</button>
            </div>
        )
    }
}

export default RollDie;