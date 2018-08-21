import React, {Component} from 'react';
import Article from './Article';

export default class Comments extends Component {
    constructor(props){
        super(props);

        this.state = {
            isClose: false
        }
    }

    render() {
        //console.log(this.props);
        const {comment} = this.props;
        const {isClose} = this.state;

        return (
            <div>
                <h3>{comment.user}</h3>
                <button onClick = {this.toggleOpen}>
                    {isClose ? 'open' : 'close'}                
                </button>
                {this.getComments()}
            </div>
        );       
    }

    getComments() {
        if (this.state.isClose) return null;
        const {comment} = this.props;
        return <section>{comment.text}}</section>;
    }

    toggleOpen = () => {
        this.setState({
            isClose: !this.state.isClose
        });
    }

}