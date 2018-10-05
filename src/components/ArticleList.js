import React, {Component} from 'react';
import Article from './Article';
import PropTypes from 'prop-types';
import accordion from '../decorators/accordion';
import {connect} from 'react-redux';
import { filtratedArtislesSelector } from '../selectors';

class ArticleList extends Component {
    static propTypes = {
        //from connect (store)
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

    render() {
        console.log('----', 'updating article list')
        const {articles, openItemId, toggleOpenItem} = this.props;
        const articleElements = articles.map(article => <li key={article.id}>
            <Article   
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
}

export default connect((state) => {
   
    return {
        articles: filtratedArtislesSelector(state)
    }
})(accordion(ArticleList));