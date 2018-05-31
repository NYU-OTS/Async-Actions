import * as React from 'react';
//import 'react-dom';
import { connect } from 'react-redux';

import { fetchPostsIfNeeded } from '../redux/Actions';

interface SearchBoxProps {
    searchReddit: (subreddit: string) => void
}

interface SearchBoxState {
    value: string
}

class _SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {

    constructor(props: SearchBoxProps) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event: any) {
        event.preventDefault();
        console.log("Searching");
        console.log(this.props.searchReddit);
        this.props.searchReddit(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Subreddit: <input type='text' value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type='submit' value='Search' />
                </form>
            </div>
        );
    }
}

const SearchBox = connect(
    (state:any) => ({}),
    dispatch => ({
        searchReddit: (subreddit: string) => dispatch(fetchPostsIfNeeded(subreddit))
    })
)(_SearchBox);

export default SearchBox;