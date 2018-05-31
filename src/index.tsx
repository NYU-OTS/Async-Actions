import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

const renderRoot = (app: JSX.Element) => {
    ReactDOM.render(app, document.getElementById('root'));
}

renderRoot((
    <App />
));