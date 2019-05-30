import React, { Component } from 'react';

class Line extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    handleClick = () => {
        this.setState({
            show:!this.state.show,
        })
    }

    render() {
        return (
            <section>
                <section className="line-wrapper" style={this.state.show?{color: "#1890ff"}:{color: "rgb(89, 89, 89)"}} onClick={this.handleClick}>
                    <section><a href={this.props.url} style={this.state.show?{color: "#1890ff"}:{color: "rgb(89, 89, 89)"}} >{this.props.content}</a></section>
                    {this.props.children
                    ?
                        (this.state.show
                        ?<i className="iconfont iconarrowdropdownshangbian arrow" />
                        :<i className="iconfont iconarrowdropdownxiabian arrow" />)
                    :null}
                </section>
                <section className="line-padding">
                    {this.state.show
                        ?this.props.children
                        :null
                    }
                </section>
            </section>
        );
    }
}

export default Line;