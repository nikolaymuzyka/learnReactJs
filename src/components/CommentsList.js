import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Comments from './Comments'
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
                {comments.map(comment => <li key={comment.id}><Comments comment={comment} /></li>)}    
            </ul>
            <CommentForm />
        </div>
    );
}


export default toggleOpen(CommenstsList);