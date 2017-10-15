import React, {Component} from "react";


export default class Subtract extends Component{

constructor(){
    super()
        this.state = {
            numb1: 0,
            numb2: 0,
            sum: null
        }

}

updateChanges1(val){
this.setState({numb1: parseInt(val, 10)})
}
updateChanges2(val){
this.setState({numb2: parseInt(val, 10)})
}
subThem(num1, num2){
    this.setState({sum: num1 - num2})
}

render(){
return(
<div className="puzzleBox sumPB">
    <h4> Subtract! </h4>
    First number:
    <input className="inputLine" onChange = { (e) => this.updateChanges1(e.target.value)}>
    </input>
    Subtract from it:
    <input className="inputLine" onChange = {(e) => this.updateChanges2(e.target.value)}>
    </input>
    <button className="confirmationButton" onClick = { () => this.subThem(this.state.numb1, this.state.numb2)}> Click for answer!
        </button>
        <span className="resultsBox">{JSON.stringify(this.state.sum, null, 10)}
            </span>

    </div>



)







}


}