import React from 'react';
import Comments from './Comments';

export default function CommentsList({comments}) {
    const commentElements = comments.map((comment) => <li key = {comment.id}><Comments comment = {comment} /></li>);
    return (          
        <ul>
            {commentElements}
        </ul>
    )
}