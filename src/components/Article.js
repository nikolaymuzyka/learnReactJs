import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom';
import CommentsList from './CommentsList';
import "../styles/style.css"
import { CSSTransitionGroup } from 'react-transition-group'
import "../styles/article.css"



class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    state = {
        updateIndex: 0
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps.isOpen !== this.props.isOpen;
    // }

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log("-----", "update article")

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button className="btn" onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}                
                </button>
                <CSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        );
    }

    setContainerRef = ref => {
        this.container = ref;
//        console.log('----', ref);
    }

    getBody() {
        const {article, isOpen} = this.props;
        if (!isOpen) return null;
        return (
                <section>
                    {article.text}}
                    <CommentsList comments = {article.comments} ref = {this.setCommentsRef}/>
                </section>
        );
    }

    setCommentsRef = ref => {
  //      console.log('-----', findDOMNode(ref));
    }

  
}

export default Article;




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