import React, { Component } from 'react';
import TitleOne from '../../comp/titleOne';
import TitleTwo from '../../comp/titleTwo';
import ZW from '../../comp/zw';
import PW from '../../comp/passageWrapper';
import Passage from '../../comp/passage';
import WX from '../../comp/wx';
import UL from '../../comp/ul';
import Img from '../../comp/img';


class XiErDuo extends Component {
    render() {
        return (
            <Passage title="如何给猫洗耳朵">
                <PW>
                    <TitleOne num="01" title="为什么要给猫咪清洗耳朵" />
                    <ZW>当猫咪的耳朵过度潮湿或通风不良时，容易滋生霉菌和细菌，造成耳朵发炎，定期清洗耳朵可以有效避免耳道疾病。</ZW>
                    <ZW>频率可以在15-30天一次。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="清洗工具准备" />
                    <UL>
                        <li>医用棉球</li>
                        <li>耳部清洗液</li>
                    </UL>
                </PW>
                <PW>
                    <TitleOne num="03" title="怎么洗耳朵"/>
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
                </PW>
            </Passage>
        );
    }
}

export default XiErDuo;