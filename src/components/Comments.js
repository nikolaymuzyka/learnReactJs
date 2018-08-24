import React from 'react';
import PropTypes from 'prop-types';

function Comments({comment}) {
    return (
        <div>
            <p>{comment.text} <b>by {comment.user}</b></p>
        </div>
    );
}


Comments.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
}

export default Comments;