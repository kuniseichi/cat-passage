import React, { Component } from 'react';

class Passage extends Component {

    setTitle() {
        const { title } = this.props
        document.title = title
    }
    componentDidMount() {
        this.setTitle()
    }
    componentDidUpdate() {
        this.setTitle()
    }

    render() {
        return (
            <section>
                {this.props.children}
            </section>
        );
    }
}

export default Passage;