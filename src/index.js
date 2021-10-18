import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {GiftApp} from './components/GiftApp.js'
const divRoot = document.querySelector('#root')

ReactDOM.render(
  <React.StrictMode>
	<GiftApp></GiftApp>
  </React.StrictMode>,
	divRoot
);
