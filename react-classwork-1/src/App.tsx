import './App.css';
import Counter from './Counter';
import CounterHooks from './CounterHooks';
import React, { Component }  from 'react';

function App() {
  return (
    <>
      <Counter initialCount = {0} />
      <CounterHooks initialCount = {5} />
    </>
  );
}

export default App;
