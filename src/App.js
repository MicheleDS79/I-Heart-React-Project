import HeartsList from './components/HeartsList';
import Header from './components/Header';
import { Component } from 'react';
import './App.css';

class App extends Component {
render() {
  return (
      <>
          <Header />
          <HeartsList />
      </>
  );
}
}
export default App;
