import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class MaoChuanFu extends Component {
    render() {
        return (
            <Passage title="猫传腹">
                <PW>
                    <TitleOne num="01" title="猫传腹是的来源" />
                    <ZW>猫的传染性腹膜炎（猫传腹）是由于冠状病毒(FECV)突变而来的。</ZW>
                    <ZW>冠状病毒的危害并不大，很多猫咪都携有冠状病毒，当猫咪收到刺激时，可能引发病毒变异，从而引发腹膜炎。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="症状" />
                    <ZW>潜伏期较短（2~4天），分渗出型(湿性)及非渗出型(干性)两种，渗出型占所有病例的60%-80%。</ZW>
                    <ZW>在形成的早期所出现的临床症状可能包括：</ZW>
                    <UL>
                        <li>变动性的发热</li>
                        <li>嗜眠</li>
                        <li>无食欲</li>
                        <li>体重减轻</li>
                        <li>时常腹泻</li>
                        <li>严重时瘫痪、眼球震颤、痊孪等</li>
                    </UL>
                    <ZW>如果得了湿性腹膜炎，猫的腹围会越来越大，但脊柱两侧的肌肉团块则逐渐消耗，并可清楚地触摸到脊椎，就像一根木棒挂着一个灌满水的气球一样。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="治疗与预防"/>
                    <TitleTwo num="1" title="治疗"/>
                    <ZW>FIP通常是致死性的，治疗只能起到缓解作用，难以治愈，通常选择安乐死。</ZW>
                    <ZW>最新跟进已有可以治疗的药，但价格昂贵，有复发风险。</ZW>
                    <TitleTwo num="2" title="预防"/>
                    <ZW>预防传腹应该从预防冠状病毒着手，每次引入新的猫咪都必须先隔离，然后进行冠状病毒的血清检查，并于12周后再次检查，确定无病毒后才能加入猫群。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default MaoChuanFu;