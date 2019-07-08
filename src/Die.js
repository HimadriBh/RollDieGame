import React, { Component } from 'react';
import './Die.css';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// @import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

class Die extends Component{
    constructor(props){
        super(props);
    }

    render(){
        // let iconClasses = classNames(this.props.dieRoll ? 'Die-roll' : '', "fas fa-7x fa-dice-"+ this.props.face);
        return (
            <div className="Die">
                <i className={`fas fa-7x fa-dice-${this.props.face} ${this.props.dieRoll && "Die-roll"}`}
                />
            </div>
        )
    }
}

export default Die;