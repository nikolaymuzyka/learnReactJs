import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrapedComponent extends ReactComponent {
    state = {
        isOpen: false
    }

    render() {
        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>;
    };

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
}