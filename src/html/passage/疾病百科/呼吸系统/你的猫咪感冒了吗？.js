import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class GanMao extends Component {
    render() {
        return (
            <Passage title="我的猫咪感冒了吗？">
                <PW>
                    <TitleOne num="01" title="我的猫感冒了吗？" />
                    <ZW>如果你发现你的猫咪开始打喷嚏，流鼻涕，眼睛分泌物变多的时候，就要注意了，此时猫咪可能已经感冒了。</ZW>
                    <ZW>猫咪的感冒大多是病毒引起的，少数是由细菌引起的。</ZW>
                    <ZW>引起猫咪感冒的病菌主要有以下：</ZW>
                    <UL>
                        <li>猫疱疹病毒（主要）</li>
                        <li>猫杯状病毒（主要）</li>
                        <li>披衣菌</li>
                        <li>博德特拉杆菌</li>
                        <li>猫禽流感</li>
                    </UL>
                    <ZW>其中有些病毒猫咪一直都携带，只是平时没有症状，只有在抵抗力下降的时候才会表现来。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="猫感冒了怎么办" />
                    <ZW>如果猫咪的症状很轻，那么注意保暖，喂些适口性好的食物再进行观察即可。</ZW>
                    <ZW>如果猫咪症状加重，可以喂泛昔洛韦，或者赖氨酸进行治疗。</ZW>
                    <UL>
                        <li>泛昔洛韦（优先），30-40mg/kg，每日两次，欧洲首选用药，可以有效地全身性控制猫疱疹病毒所造成的伤害。</li>
                        <li>左旋赖氨酸250mg，每日两次，幼猫剂量减半，可混在食物同服。</li>
                    </UL>
                    <ZW>如果猫咪症状依然没有减轻或者长时间不吃东西，需要及时送医治疗。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:405-414.</p>
                        <p class="wx">[2]Dr Lan. 我不醫人. 流感特辑</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default GanMao;