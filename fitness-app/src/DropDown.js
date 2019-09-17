// Drop Down box
import React from 'react';
//import DisplayFood from './DisplayFood';
import Table from './Table';


export default class DropDown extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      results: {},
      generate: false
    };

    this.onClick = this.onClick.bind(this);
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
    this.Delete = this.Delete.bind(this);
    this.Generate = this.Generate.bind(this);

  }
  Generate(){
    // api call with the ndbno to get JSON of all the nutritional facts
    var url = 'https://api.nal.usda.gov/ndb/V2/reports?';
    for (var key in this.state.selected){
      url+= 'ndbno='+this.state.selected[key][0];
      url+= '&';
    }
    url += 'type=b&format=json&api_key=DEMO_KEY';

    console.log(url);
    fetch(url)
    .then(response => {
      return response.json();
    }).then(result => {
      if (!result.errors){
        var foods = result.foods;
        var result = {};
        console.log(foods);
        for (var i = 0; i < foods.length; i++){
          // name of the food
          console.log(foods[i].food.desc.name);
          result[foods[i].food.desc.name] = [foods[i].food.ing.desc, foods[i].food.nutrients];
          // ingredients
          console.log(foods[i].food.ing.desc);
          // nutrients
          console.log(foods[i].food.nutrients);
          console.log(result);
        }
      }


      this.setState({
        results: result,
        generate: (Object.keys(result).length !== 0)

      });

    })
  }
  Increment(key){
    this.setState(state => {
      var dict = state.selected;
      var values = dict[key];
      values[1] += 1;
      dict[key] = values;
    return {
        dict
    };
    })
  }

  Decrement(key){
    this.setState(state => {
      var dict = state.selected;
      var values = dict[key];
      values[1] = Math.max(0, values[1]-1);
      dict[key] = values;
    return {
        dict
    };
    })
  }

  Delete(key){
    this.setState(state => {
      var dict = state.selected;
      delete dict[key];
    return {
        dict
    };
    })
  }

  onClick(key){
    this.setState(state => {
      var dict = state.selected;
      if (!(key in dict)){
        dict[key] = [this.props.candidates[key][0], 1];
      }
      return {
        dict
      };
    });
  }






  render(){
    const dict = this.props.candidates;
    return (
      this.props.status ? (
      <div className="dropdown">
        <ul>
          {Object.keys(dict).map(key => (
           <li>
             <a
               href={`#${dict[key]}`}
               onClick={this.onClick.bind(this, key)}
               key={key}>
               {key}
               ({dict[key][1]})
             </a>
           </li>))}
        </ul>
      </div>) : (

          Object.keys(this.state.selected).length === 0 ? (
            <div>
              Your Cart is Empty
            </div>
          ) : (

            <ul>
            Your Cart Contains The Following:
              {Object.keys(this.state.selected).map(key => (
              <table>
               <td>
                 {this.state.selected[key][1]}
                 <button onClick={(e) => this.Increment(key)}>+</button>
                 <button onClick={(e) => this.Decrement(key)}>-</button>
                 <button onClick={(e) => this.Delete(key)}>x</button>
                 {key}
               </td>
             </table>
           ))}
           <button onClick={(e) => this.Generate()}>generate</button>



            <Table results={this.state.results} />
            </ul>


          )


      )


    );
  }

}
