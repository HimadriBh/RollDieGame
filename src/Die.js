import React, { Component } from 'react';
import './Die.css';
import classNames from 'classnames';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
// @import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");

class Die extends Component{
    constructor(props){
        super(props);
        this.faceNumToStr = {
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
        }
    }

    render(){
        let faceNum = this.props.face;
        let shake = this.props.anim;
        let iconClasses = classNames(shake ? 'Die-roll' : '', "fas fa-7x fa-dice-"+ this.faceNumToStr[faceNum]);
        return (
            <div className="Die">
                <i className={iconClasses}></i>
            </div>
        )
    }
}

export default Die;