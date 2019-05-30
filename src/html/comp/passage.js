import React, { Component } from 'react';

class Passage extends Component {

    render() {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}

export default Passage;