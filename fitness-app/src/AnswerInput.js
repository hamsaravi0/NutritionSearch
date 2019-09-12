import React from "react";

import './AnswerInput.css';

export default class AnswerInput extends React.Component {

  constructor(props){
    super(props);
    this.state = {term:''};
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(event){
      var foundAnswer = this.props.checkTerm(event.target.value);
      this.setState({
        term:foundAnswer ? "" : event.target.value
      })
  }

  render() {
    return (
    <div className="component-search-input">
        <input onChange={this.handleTermChange} value={this.state.term}/>
    </div>

    );
  }
}
