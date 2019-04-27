import React, { Component } from 'react';

class UL extends Component {

    render() {
        return (
            <ul className="one-list-1">
                {this.props.children}
            </ul>
        );
    }
}

export default UL;

