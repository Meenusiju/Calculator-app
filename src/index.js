import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


console.log(process.env.REACT_APP_API_URL);

ReactDOM.render(<App />, document.getElementById('root'));
