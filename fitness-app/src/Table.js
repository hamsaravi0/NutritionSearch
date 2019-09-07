import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props)

    this.tableData = this.tableData.bind(this);
    this.getHeader = this.getHeader.bind(this);
  }

  tableData(){

    return this.props.table_value.map((fact, index) => {
      const { name, amount, calories, fat, cholestrol, potassium, sodium, carbohydrates } = fact
      return(
        <tr key={name}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>{calories}</td>
          <td>{fat}</td>
          <td>{cholestrol}</td>
          <td>{potassium}</td>
          <td>{sodium}</td>
          <td>{carbohydrates}</td>
        </tr>
      )
    })
  }

  getHeader(){
    let header = Object.keys(this.props.table_value[0])
    return header.map((key, index) =>{
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  render(){
    const value = this.props.value;
    const table = this.props.table_value;
    return (
      console.log(this.props.found),
     this.props.found === 1 ?
      <div>
        <h1 id='title'>Nutritional Facts for {table[0].name}</h1>
        <table id='table_value'>
          <tbody>
            <tr>{this.getHeader()}</tr>
            {this.tableData()}
          </tbody>
        </table>
      </div>
      : <div>{value}</div>
    )
  }
}
