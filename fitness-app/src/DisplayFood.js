import React from 'react';
import Table from './Table';
export default class DisplayFood extends React.Component {

  constructor(props) {
    super(props);
    this.state = {names: []};

  }


  render() {
//    const data = [this.props.value];
    const current_value = this.props.value; //carries the object
    const found = this.props.found;
    var add_to_list = this.state.names;
    var FormatObject = null;
    if (current_value === "" && found !== 2){
     FormatObject = "Enter something";
    }
    else if (found === 0) {
      FormatObject = "Enter something else";
   }
   else if (found === 2) {
     FormatObject = "Has been reset";
     add_to_list = [];
   }
   else{

     add_to_list.push(current_value);
     console.log(add_to_list);

  /*   FormatObject = data.map((d) =>
     <li key={d.name}>
       <div>{d.name}</div>
       <div>{d.amount}</div>
       <div>{d.calories}</div>
       <div>{d.fat}</div>
       <div>{d.cholestrol}</div>
       <div>{d.potassium}</div>
       <div>{d.sodium}</div>
       <div>{d.carbohydrates}</div>
     </li>);    */

   }

    return (
      <div>
      <Table table_value ={add_to_list} found ={found} value={FormatObject}>
      </Table>
      </div>
    );
  }
}
