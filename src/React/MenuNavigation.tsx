import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


const styles: any = {

};

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const Subreddit = () => (
    <div>
        <h2>About</h2>
    </div>
);

const Integration = () => (
    <div>
        <h2>Integration</h2>
    </div>
);

interface MenuProps {
    classes: any
}

interface MenuState {

}

class _MenuNavigation extends React.Component<MenuProps, MenuState> {
    fetchData() {

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/subreddit">Subreddit</Link>
                        </li>
                        <li>
                            <Link to="/integration">Integration</Link>
                        </li>
                    </ul>

                    <hr />

                    <Route exact path="/" component={Home} />
                    <Route path="/subreddit" component={Subreddit} />
                    <Route path="/integration" component={Integration} />
                </div>
            </BrowserRouter>
        )
    }
}