import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class MaoWen extends Component {
    render() {
        return (
            <Passage title="猫瘟">
                <PW>
                    <TitleOne num="01" title="猫瘟" />
                    <ZW>猫瘟又称泛白细胞减少症，是一种好发于幼猫的传染病。</ZW>
                    <ZW><strong>主要的感染来源是急性感染期猫的粪便、尿液、唾液及呕吐物。</strong></ZW>
                    <ZW>虽然猫瘟是种高度传染性的疾病，但由于预防接种的效果非常好，因此现在己较少见了。</ZW>
                    <TitleTwo num="01" title="症状" />
                    <ZW>临床症状严重的程度有相当大的个体差异，视个体对于本病毒的感受性而定，从无症状的感染到轻微短暂的发烧及泛白细胞减少，再到严重的急性征候，甚至死亡。</ZW>
                    <ZW>一般而言，幼猫的感染症状通常较为严重。本病的潜伏期为2-10d，最先出现的症状为嗜睡、发烧、厌食、明显口渴但却拒绝饮水，通常也会出现呕吐的症状，但早期并不常发生腹泻，于腹部触诊时会发现充满气体及液体的肠道，也可能会诱发痛觉。</ZW>
                    <ZW>过了2~3d之后，症状便会有很大的差异，如:发烧、大量水样腹泻或病疾、严重脱水及电解质不平衡。一旦体温下降至正常以下时，多半会造成死亡。 死亡率为25%~75%，死亡的原因为脱水、电解质不平衡及继发性的细菌感染。</ZW>
                    <TitleTwo num="02" title="治疗" />
                    <ZW>治疗上主要采用支持疗法及对症治疗，使猫咪本身的免疫系统能克服感染。</ZW>
                    <UL>
                        <li>控制并预防继发性的细菌感染</li>
                        <li>止泻止吐</li>
                        <li>增加食物适口性</li>
                    </UL>
                    <TitleTwo num="03" title="预防" />
                    <ZW>按时接种疫苗。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2014:427-429.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default MaoWen;