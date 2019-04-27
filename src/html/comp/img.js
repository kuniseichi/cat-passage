import React, { Component } from 'react';

class Img extends Component {

    render() {
        return (
            <section class="img-wrapper">
                <img class="format-img" src={this.props.url} alt="" />
                <p class="img-text">{this.props.title}</p>
            </section>
        );
    }
}

export default Img;