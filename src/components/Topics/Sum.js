import React, {Component} from 'react'



export default class Sum extends Component{
    constructor(){
        super()
            this.state = {
                numb1: 0,
                numb2: 0,
                sum: null
            }
    }

handleChange1(val){
this.setState({numb1: parseInt(val, 10)})
}
handleChange2(val){
this.setState({numb2: parseInt(val, 10)})
}
problemSolver(num1, num2){
var add = num1 + num2
this.setState({sum: add})
}


    render(){
        return(
           <div className="puzzleBox sumPB">
               <h4> Add them up!</h4>
               First Number:<input className="inputLine" onChange = { (e) => this.handleChange1( e.target.value)}>
               </input>
               Second Number:<input className="inputLine" onChange = { (e) => this.handleChange2( e.target.value)}>
               </input>
               <button className="confirmationButton" onClick = {() => this.problemSolver(this.state.numb1, this.state.numb2)}> ADD!
                   </button>
                   <span className="resultsBox">{JSON.stringify(this.state.sum, null, 10)}
                       </span>
               </div>
        )
    }
}