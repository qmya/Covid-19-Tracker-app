import React from 'react';
import styles from './App.module.css';
import { fetchData } from './api';
import { Cards, Charts, CountryPicker } from './components';

class App extends React.Component{
  state = {
    data : {},
  }


 async componentDidMount(){
   const fetchedData = await fetchData();
   this.setState({ data : fetchedData });
   
 }


  render(){
    const { data } = this.state;

  return (
    <div className={styles.container}>
      <h1>App</h1>
      <Cards data = {data} />
      <CountryPicker />
      <Charts />
      
    </div>
  );
}
}
export default App;
