
import React, { Component } from 'react';

class Quote extends Component {

    render() {
        return (
            <section class="one-quote-1">
                <section class="one-quote-2">
                    <section class="one-quote-3">{this.props.content}<p class="one-quote-4">——{this.props.author}</p></section>
                </section>
            </section>
        );
    }
}

export default Quote;