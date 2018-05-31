import * as React from 'react';
import { connect } from 'react-redux';

interface ListProps {
    name?: string,
    posts?: any[]
}

interface ListState {

}

class _List extends React.Component<ListProps, ListState> {
    renderPost(index: number, author: string, url: string, selfText: string) {
        return (
            <div key={index}>
                <p><b>Author: {author}</b></p>
                <p>URL: {url}</p>
                <br />
                <p>{selfText}</p>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name || ''}</h1>
                {this.props.posts && this.props.posts.map((post:any, index:number) => {
                    return (this.renderPost(index, post.author, post.url, post.selftext));
                })}
            </div>
        );
    }
}

const List = connect(
    (state: any) => ({
        name: state.posts.name,
        posts: state.posts.items
    }),
    dispatch => ({})
)(_List);

export default List;