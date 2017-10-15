import React, {Component} from "react"


export default class RandomNumber extends Component{

constructor(){
    super()
        this.state = {
            lowerRange: 0,
            upperRange: 0,
            randNumber: null
        }
}
handleUpperRange(val){
this.setState({lowerRange: parseInt(val, 10)})
}
handleLowerRange(val){
this.setState({upperRange: parseInt(val, 10)})
}
problemSolver(num1, num2){
    var answer = Math.random() * (num2 - num1) + num1;
    var newAnswer = Math.floor(answer)
    this.setState({randNumber: newAnswer})
}


render(){
return (
<div className ="puzzleBox sumPB">
<h4> I generate a random number! </h4>
<input className="inputLine" onChange = { (e) => this.handleLowerRange(e.target.value)}>
</input>
<input className="inputLine" onChange = { (e) => this.handleUpperRange(e.target.value)}>
</input>
<button className="confirmationButton" onClick = {() => this.problemSolver(this.state.lowerRange, this.state.upperRange)}> Get Dat Numba!
    </button>
    <span className="resultsBox"> {JSON.stringify(this.state.randNumber)}
        </span>


    </div>
)
}
}