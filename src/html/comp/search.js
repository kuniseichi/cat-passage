import React, { Component } from 'react';
import $ from  'jquery'
class Search extends Component {
    
    constructor(props) {
        super(props);
    }

    handleKeyDown = (e) => {
        if (e.target.value == "") { 
            this.props.changeShowCatelog(true)
            this.props.changeShowIndex(false)
        } else {
            if (e.keyCode == 13) {
                var keyword = e.target.value
                $.ajax({
                    url:  'https://kuniseichi.cn/api_v1/index/' + keyword,
                    // url:  'http://localhost:8090/api_v1/index/' + keyword,
                    async: true,
                    success: (res) => {
                        if (res.success) {
                            this.props.changeShowCatelog(false)
                            this.props.changeShowIndex(true)
                            // 对文章做处理
                            // for (var i = 0; i < res.data.passages.length; i++) {
                            //     var content = res.data.passages[i].content
                                // var index = content.indexOf(keyword)
                                // var start, end
                                // if (index - 20 < 0) {
                                //     start = 0
                                // } else {
                                //     start = index - 20
                                // }
                                // if (index + 20 > content.length) {
                                //     end = content.length
                                // } else {
                                //     end = index + 20
                                // }
                                // content = content.slice(start, end)
                            //     content = content.replace(keyword, `<span style='color:red'>` + keyword + `</span>`)
                            //     res.data.passages[i].content = content                            
                            // }
                            
                            this.props.onGetPassageIndex(res.data.passages)
                        } 
                    },
                });
                
            }
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