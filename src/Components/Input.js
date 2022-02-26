import React from "react";
import { palindromeAlgo } from "../utils/palindromeAlgo";



export default class Input extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      word: ''
    }
  }

  handleChange = (event)=>{
    this.setState({
      word: event.target.value
    })
 }

  handleSubmit(){}

  render(){
    return(
      <div>
        <form>
        <label>Enter your word....</label>
          <input 
          type='text'
          value={this.state.word}
          onChange = {this.handleChange}
           />
         <button onClick={()=>palindromeAlgo(this.state.word)}>Enter</button>
        </form>
        
      </div>
    )
  }

}