import React, {Component} from 'react';

// Imported fromtopics
import EvenAndOdd from './../Topics/EvenAndOdd'
import FilterObject from './../Topics/FilterObject'
import FilterString from './../Topics/FilterString'
import Palindrome from './../Topics/Palindrome'
import Sum from './../Topics/Sum'
import Subtract from './../Topics/Subtract'
import TitleCaseYourSentence from './../Topics/TitleCaseYourSentence'
import RandomNumber from './../Topics/RandomNumber'




class TopicBrowser extends Component{
  render (){
    return(
     <div>
        <EvenAndOdd />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum/>
        <Subtract/>
        <TitleCaseYourSentence/>
        <RandomNumber/>
    </div>
    )
}
}
export default TopicBrowser 