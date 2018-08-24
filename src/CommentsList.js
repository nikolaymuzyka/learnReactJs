import React, {Component} from 'react';
import Comments from './Comments'

class CommenstsList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const text = this.state.isOpen ? 'hiden comment' : 'show comment';
        return (
            <div>
                <button onClick = {this.toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {comments} = this.props;
        if(!comments || !comments.length) return <p>No comments yet!</p>
        return(
            <ul>
                {comments.map(comment => <li key={comment.id}><Comments comment={comment} /></li>)}
            </ul>
        )
    }
    toggleOpen = (ev) => this.setState({
        isOpen: !this.state.isOpen
    });
}

export default CommenstsList;