import React from 'react';
//import DisplayFood from './DisplayFood';
import DropDown from './DropDown';
import './FoodForm.css';
export default class FoodForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: '', found: 0, candidates: [], dropStatus: false};

    this.getItem = this.getItem.bind(this);
    this.searchItem = this.searchItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    const input_value = document.getElementById("addInput");
    console.log(input_value);
    if (input_value.value.length >= 5){
      this.getItem();
    }

  }

  getItem(event){
    const input_value = document.getElementById("addInput");
    const form = document.getElementById("inputFoodForm");


    this.searchItem(input_value);

    // after that function, the list of possible candidates will get filled


  }
  searchItem(input_value) {
    // prevent button click from submitting form
    var url = 'https://api.nal.usda.gov/ndb/search/?format=json&q=';
    url += input_value.value;
    url += '&sort=n&max=10&offset=0&api_key=GvRDLc3LZmvNTaVyY1tXvIbewytToRsi2IXpjiXW';

    fetch(url)
    .then(response => {
      return response.json();
    }).then(myJson => {
      var newCandidates = []
      console.log(myJson);
      if (!myJson.errors){
        var possibilities = myJson.list.item;
        for(var i=0; i < possibilities.length; i++){
           var item = possibilities[i];
           var name = item['name'];
           var ndbno = item['ndbno'];
           var group = item['group'];
           newCandidates[name] = [ndbno, group];

        }
      }


      this.setState({
        candidates: newCandidates,
        dropStatus: (Object.keys(newCandidates).length !== 0)

      });
      console.log(this.state.dropStatus);
    })


  }





  render() {

    return (
      <div className="searchSection">

      <div className="container">
      <form className="form" id="inputFoodForm">
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Type to find out more!"
          onChange={this.handleChange}
        />
        </form>
        <div className="dropdown">
          <DropDown candidates={this.state.candidates} status={this.state.dropStatus}/>
        </div>
        <button className="button is-info" onClick={this.getItem}>
          enter
        </button>

      </div>
      </div>

    )
  }
}
