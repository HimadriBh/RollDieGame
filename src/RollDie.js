import React, { Component } from 'react';
import Die from './Die';
import './RollDie.css';

class RollDie extends Component{
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state = { die1: 'one', die2: 'three', rolling: false};
        this.roll = this.roll.bind(this);
        this.animationTimeOut = this.animationTimeOut.bind(this);
    }
    roll(){
        let newDie1 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        let newDie2 = this.props.sides[
            Math.floor(Math.random() * this.props.sides.length)
        ];
        this.setState({ die1: newDie1, die2: newDie2, rolling: true});
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
                <Die face={this.state.die1} dieRoll={this.state.rolling}/>
                <Die face={this.state.die2} dieRoll={this.state.rolling}/>
                <button className="RollDie-button" onClick={this.roll} disabled={this.state.rolling}>
                {
                this.state.rolling
                ? 'Rolling...'
                : 'Roll Dice'
                }</button>
            </div>
        )
    }
}

export default RollDie;