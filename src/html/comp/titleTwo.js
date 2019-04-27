import React, { Component } from 'react';

class TitleTwo extends Component {

    render() {
        return (
            <section className="two-title-1">
                <section className="two-title-2">
                    <section data-bgless="spin" data-bglessp="90" className="two-title-3"></section>
                </section>
                <section className="two-title-4">
                    <span className="" data-original-title="" title="">{this.props.num}</span>.
                </section>
                <section className="two-title-5" data-brushtype="text">
                    <em>{this.props.title}</em>
                </section>
                <section className="two-title-6">
                    <section data-bgless="spin" data-bglessp="90" className="two-title-7"></section>
                </section>
            </section>
        );
    }
}

export default TitleTwo;