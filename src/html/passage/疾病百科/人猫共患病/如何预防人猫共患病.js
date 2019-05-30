import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class GongHuanBing extends Component {
    render() {
        return (
            <Passage title="如何预防人猫共患病">
                <PW>
                    <TitleOne num="01" title="如何预防人猫共患病"/>
                    <ZW>很多猫奴会问，我的感冒会不会传染给猫咪呢？答案是当然不会，因为病毒不同，所以不会相互传染。</ZW>
                    <ZW>猫咪与人之间的共同传染病并不多，下面将人猫共患病分为三类。</ZW>
                    <TitleTwo num="01" title="通过粪便传染"/>
                    <UL>
                        <li>蛔虫病</li>
                        <li>钩虫病</li>
                        <li>弓形虫</li>
                        <li>沙门氏菌</li>
                    </UL>
                    <ZW>以上4种都是通过猫咪粪便进行传播，预防方法很简单，猫咪健康饮食科学喂养，按规定驱虫，注意卫生，避免猫咪患病。并且做到每天及时处理猫咪排泄物，处理之后洗手。</ZW>
                    <ZW>其实生活中有着更多更广泛的传播途径，最根本的还是要注意个人卫生，营造卫生的生活环境才是关键的。</ZW>
                    <TitleTwo num="02" title="通过抓咬传染"/>
                    <UL>
                        <li>狂犬病</li>
                        <li>猫爪病</li>
                        <li>巴斯德杆菌病</li>
                    </UL>
                    <ZW>这三种疾病一直被媒体渲染如同妖魔，让不少朋友非常紧张，而实际预防起来也不难。</ZW>
                    <ZW>被猫咪抓伤咬伤之后及时伤口清创消毒，如果被流浪猫狗咬后不放心还可以选择注射狂犬疫苗，感染几率非常低，甚至几乎可以避免。</ZW>
                    <TitleTwo num="03" title="通过直接接触传染"/>
                    <UL>
                        <li>真菌性皮肤病（猫癣）</li>
                        <li>跳蚤过敏性皮炎</li>
                        <li>绦虫病</li>
                    </UL>
                    <ZW>这三种疾病同样不可怕，给猫咪定期驱虫，清理消毒猫咪居住场所，与患病猫咪接触后洗手消毒，并隔离处理。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default GongHuanBing;