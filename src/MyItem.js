
import React from 'react';

class Item extends React.Component{

    clickMe(){
        console.log("I was clicked: ", this.props.naem)
    }


    render(){
      return(
        <h1 onClick={() => this.clickMe()}>Hello {this.props.name}!</h1>

      )
    }
  
  }

  export default Item;