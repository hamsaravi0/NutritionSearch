import React from 'react';
import TableDesign from './TableDesign.css';
export default class Table extends React.Component {
  constructor(props) {
    super(props)

    this.tableData = this.tableData.bind(this);
  }

  tableData(){
    var results = this.props.results;
    return (Object.keys(results).map(key => (
     <li>
       <div class="row"
          key={key}>
         <div class="column">{key}</div>
         <div class="column">{results[key][0]} </div>
         {results[key][1].map((nutrients) =>
         <div key={nutrients.name}>
           <div class="column">{nutrients.name}</div>
           <div class="column">{nutrients.value} {nutrients.unit}</div>
         </div>


      )}
       </div>
     </li>)))
  }

  render(){
    const value = this.props.value;
    const table = this.props.table_value;
    return (
      console.log(this.props.found),
      <div>
        <table id='table_value'>
          <tbody>
            {this.tableData()}
          </tbody>
        </table>
      </div>
    )
  }
}
