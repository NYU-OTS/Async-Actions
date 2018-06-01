import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { withStyles } from '@material-ui/core';

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

const styles: any = {
    body: {
        backgroundColor: 'lightblue'
    }
}

interface AppProps {
    classes: any
}

class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <Provider store={store}>
                <div id='app' className={this.props.classes.body}>
                    <SearchBox />
                    <List />
                </div>
            </Provider>
        );
    }
}

export default withStyles(styles)(App);