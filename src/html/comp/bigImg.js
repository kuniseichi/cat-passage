import React, { Component } from 'react';

class BigImg extends Component {

    render() {
        return (
            <section class="img-wrapper2">
                <img class="format-img" src={this.props.url} alt="" />
                <p class="img-text">{this.props.title}</p>
            </section>
        );
    }
}

export default BigImg;