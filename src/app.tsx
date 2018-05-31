import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { fetchPostsIfNeeded } from './redux/Actions';
import rootReducer from './redux/Reducers';
import SearchBox from './React/SearchBox';
import List from './React/List';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
)

class App extends React.Component<{}, {}> {
    render() {
        return (
            <Provider store={store}>
                <div id='app'>
                    <SearchBox />
                    <List />
                </div>
            </Provider>
        );
    }
}

export default App;