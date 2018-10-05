import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

function CommenstsList({comments =[], isOpen, toggleOpen}) {
    const text = isOpen ? 'hiden comment' : 'show comment';

    return (
        <div>
            <button className="btn" onClick = {toggleOpen}>{text}</button>
            {getBody({comments, isOpen})}
        </div>
    )
}

CommenstsList.propTypes = {
    comments: PropTypes.array,
    // from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
}

function getBody({comments, isOpen}) {
    if (!isOpen) return null;
    if (!comments.length) return(
        <div>
            <p>No comments yet</p>
            <CommentForm />
        </div>
    );

    return(
        <div>
            <ul>
                {comments.map(id => <li key = {id}><Comment id = {id} /></li>)}    
            </ul>
            <CommentForm />
        </div>
    );
}


export default toggleOpen(CommenstsList);