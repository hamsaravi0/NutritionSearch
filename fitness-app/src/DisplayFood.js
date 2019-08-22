import React from "react";

export default class DisplayFood extends React.Component {

  constructor(props){
    super(props);


  }

  render() {
    const data = [this.props.value];
    const current_value = this.props.value;
    const found = this.props.found;

    var FormatObject = null;
    if (current_value === ""){
     FormatObject = "Enter something";
    }
    else if (found === 0) {
      FormatObject = "Enter something else";
   }
   else{
     FormatObject = data.map((d) =>
     <li key={d.name}>
     <div>{d.name}</div>
     <div>{d.amount}</div>
     <div>{d.calories}</div>
     <div>{d.fat}</div>
     <div>{d.cholestrol}</div>
     <div>{d.potassium}</div>
     <div>{d.sodium}</div>
     <div>{d.carbohydrates}</div>
     </li>);

   }

    return (
      <div>
      {FormatObject}
      </div>
    );
  }
}
