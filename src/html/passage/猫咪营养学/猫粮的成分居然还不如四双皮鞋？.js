import React, { Component } from 'react';
import TitleOne from '../../comp/titleOne';
import TitleTwo from '../../comp/titleTwo';
import ZW from '../../comp/zw';
import PW from '../../comp/passageWrapper';
import Passage from '../../comp/passage';
import WX from '../../comp/wx';
import Quote from '../../comp/quote';
import Img from '../../comp/img';
import UL from '../../comp/ul';

class PiXie extends Component {
    render() {
        return (
            <Passage title="猫粮的成分竟然抵不过四双皮鞋">
                <PW>
                    <TitleOne num="01" title="宠物食品安全问题" />
                    <ZW>曾经的三聚氰胺事件也发生在宠物身上过，黑心供应商在粮中添加三聚氰胺，增加氮的含量，令买家以为其蛋白质含量高。</ZW>
                    <ZW>当时造成8500只猫狗的死亡，超过150款猫狗饲料回收。</ZW>
                    
                </PW>
                <PW>
                    <TitleOne num="02" title="旧鞋狗粮实验" />
                    <ZW>视频中用皮提供蛋白质，用木屑提供纤维，润滑油提供脂肪。</ZW>
                    <ZW>将这些东西煮成黑糊糊的混合物，送到相关机构检测，蛋白质，纤维，脂肪含量都可以达到标准。</ZW>
                    <ZW>因此指数达标不代表粮的质量，选购粮食时要看准成分。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="如何挑选优质猫粮"/>
                    <UL>
                        <li>成分标签第一项一定是动物肉</li>
                        <li>不要选择有人造色素、化学防腐剂如BHA、BHT、Ethoxyquin等的猫粮。应选用天然防腐剂，如维生素C、E和迷迭香油的猫粮</li>
                        <li>不选用没有明确表明动物来源的蛋白质，如动物脂肪</li>
                        <li>不选用额外添加糖分的猫粮，玉米糖浆，蔗糖等</li>
                        <li>避免小麦、玉米、黄豆。这几种谷物容易令猫咪敏感</li>
                        <li>包含的水果一定是完整的，而不是零碎物</li>
                        <li>必须清楚标明产地</li>
                    </UL>
                    <WX>
                        <p class="wx">[1]苏菁菁. 猫咪这样吃最健康[M]. 2013.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default PiXie;