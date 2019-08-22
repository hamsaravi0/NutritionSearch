import React from 'react';
import ReactDOM from 'react-dom';
import DisplayFood from './DisplayFood';


export default class FoodForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', found: 0, food: ['Banana', 'Apple', 'Strawberry'],
  num_of_food: 3, properties: [
    {
      name: "Banana",
      amount: "100 grams",
      calories: "89",
      fat: "0.3g",
      cholestrol: "0 mg",
      sodium: "1 mg",
      potassium: "358 mg",
      carbohydrates: "23g"
    },
    {
      name: "Apple",
      amount: "100 grams",
      calories: "52",
      fat: "0.2g",
      cholestrol: "0 mg",
      sodium: "1 mg",
      potassium: "107 mg",
      carbohydrates: "14g"
    },
    {
      name: "Strawberry",
      amount: "100 grams",
      calories: "33",
      fat: "0.3g",
      cholestrol: "0 mg",
      sodium: "1 mg",
      potassium: "153 mg",
      carbohydrates: "8"
    }
  ], result: ''};


    this.searchItem = this.searchItem.bind(this);
    this.fillItem = this.fillItem.bind(this);
  }

  searchItem(event) {
    //prevent button click from submitting form
    event.preventDefault();

    // input
    const input_value = document.getElementById("addInput");
    const form = document.getElementById("inputFoodForm");
    var counter = 0;
    var found = 0;
    var list = this.state.food;
    var properties = this.state.properties;
    //check whether the input is ""
    if (input_value.value != ""){
      while (found === 0 && counter < this.state.num_of_food){
        // looking at whether it is in the list
        if (input_value.value.toLowerCase() === list[counter].toLowerCase()){
          found = 1
          this.setState({
            result: properties[counter]
          });
        }
        counter += 1;
      }
      this.setState({
            found: found
          });
      this.setState({value: input_value.value});
      input_value.classList.remove("is-danger");
      form.reset();



    }
    else{
      input_value.classList.add("is-danger");
      this.setState({
        result: ''
      });
    }

  }

  fillItem(found){

  }



  render() {

    return (
      <div className="searchSection">
      <section className="section">
        <form className="form" id="inputFoodForm">
       <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Type to find out more!"
          />
        <button className="button is-info" onClick={this.searchItem}>
          Submit
        </button>
      </form>
      </section>
      <section className="outputSection">
        <DisplayFood value={this.state.result} found={this.state.found}>
        </DisplayFood>
      </section>
      </div>
    )
  }
}
