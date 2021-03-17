import React from 'react';
import './App.css';


import GridSwatchWrapper from './components/GridSwatchWrapper';

function App({className}) {
  return (
    <div className={className}>
      <GridSwatchWrapper />
    </div>
  );
}

export default App;
