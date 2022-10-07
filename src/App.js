import React from 'react';
import './App.css';
import Counter from './components/Counter';
import logo from './logo.png'

const App = () => {
    return (
        <div className='App'>
            <h1>Welcome To React Application! - {process.env.NODE_ENV}</h1>
            <h2>{process.env.NAME}</h2>
            <img src={logo} alt="logo"/>
            <Counter/>
        </div>
      );
}
 
export default App;