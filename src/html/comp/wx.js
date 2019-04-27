import React, { Component } from 'react';

class WX extends Component {

    render() {
        return (
            <section class="paragraph">
			  	<p class="wx-title">参考内容</p>
                    {this.props.children}
		  	</section>
        );
    }
}

export default WX;

