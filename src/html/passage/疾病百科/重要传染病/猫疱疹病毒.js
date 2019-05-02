import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class PaoZhen extends Component {
    render() {
        return (
            <Passage title="猫疱疹病毒">
                <PW>
                    <TitleOne num="01" title="猫疱疹病毒" />
                    <ZW>猫疱疹病毒又称病毒性鼻支气管炎，广泛存在于全世界，其毒力在各病毒株之间各有不同，我们常说的猫鼻支就是由它引起的。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="临床症状" />
                    <ZW>猫疱疹病毒属于终身感染，大多数感染的猫咪是没有症状的，只有在免疫力低下的情况下会出现症状。</ZW>
                    <ZW>典型的临床症状包括有：</ZW>
                    <UL>
                        <li>发烧</li>
                        <li>精神不振，厌食</li>
                        <li>眼鼻分泌物</li>
                        <li>结膜炎</li>
                        <li>打喷嚷</li>
                        <li>很少出现的流口水及咳嗽</li>
                    </UL>
                </PW>
                <PW>
                    <TitleOne num="03" title="治疗与预防"/>
                    <TitleTwo num="1" title="辅助治疗" />
                    <ZW>给猫咪吃适口性强的东西，并且适当地加温及翻搅。</ZW>
                    <TitleTwo num="2" title="药物治疗" />
                    <ZW>泛昔洛韦（优先），30-40mg/kg，每日两次，欧洲首选用药，可以有效地全身性控制猫疱疹病毒所造成的伤害。</ZW>
                    <ZW>左旋赖氨酸250mg，每日两次，幼猫剂量减半，可混在食物同服。</ZW>
                    <TitleTwo num="3" title="预防" />
                    <ZW><strong>最好的预防是打疫苗，</strong>几乎所有的疫苗都包括了猫疱疹病毒（包括猫三联），虽然不是百分百免疫病毒，但是可有效降低90%的临床严重程度。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:405-414.</p>
                        <p class="wx">[2]Dr Lan. 我不醫人. 流感特辑</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default PaoZhen;