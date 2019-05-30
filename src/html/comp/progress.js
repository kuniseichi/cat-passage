import React, { Component } from 'react';

class Progress extends Component {

    render() {
        return (
            <section>
                <section className="grid-col grid-col_1/2@minMd">
                    <h3 className="txt m-txt_heavy m-txt_uppercase u-vr1x">{this.props.title}</h3>
                    <section className="progressBar">
                        <section className="progressBar-inner">
                            <span className="u-isVisuallyHidden">
                                1 out of 5
                            </span>
                        </section>
                        <span className={"progressBar-range progressBar-range_"+ this.props.num +"/5"}></span>
                    </section>
                </section>
            </section>
        );
    }
}

export default Progress;