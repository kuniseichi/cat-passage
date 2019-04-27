import React, { Component } from 'react';

class Search extends Component {
    
    handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            alert(1)
        }
    }

    render() {
        return (
            <section className="input-wrapper">
                <i className="iconfont iconsearch input-icon-search"></i>
                <input className="input" placeholder="关键字搜索" onKeyUp={this.handleKeyDown}></input>
            </section>
        );
    }
}

export default Search;