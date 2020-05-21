import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
    <App
    greet={() => console.log('Hello there')}
    friend="Luke"
    skills={['awesome, ', 'great teacher, ', 'SSBM player, ', ' loves cats!']}
    />,
    document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));
