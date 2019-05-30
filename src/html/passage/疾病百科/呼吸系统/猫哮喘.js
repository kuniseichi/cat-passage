import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class MaoXiaoChuan extends Component {
    render() {
        return (
            <Passage title="猫哮喘">
                <PW>
                    <TitleOne num="01" title="猫哮喘" />
                    <ZW>猫哮喘就是我们常听到的慢性支气管炎</ZW>
                    <TitleTwo num="1" title="症状" />
                    <ZW>猫咪可能会出现标准的哮喘症状，猫咪会成母鸡蹲状，把脖子伸长并紧贴地面，然后出现粗裂的喘鸣音，有时也会伴随咳嗽的症状出现。</ZW>
                    <ZW>随着严重程度或过敏原出现的频率，有的猫咪会1d内不断地持续地发生，有的则是数天发作一次，轻微的甚至数月至数年才发作一次。</ZW>
                    <TitleTwo num="2" title="诊断" />
                    <ZW>临床上诊断猫哮喘有一定的困难性，因为大部分的猫咪到了医生面前就不会再出现症状，而饲主的症状描述或许就成为诊断上的唯一线索。</ZW>
                    <ZW>就必须进行一连串的检验以排除其他疾病的可能性。</ZW>
                    <UL>
                        <li>X光照影：在X光片上或许见间质性浸润的影像，也可能发现右心影像扩大、胃部吞入大量空气或肺气肿</li>
                        <li>全血计数：有20%~75%的病例会出现嗜酸性粒细胞增多</li>
                        <li>心丝虫检验：可借此排除心丝虫感染的可能性</li>
                        <li>发作时的录影：这在笔者的临床诊断上提供很大的帮助，如果饲主能将发作时的猫咪录影下来，可让兽医师更清楚确认哮喘的症状</li>
                    </UL>
                    <TitleTwo num="3" title="预防" />
                    <UL>
                        <li>体重控制：若猫咪过胖时，减重或许可以降低症状</li>
                        <li>过敏原控制：避免使用易产生灰尘的猫砂、屋内禁烟、定期使用医疗级的空气滤清机来减少灰尘，但大多效果有限</li>
                        <li>食物：可以选择低过敏的处方饲料</li>
                    </UL>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:39-46.109-112</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default MaoXiaoChuan;