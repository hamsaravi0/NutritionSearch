import React from 'react';
import './App.css';
import FoodForm from './FoodForm';



/*
class tick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: new Date().toLocaleTimeString()};


}

  render(){
    var user = "Hamsa Ravi";
    var value = this.state.value;
    return(
    <div>
      <h1>Hello, {user}!</h1>
      <h2>It is {value}.</h2>
    </div>
  )
}
}

*/


function App() {
  return (
  <>
  <FoodForm />
  </>
  );
}

export default App;
