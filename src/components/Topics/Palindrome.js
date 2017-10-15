import React, {Component} from 'react'




export default class Palindrome extends Component{
    constructor(){
        super()
            this.state = {
                userInput: "",
                palindrome: ""
            }
    }

handleChange(val){
this.setState({userInput: val})
}
problemSolver(input){
   
   var oldStrRev = input.split("").reverse().join("")
   if (oldStrRev === input){
       this.setState({palindrome: "Is Palindrome! : " + input})
   } else this.setState({palindrome: "Is not Palindrome, see : " + oldStrRev})
}



    render(){
    return(

       <div className = "puzzleBox filterStringPB">
           <h4> Palindrome </h4>
           <input className="inputLine" onChange = { (e) => this.handleChange( e.target.value)}>
           </input>
           <button className="confirmationButton" onClick = { () => this.problemSolver(this.state.userInput)}> Click me!
               </button>
               <span className="resultBox">{JSON.stringify(this.state.palindrome, null, 10)}
                   </span>

           </div>
    )
}


}