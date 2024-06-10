//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// include your styles into the webpack bundle
import "../styles/index.css";
import "./icons.js";
function SimpleCounter (props){
    return(<div></div>,
        <div className="bigCounter">
            <div className="calendar"><FontAwesomeIcon icon={['far', 'clock']} /></div>
            <div className="four">1</div>
            <div className="three">2</div>
            <div className="two">3</div>
            <div className="one">4</div>
        </div>
    )
};


//render your react application
ReactDOM.render(<SimpleCounter/>, document.querySelector("#app"));
