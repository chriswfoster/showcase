import React, {Component} from 'react'





export default class FilterObject extends Component {
    constructor(){
        super()
            this.state = {
                userInput: "",
                filteredCars: [],
                unFilteredCars: [
                                    {name: "toyota", year: 2002, mileage: 100000}, 
                                    {name: "toyota", year: 2002, mileage: 200000},
                                    {name: "nissan", year: 2005, mileage: 100000},
                                    {name: "chevy", year: 2005, mileage: 50000},
                                    {name: "ford", year: 2001, mileage: 50000}
                                ]
            }
    }

handleChange(val) {
    this.setState({userInput: val})
}

problemSolver(userInput){
    var cars = this.state.unFilteredCars;
    var filterage = [];
    for (var i = 0; i < cars.length; i++){
        for (var k in cars[i]){
    if (cars[i][k] == userInput){
    filterage.push(cars[i])
    }
     
    }}
    
this.setState({filteredCars: filterage})
}





    render(){
    return (
<div className="puzzleBox filterObjectPB">
    <h4>Filter Object
        </h4>
    <span className="puzzleText">{JSON.stringify(this.state.unFilteredCars, null, 10)}
        </span>
        <input className="inputLine" onChange = { (e) => this.handleChange( e.target.value)}>
        </input>
        <button className="confirmationButton" onClick = { () => this.problemSolver(this.state.userInput)}> Filter
            </button>
            <span className="resultsBox filterObjectRB">Filtered answer: {JSON.stringify(this.state.filteredCars, null, 10)}
                </span>
                
    </div>

    )
    }
}