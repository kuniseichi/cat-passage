import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class DaPenTi extends Component {
    render() {
        return (
            <Passage title="猫咪打喷嚏是感冒了吗？">
                <PW>
                    <TitleOne num="01" title="猫咪打喷嚏的原因" />
                    <ZW>很多时候猫咪打喷嚏，铲屎官就以为猫咪是不是感冒了，其实猫咪是没有那么容易感冒的。</ZW>
                    <ZW>打喷嚏可能是环境因素造成的，也可能是身体疾病造成的，需要根据具体情况判断。</ZW>
                    <TitleTwo num="1" title="环境因素" />
                    <UL>
                        <li>气温变化</li>
                        <li>花粉</li>
                        <li>质量不好的膨润土</li>
                        <li>香水，定型喷雾等日用品</li>
                    </UL>
                </PW>
                <PW>
                    <TitleTwo num="2" title="可能疾病"/>
                    <UL>
                        <li>上呼吸道感染</li>
                        <li>口腔感染：猫咪牙齿很短，如果牙根感染，就有可能造成鼻窦炎</li>
                        <li>吸入异物</li>
                    </UL>
                    <ZW>如果猫咪只是偶尔打一下喷嚏，精神正常的话可以在家观察。</ZW>
                    <ZW>如果猫咪不仅仅是打喷嚏，还伴随流鼻涕，精神不振，发烧之类的症状，需要及时就医。</ZW>
                    <ZW>如果喷嚏不断，甚至喷出血，要怀疑是否有异物进去，有些异物很容易被进去，但是很难看得到，如棉絮，木屑等等，甚至可能是盆栽上的刺，都需要注意及时就医。</ZW>
                    <WX>
                        <p class="wx">[1]兽医妮可小教室. 貓為什麼打噴嚏？.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default DaPenTi;