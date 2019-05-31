import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class GongXingChong extends Component {
    render() {
        return (
            <Passage title="弓形虫">
                <PW>
                    <TitleOne num="01" title="弓形虫" />
                    <ZW>弓形虫是体内寄生虫，是人表现为慢性寄生虫病，可能会发烧，皮疹，胃肠症状，肺炎等等。孕妇感染严重的时候可能会引起流产或影响胎儿发育。</ZW>
                    <TitleTwo num="1" title="传播途径" />
                    <UL>
                        <li>食用生肉或煮得不够熟的肉类</li>
                        <li>运输或接触生肉或生的内脏后，没有清洁双手便放到嘴里</li>
                        <li>接触含有孵化卵囊的猫粪便或接触与此种猫粪便接触的物体</li>
                    </UL>
                    <TitleTwo num="2" title="预防" />
                    <ZW>猫咪健康喂养，定时驱虫，每天及时处理猫咪排泄物，处理之后洗手。</ZW>
                    <ZW>每天及时处理猫咪排泄物，处理之后洗手。其实生活中有着更多更广泛的传播途径，最根本的还是要注意个人卫生。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default GongXingChong;