import React, {Component} from 'react';



export default class FilterString extends Component{
    constructor(){
        super()
            this.state = {
                unFilteredArray: ["my name is bob", "my name is chris", "the cat jumped chris's fence", "jupiter is a planet", "cats live on jupiter?"],
                userInput: "",
                filteredArray: []
            }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    problemSolver(userInput){
        var oldArr = this.state.unFilteredArray;
        var newArr = []
        for (var i = 0; i < oldArr.length; i++){
            if (oldArr[i].indexOf(userInput) >= 0){
                newArr.push(oldArr[i])
            }
        }
        this.setState({filteredArray: newArr})
    }

    render(){
return(
<div className = "puzzleBox filterStringPB">
   <h4>Filter String
   </h4>
    <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray, null, 10)} </span>
    <input className="inputLine" onChange = { (e) => this.handleChange( e.target.value)}> 
    </input>
    <button className="confirmationButton" onClick= {() => this.problemSolver(this.state.userInput)}> Filter String </button>
   <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArray, null, 10)} </span>
   </div>

)

}
}