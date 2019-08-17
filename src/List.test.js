import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

it ('Renders card with title and content', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
})