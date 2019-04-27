import React, { Component } from 'react';
import TitleOne from '../../comp/titleOne';
import TitleTwo from '../../comp/titleTwo';
import ZW from '../../comp/zw';
import PW from '../../comp/passageWrapper';
import Passage from '../../comp/passage';
import WX from '../../comp/wx';

class Beizhuang extends Component {
    render() {
        return (
            <Passage title="猫杯状病毒">
                <PW>
                    <TitleOne num="01" title="猫杯状病毒" />
                    <ZW>猫杯状病毒（FCV）是一种高度传染性的病毒，广泛的存在于全世界的猫群中，常发生于8～12周龄的猫。</ZW>
                    <ZW><strong>主要通过打喷嚏，唾液的方式传播，即使复原后很多猫仍会持续排放病毒，大部分会长达30天以上，有少数会持续好几年。</strong></ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="引发疾病及其症状" />
                    <TitleTwo num="1" title="急性口腔及上呼吸道疾病" />
                    <ZW>大部分的临床病程会呈现典型的舌头溃疡及轻微急性呼吸道疾病症状，如打喷嚏，流鼻涕，结膜充血等等。</ZW>
                    <TitleTwo num="2" title="慢性口炎" />
                    <ZW>猫咪口腔疾病，临床表现为增生性及溃殇性的牙跟炎及咽喉炎，可能是一种对于杯状病毒及其他病原的免疫介导性反应所造成的，但目前仍无法以实验的方法来诱发慢性口炎，而猫杯状病毒在里面所扮演的角色也尚未明了。</ZW>
                    <TitleTwo num="3" title="踱脚症候群" />
                    <ZW>于猫杯状病毒感染之后或疫苗接种之后可能会呈现急性短暂性的破行症状。</ZW>
                    <TitleTwo num="4" title="恶性全身性猫怀状病毒疾病" />
                    <ZW>全身性都可能发声炎症反应，其死亡率可以高达67%。其临床症状有些差异。</ZW>
                    <ZW>有些猫呈现严重急性上呼吸道疾病，皮肤水肿，主要在头部及脚肢出现溃疡，在鼻部、嘴唇、耳朵、眼睛周围及脚掌可见痴皮、溃疡及脱毛;</ZW>
                    <ZW>有些猫会呈现黄瘟，可能是由于肝脏坏死或膜腺炎。</ZW>
                    <ZW>有些猫则可能因为肺部浸润水肿而引发呼吸窘迫。而弥漫性血管内凝血则会造成凝血功能障碍及血栓栓塞。临床的表现为出血紫斑、流鼻血或血样粪便。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="预防"/>
                    <ZW>猫杯状病毒的染非常普遍，<strong>所有的健康猫都应该施打疫苗</strong>，虽然疫苗的施打可以有效地对抗大部分病例的急性上呼吸道疾病与急性口腔疾病，但并无法防止病毒的感染及排毒，而且疫苗所提供的保护作用是无法去对抗所有的杯状病毒病毒株的。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default Beizhuang;