import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let handleClick = () =>(
	console.log(this)
)

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={handleCLick} />
  </div>,
  document.getElementById('root')
);