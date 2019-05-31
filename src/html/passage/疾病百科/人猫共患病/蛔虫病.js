import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class HuiChongBing extends Component {
    render() {
        return (
            <Passage title="蛔虫病">
                <PW>
                    <TitleOne num="01" title="蛔虫病" />
                    <ZW>蛔虫大家都不陌生，是最常见的体内寄生虫。症状有食欲不振、恶心、呕吐、消瘦、发烧、咳嗽、关节痛、肝脏肿胀，以及间歇性脐周疼痛等表现。</ZW>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>接触带有蛔虫卵的猫咪粪便，并且不小心食入就会感染。</ZW>
                    <ZW>蛔虫的感染途径很多，绝大部分人感染并非通过猫粪便，而是不注意饮食卫生和个人卫生而被传染的。一定做到饭前、便后洗手，不生食未洗净的蔬菜及瓜果，不饮生水，防止食入蛔虫卵，就能减少感染。</ZW>
                    <TitleTwo num="02" title="预防" />
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

export default HuiChongBing;