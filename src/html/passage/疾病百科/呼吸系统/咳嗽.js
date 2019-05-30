import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class KeSou extends Component {
    render() {
        return (
            <Passage title="咳嗽">
                <PW>
                    <TitleOne num="01" title="咳嗽" />
                    <ZW>对猫咪而言，咳嗽却是相当罕见且陌生的症状，打喷囔反而是较常见的呼吸道症状。</ZW>
                    <ZW>所以一旦发现这样的症状就别忽视，应立即送医检查，或许可以发现一些可怕的潜在疾病。</ZW>
                    这里有视频
                    <TitleTwo num="1" title="病因诊断" />
                    <ZW>兽医师在临床的诊断上必须先考虑猫哮喘、心丝虫、乳廉胸、气管疾病等可能性。</ZW>
                    <ZW>所以会先进行胸部X光照影，这是首先必须要进行的检验，看是否有出现猫哮喘、胸水、心丝虫疾病及支气管疾病在X光片下标准的影像学变化。</ZW>
                    <ZW>虽然咳嗽可能会是某一种严重疾病的症状，但咳嗽症状的本身并不会危及猫咪的性命，或者让猫咪严重虚弱，所以并不需要去抑制这样的症状，应该将重点放在原发性病因的确诊及治疗上。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2014:108.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default KeSou;