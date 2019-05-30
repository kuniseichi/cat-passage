import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class BaSiDe extends Component {
    render() {
        return (
            <Passage title="巴斯德杆菌病">
                <PW>
                    <TitleOne num="01" title="巴斯德杆菌病" />
                    <ZW>巴斯德杆菌病广泛存在于许多家畜和野生动物的呼吸道和肠道。</ZW>
                    <ZW>表现为伤口发红，疼痛，肿胀，咬伤较深时，也可导致骨膜炎和骨髓炎，有可能产生呼吸不良的反应，比如支气管炎等。</ZW>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>人类的感染大部分是由于被猫、狗或其他动物咬伤所致。除了被抓被咬，直接吃进猫的口水也有被感染的可能性。</ZW>
                    <TitleTwo num="02" title="预防" />
                    <ZW>被猫咪抓伤咬伤之后及时伤口清创消毒，不要亲猫咪嘴巴。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default BaSiDe;