import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './style/App.css'
import './style/Globar.css'
import TheProvider from './components/contex/TheProvider';

ReactDOM.render(
  <React.Fragment>
    <TheProvider>
      <App />
    </TheProvider>
  </React.Fragment>,

  document.getElementById('root')
);


