import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import './reset.css';

//root elemet
const root = document.createElement('div');

root.setAttribute('id','root');
document.body.appendChild(root);


// Now we can render our application into it
ReactDOM.render(<App />, document.getElementById('root'));