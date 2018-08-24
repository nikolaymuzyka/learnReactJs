import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen';



class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        })
    }

    constructor(props) {
        super(props);
           
        this.state = {
            isOpen: true
        }

    }
    
    render() {
        const {article, isOpen, toggleOpen} = this.props;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}                
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
                <section>
                    {article.text}}
                    <CommentsList comments = {article.comments} />
                </section>
        )
    }

  
}

export default toggleOpen(Article);




// export default function Article(props){
//     const {article} = props;

//     //console.log('-----', props);
//     return (
//        <div>
//             <h3>{article.user}</h3>
//             <section>{article.text}}</section>
//        </div>
//     )
// }