import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';

class TiaoZao extends Component {
    render() {
        return (
            <Passage title="跳蚤过敏性皮炎">
                <PW>
                    <TitleOne num="01" title="跳蚤过敏性皮炎" />
                    <ZW>得了跳蚤过敏性皮炎会奇痒难忍，有时候可能会起疹子，有时候容易和其他各种皮肤病混淆。</ZW>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>直接接触，或者受到从被毛中掉落的跳蚤的感染都有可能会发病。被跳蚤叮咬也可能会感染。</ZW>
                    <TitleTwo num="02" title="预防" />
                    <ZW>驱除猫咪和环境中的跳蚤，保持卫生，定期驱虫，减少猫咪出门。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default TiaoZao;