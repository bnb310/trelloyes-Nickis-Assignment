import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

it ('Renders card with title and content', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
})