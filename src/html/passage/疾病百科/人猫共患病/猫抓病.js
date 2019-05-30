import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class MaoZhuaBing extends Component {
    render() {
        return (
            <Passage title="猫抓病">
                <PW>
                    <TitleOne num="01" title="猫抓病" />
                    <ZW>主要由家猫抓人或咬人引起的急性传染病。温暖季节较寒冷季节多见。</ZW>
                    <ZW>抓伤或咬伤处皮肤有炎症、疼痛，并可化脓；局部淋巴结肿大、压痛，少数病人淋巴结化脓，并可破溃形成窦道；亦可有全身淋巴结轻度肿大和脾肿大；约1/3病人可出现发热，体温在38～41℃，伴有头痛、全身不适等。该病为良性、自限性疾病，多数病人均在2、3个月内自愈，除非患者有免疫方面的问题。绝大多数患者预后良好。文献资料中复发性猫抓病极为罕见。</ZW>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>通过猫咪抓咬传播。</ZW>
                    <TitleTwo num="02" title="预防" />
                    <ZW>预防该病应避免被猫抓伤及咬伤，若发生抓、咬伤时，可局部涂抹碘酒及酒精。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default MaoZhuaBing;