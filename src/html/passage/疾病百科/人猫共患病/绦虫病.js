import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class TaoChongBing extends Component {
    render() {
        return (
            <Passage title="绦虫病">
                <PW>
                    <TitleOne num="01" title="绦虫病" />
                    <ZW>人和猫都是绦虫宿主中间的一环，虽然这种病又是和跳蚤有关，但是跳蚤本身并不会通过传染寄生在人的身上，它们只会叮咬人。</ZW>
                    <TitleTwo num="1" title="传播途径" />
                    <ZW>只有将跳蚤的卵吃进体内才有机会感染。</ZW>
                    <TitleTwo num="2" title="预防" />
                    <ZW>保持卫生，定期驱虫，不要让猫咪感染跳蚤。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default TaoChongBing;