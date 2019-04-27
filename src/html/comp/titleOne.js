import React, { Component } from 'react';

class TitleOne extends Component {

    render() {
        return (
            <section class="one-title-1">
                <section className="one-title-2">
                    {this.props.num}
                </section>
                <section className="one-title-3">
                    <section className="one-title-4" data-brushtype="text">{this.props.title}</section>
                    <section className="one-title-5"></section>
                    <section className="one-title-6" data-width="90%">
                    </section>
                </section>
            </section>
        );
    }
}

export default TitleOne;