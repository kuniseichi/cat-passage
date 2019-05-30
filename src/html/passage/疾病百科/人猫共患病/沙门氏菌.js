import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class ShaMenShiJun extends Component {
    render() {
        return (
            <Passage title="沙门氏菌">
                <PW>
                    <TitleOne num="01" title="沙门氏菌" />
                    <ZW>沙门氏菌寄生于人类和动物肠道内，人患病后会出现呕吐、发烧、腹泻等等情况</ZW>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>蛋、家禽和肉类产品是沙门氏菌病的主要传播媒介，蛋、家禽和肉类产品是沙门氏菌病的主要传播媒介，感染主要取决于沙门氏菌的血清型和食用者的身体状况。</ZW>
                    <TitleTwo num="02" title="预防" />
                    <ZW>猫咪健康喂养，定时驱虫，每天及时处理猫咪排泄物，处理之后洗手。</ZW>
                    <ZW>每天及时处理猫咪排泄物，处理之后洗手。其实生活中有着更多更广泛的传播途径，最根本的还是要注意个人卫生</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default ShaMenShiJun;