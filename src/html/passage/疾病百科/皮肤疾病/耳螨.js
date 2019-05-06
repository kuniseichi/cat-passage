import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class ErMan extends Component {
    render() {
        return (
            <Passage title="耳螨">
                <PW>
                    <TitleOne num="01" title="耳螨的诊断与治疗" />
                    <ZW>耳瞒在以往是非常常见的外耳道寄生虫，但由于治疗方法的进步已经不如之前那么常见了。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>得了耳螨的猫咪会不停的挠耳朵，甩头，同时耳朵中有大量深褐色干燥耳垢。</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E8%80%B3%E8%9E%A8%E5%9B%BE%E7%89%87.jpg" title="耳螨"/>
                    <TitleTwo num="2" title="诊断"/>
                    <ZW>诊断包括病史询问，耳垢显微镜检查，有时以耳镜检查外耳道可看见白色移动小点。</ZW>
                    <TitleTwo num="3" title="治疗"/>
                    <ZW>先用耳漂清洗外耳道，再用尔康滴耳液洗一遍，每日两次，连续5-7天。</ZW>
                    <ZW>大宠爱和爱沃克两种皮肤滴剂也都有不错效果，每个月滴用一次。</ZW>    
                </PW>
                <PW>
                    <TitleOne num="02" title="怎么洗耳朵"/>
                    <TitleTwo num="1" title="先将猫咪固定住"/>
                    <ZW>首先用包猫大发将猫咪包起来</ZW>
                    <Img title="无助的小猫咪" url="http://qny.kuniseichi.cn/%E5%A6%82%E4%BD%95%E7%BB%99%E7%8C%AB%E5%88%B7%E7%89%99-02.jpg"/>
                    <TitleTwo num="2" title="滴入清洗液并按摩"/>
                    <Img title="滴入清洗液并按摩数十秒" url="http://qny.kuniseichi.cn/%E6%B4%97%E8%80%B3%E6%9C%B5.gif"/>
                    <TitleTwo num="3" title="等猫咪甩头"/>
                    <ZW>友情提醒：猫咪甩头的时候躲远点。</ZW>
                    <TitleTwo num="4" title="擦拭外耳道"/>
                    <ZW>尽量选用棉球而不是用棉签，因为棉签使用不当会造成猫咪耳朵发炎。</ZW>
                    <Img title="使用棉球将外耳道擦干净" url="http://qny.kuniseichi.cn/%E6%B4%97%E8%80%B3%E6%9C%B5%E6%A3%89%E7%90%83.gif"/>
                    <ZW><strong>大功告成，最后别忘了给主子奖励哦。</strong></ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:267.</p>
                    </WX>
                </PW>

            </Passage>
        );
    }
}

export default ErMan;