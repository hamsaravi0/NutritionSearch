// Drop Down box
import React from 'react';

export default class DropDown extends React.Component {

  constructor(props) {
    super(props);
  }



  render(){
    const dict = this.props.candidates;
    console.log(this.state);
    return (
      this.props.status ? (
        <ul>
          {Object.keys(dict).map(key => (
           <li>
             <a
               href={`#${dict[key]}`}
            //   onClick={this.onClick.bind(this, dict[key])}
               key={key}>
               {key}
             </a>
           </li>))}
        </ul>
      ) : null
    );
  }

}
