import React, {Component} from 'react';
import Comments from './Comments'
import toggleOpen from '../decorators/toggleOpen';

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
    if(!comments.length) return <p>No comments yet!</p>
    return(
        <ul>
            {comments.map(comment => <li key={comment.id}><Comments comment={comment} /></li>)}
        </ul>
    );
}


export default toggleOpen(CommenstsList);