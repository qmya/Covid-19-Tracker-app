import React from 'react';
import './App.scss';
import { Cards, Charts, CountryPicker } from './components';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <h1>App</h1>
      <Cards />
      <CountryPicker />
      <Charts />
      
    </div>
  );
}
}
export default App;
