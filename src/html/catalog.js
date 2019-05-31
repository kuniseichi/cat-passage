import React, { Component } from 'react';
import Passage from './comp/passage';
import PW from './comp/passageWrapper';
import Line from './comp/line';
import Search from './comp/search';
import QRCode from './comp/QRCode';

/**
 *  症状 -> 可能疾病
    病的介绍 -> 症状 -> 治疗 -> 预防
    病毒 -> 导致病和相应症状 -> 预防
 * 
 * 
 */

class Catalog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCatelog: true,
            showIndex: false,
            passageIndex: [],
        }
    }

    changeShowCatelog = (e) => {
        this.setState({
            showCatelog:e
        })
    }

    changeShowIndex = (e) => {
        this.setState({
            showIndex:e
        })
    }

    onGetPassageIndex = (e) => {
        
        this.setState({
            passageIndex:e
        })
        console.log(this.state.passageIndex)
    }

    render() {

        const passageList = []
        for (let p of this.state.passageIndex) {
            passageList.push(
                <section className="passage-list">
                    <a className="title" href={p.url}>{p.title}</a>
                    <a className="content" href={p.url}>{p.content}</a>
                    <section className="line">{p.url}</section>
                </section>
            )
        }

        return (
            <Passage title="文章索引">
                <PW>
                    <Search 
                        showCatelog={this.state.showCatelog}
                        showIndex={this.state.showIndex}
                        changeShowCatelog={this.changeShowCatelog}
                        changeShowIndex={this.changeShowIndex}
                        onGetPassageIndex={this.onGetPassageIndex}
                    />
                    <section style={this.state.showCatelog?{display: "block"}:{display: "none"}}>
                        <Line content="猫咪科普">
                            <Line content="猫的起源" url="https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483671&idx=1&sn=603c41fd17bf04319836ecbec66935ec&chksm=cf4c51bcf83bd8aa7e0337ec26b12f0de1a583f2c7dccdf872c28937f67d2ad0b6108ff62010&token=407447556&lang=zh_CN#rd"/>
                            {/* <Line content="猫咪品种"/> */}
                            {/* <Line content="生理结构" />
                            <Line content="生活习性" />
                            <Line content="品相鉴定" >
                                <Line content="英短" />
                                <Line content="美短" />
                            </Line> */}
                        </Line>
                        {/* <Line content="日常养护"> */}
                            {/* <Line content="必需品" />
                            <Line content="环境需求" />
                            <Line content="定期工作" />
                            <Line content="健康检查" />
                            <Line content="掉毛" /> */}
                            {/* <Line content="如何给猫咪刷牙" /> */}
                            {/* <Line content="如何给猫咪洗耳朵" /> */}
                            {/* <Line content="疫苗接种的建议" /> */}
                        {/* </Line> */}
                        {/* <Line content="猫咪行为学">
                            <Line content="不良行为"/>
                            <Line content="调整作息"/>
                            <Line content="训练猫咪"/>
                        </Line> */}
                        <Line content="疾病百科">
                            <Line content="人猫共患病">
                                <Line content="巴斯德杆菌病" url="https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483685&idx=1&sn=402644df256550b0ba31085480cc2696&chksm=cf4c518ef83bd898854aa62332a6d8a31b3aac2f31e118a40e01efa89a33cdabdc23b246a205&token=407447556&lang=zh_CN#rd"/>
                                <Line content="弓形虫" url="https://mp.weixin.qq.com/s?__biz=Mzg4MzA2NzMzMg==&mid=2247483686&idx=1&sn=8e7d66caf13dabef2a1d097aa2f06f7c&chksm=cf4c518df83bd89b6042af0bce571eb89ad68d98cb56a51156896dc1d4e038fb0f18af2a3b21&token=1903241140&lang=zh_CN#rd"/>
                                <Line content="沙门氏菌"/>
                                <Line content="被猫抓咬需要打狂犬疫苗吗？" url="https://zhuanlan.zhihu.com/p/67669606"/>
                                <Line content="猫抓病" url="https://zhuanlan.zhihu.com/p/67670308"/>
                                <Line content="猫癣"/>
                                <Line content="绦虫病"/>
                                <Line content="蛔虫病"/>
                                <Line content="跳蚤过敏性皮炎"/>
                                <Line content="钩虫病"/>
                                <Line content="如何预防人猫共患病？"/>
                                <Line content="孕妇究竟能不能养猫"/>
                            </Line>
                            <Line content="呼吸系统">
                                <Line content="你的猫咪感冒了吗？" />
                                <Line content="猫咪打喷嚏是感冒了吗？" />
                            </Line>
                            
                            <Line content="泌尿系统">
                                <Line content="下泌尿道疾病" />
                            </Line>

                            <Line content="消化系统">
                                <Line content="从呕吐物看猫咪健康" />
                                <Line content="猫咪常见口腔疾病" />
                                {/* <Line content="看猫屎知健康" /> */}
                            </Line>
                            
                            <Line content="皮肤疾病">
                                <Line content="猫癣别发愁？"/>
                            </Line>
                            <Line content="眼科疾病">
                                <Line content="猫咪常见眼科疾病"/>
                            </Line>
                            <Line content="耳科疾病">
                                <Line content="耳螨"/>
                            </Line>
                            <Line content="重要传染病">
                                <Line content="猫传腹" />
                                <Line content="猫冠状病毒" />
                                <Line content="猫疱疹病毒" />
                                <Line content="猫瘟" />
                            </Line>
                        </Line>
                        {/* <Line content="猫咪营养学">
                            <Line content="营养" />
                            <Line content="猫粮" />
                            <Line content="生骨肉" />
                            <Line content="自制猫饭" />
                        </Line>
                        <Line content="测评">
                        </Line>
                        <Line content="猫咪杂谈">
                        </Line>
                        <Line content="繁育知识">
                        </Line> */}
                    </section>
                    <section style={this.state.showIndex?{display: "block"}:{display: "none"}}>
                        {passageList.length > 0 
                        ? 
                            passageList 
                        :
                            <section className="no-result">
                                没有找到相应结果
                            </section>
                        }
                        
                    </section>
                </PW>
                <QRCode/>
            </Passage>
        );
    }
}



export default Catalog;