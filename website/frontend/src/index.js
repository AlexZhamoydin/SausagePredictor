import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main";
import MainWithDrop from "./MainWithDrop";

ReactDOM.render(
  <React.StrictMode>
    <MainWithDrop />
  </React.StrictMode>,
  document.getElementById('root')
);

