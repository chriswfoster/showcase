import React, {Component} from "react"


export default class TitleCaseYourSentence extends Component{
constructor(){
    super()
        this.state = {
            yourSentence: "",
            titleCased: "",
        }
}

updateChanges (val){
    this.setState({yourSentence: val})
}

problemSolver(userInput) {
    var lowerCase = userInput.toLowerCase();
      var pieces = lowerCase.split(" ");
      for ( var i = 0; i < pieces.length; i++ ){
        var upper = pieces[i].charAt(0).toUpperCase();
            pieces[i] = upper + pieces[i].substr(1);
          }
    this.setState({titleCased: pieces.join(" ")})
    }

render(){
    return(

        <div className = "puzzleBox filterStringPB">
            <h4> Title Case Your Sentence Here! </h4>
            <input className="inputLine" onChange = { (e) => this.updateChanges(e.target.value)}> 
            </input>
            <button className="confirmationButton" onClick= {() => this.problemSolver(this.state.yourSentence)}> Filter String </button>
           <span className="resultsBox filterStringRB">{JSON.stringify(this.state.titleCased, null, 10)} </span>

            </div>


    )




}






























}