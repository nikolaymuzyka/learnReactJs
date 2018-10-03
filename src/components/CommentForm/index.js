import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class CommentForm extends Component {
    static PropTypes = {

    };

    state = {
        user: '',
        text: ''
    };
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user : <input value = {this.state.user}
                              onChange = {this.handleChange('user')}
                              className = {this.getClassName('user')}/>
                comment: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')}/>
            </form>
        );
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.setState({
            user:'',
            text: ''
        });
    }

    getClassName = type => this.state[type].length && this.state[type].length < length[type].min
        ? 'form-input_error' : '';

    handleChange = type => ev => {
        const {value} = ev.target;
        if (value.length > length[type].min) return;
        this.setState({
            [type]: value
        });
    }
}

const limits =  {
    user : {
        min : 5,
        max : 15
    },
    text : {
        min : 20,
        max : 50
    }
}



