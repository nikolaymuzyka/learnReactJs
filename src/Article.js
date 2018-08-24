import React, {Component} from 'react';
import CommentsList from './CommentsList';



export default class Article extends Component {
    constructor(props) {
        super(props);
           
        this.state = {
            isOpen: true
        }

    }
    
    render() {
        const {article} = this.props;
        const {isOpen} = this.state;

        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'close' : 'open'}                
                </button>
                {this.getBody()}
            </div>
        );
    }

    getBody() {
        if (!this.state.isOpen) return null;
        const {article} = this.props;
        return (
                <section>
                    {article.text}}
                    <CommentsList comments = {article.comments} />
                </section>
        )
    }

    toggleOpen = (ev) => {
        ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}




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