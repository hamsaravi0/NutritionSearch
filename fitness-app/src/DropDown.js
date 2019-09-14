// Drop Down box
import React from 'react';
import DisplayFood from './DisplayFood';



export default class DropDown extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      selected: {}
    };

    this.onClick = this.onClick.bind(this);

  }

  onClick(key){
    console.log(key);
    this.setState(state => {
      var dict = state.selected;
      if (!(key in dict)){
        dict[key] = this.props.candidates[key][0];
      }
      return {
        dict
      };
    });
    console.log(this.state.selected);
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
                 <button onClick={this.increment}>+</button>
                 <button onClick={this.decrement}>-</button>
                 key={key}>
                 {key}

               </td>
             </table>
           ))}
            </ul>
          )

      )


    );
  }

}
