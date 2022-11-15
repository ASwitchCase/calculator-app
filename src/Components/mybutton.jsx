import React, { Component } from 'react';

class MyButton extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <button onMouseOver= {change(this)}></button>
            </React.Fragment>
         );
    }
}

function change(x) {
    x.style.backgroundcolor = "white";
}
export default MyButton;