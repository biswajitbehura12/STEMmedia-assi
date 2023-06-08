
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';
import React from 'react';
function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <ComponentB />
        <ComponentC />
      </div>
    </Provider>
  );
}

export default App;
