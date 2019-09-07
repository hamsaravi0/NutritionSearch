import React from 'react';
import DisplayFood from './DisplayFood';
import DropDown from './DropDown';
export default class FoodForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', found: 0,
  num_of_food: 3, candidates: [], result: ''};

    this.getItem = this.getItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.resetItems = this.resetItems.bind(this);
  }

  getItem(event){
    event.preventDefault();
    var newcandidates = [];
    const input_value = document.getElementById("addInput");
    const form = document.getElementById("inputFoodForm");


    this.searchItem(input_value);




  }
  searchItem(input_value) {
    //prevent button click from submitting form
    var test = [];
    var products = null;
    var url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=';
    console.log(input_value);
    url += input_value.value;
    url += '&sort=n&max=10&offset=0&api_key=DEMO_KEY';
    console.log(url);
    fetch(url)
    .then(response => {
      return response.json();
    }).then(myJson => {
      let candidates = myJson.list.item.map((data) => {
        return(
          <div>
            {data.ndbno}
            {data.name}
            {data.ds}

          </div>
        )
      })
      this.setState({
        candidates: myJson.list.item.name
      });
      console.log(this.state.candidates);
    })


  }

    // Send request

  resetItems(){
    const form = document.getElementById("inputFoodForm");
    this.setState({
      result: "",
      found: 2
    })
    form.reset();
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
        <button className="button is-info" onClick={this.getItem}>
          Submit
        </button>
      </form>
      </section>
      <section className="display-section">
        <div>
          {this.state.candidates}
        </div>
      </section>
      </div>

    )
  }
}
