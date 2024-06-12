//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";
import "./icons.js";
function SimpleCounter (props){
    return(<div></div>,
        <div className="bigCounter">
            <div className="calendar"><FontAwesomeIcon icon={['far', 'clock']} /></div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    )
};
SimpleCounter.protoTypes  = {
    digittOne: PropTypes.number,
    digitTwo:PropTypes.number,
    digitThree:PropTypes.number,
    digitFour: PropTypes.number
}
let counter = (0);
setInterval (function(){
const Four = Math.floor (counter/1000)
const Three = Math.floor (counter/100)
const Two = Math.floor (counter/10)
const One = Math.floor (counter/1);
console.log (Four, Three, Two, One);
counter++


ReactDOM.render(<SimpleCounter digitOne={One} digitTwo={Two} digitThree={Three} digitFour= {Four}/>, document.querySelector("#app"));
}, 1000 );


//render your react application
