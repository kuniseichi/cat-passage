import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class GouChongBing extends Component {
    render() {
        return (
            <Passage title="钩虫病">
                <PW>
                    <TitleOne num="01" title="钩虫病" />
                    <ZW>钩虫病是体内寄生虫，幼虫会钻进皮肤致使人得皮肤病，引起贫血、营养不良、浮肿、腹痛及胃肠功能障碍为主要表现。</ZW>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>钩虫也是通过粪便传染，但是不是吃下去而是幼虫污染皮肤而被感染。</ZW>
                    <TitleTwo num="02" title="预防" />
                    <ZW>猫咪健康喂养，定时驱虫，每天及时处理猫咪排泄物，处理之后洗手。</ZW>
                    <ZW>每天及时处理猫咪排泄物，处理之后洗手。其实生活中有着更多更广泛的传播途径，最根本的还是要注意个人卫生</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:223-226.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default GouChongBing;