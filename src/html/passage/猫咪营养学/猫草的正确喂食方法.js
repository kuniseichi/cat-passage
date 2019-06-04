import React, { Component } from 'react';
import TitleOne from '../../comp/titleOne';
import TitleTwo from '../../comp/titleTwo';
import ZW from '../../comp/zw';
import PW from '../../comp/passageWrapper';
import Passage from '../../comp/passage';
import WX from '../../comp/wx';
import Quote from '../../comp/quote';
import Img from '../../comp/img';
import UL from '../../comp/ul';

class MaoCao extends Component {
    render() {
        return (
            <Passage title="猫草的正确喂食方法">
                <PW>
                    <TitleOne num="01" title="猫草是什么" />
                    <ZW>野外的猫狗，都会本能的选择适当的植物吃。相信有养狗的朋友一定有看过狗狗在郊外游玩时，快乐的啃着草的样子，其实猫咪也不例外（不过要小心，有些草地会定期喷杀虫剂）。</ZW>
                    <ZW>不少人将小麦草和猫薄荷混淆，全部统称为猫草。</ZW>
                    <ZW><strong>这里指的是长的像青草的小麦草</strong>，而不是吃了会让猫咪很亢奋的猫薄荷。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="购买种植方法" />
                    <ZW>大家可以在网上购买小麦草种子，或大麦草种子。买来后可用泥土或水种，几天后就回发芽，便有新鲜的草给猫咪享用。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="喂食须知"/>
                    <ZW>小麦草有助消化，所以当猫咪感觉消化不良时，回特别想吃草。</ZW>
                    <ZW>有些猫咪会将刚吃吃下的草吐出，请不必惊慌，这是正常的！因为小麦草会促进猫咪消化系统的蠕动，包括食道，过程中也会将猫咪身体重有毒或者消化不了的东西（如毛球）一起吐出来。</ZW>
                    <ZW>此外，小麦草也含有丰富的非水溶性纤维，能加速体内废物及毒素的排除。</ZW>
                    <ZW>食用方法：可以整盆草给猫咪自由进食。不过要限时，否则可能一天就吃光了，如果猫咪不懂自己进食小麦草，可将少量小麦草剪碎，加入食物中。</ZW>
                    <ZW>份量：每天最好不要超过一茶匙，小麦草属性微凉，有轻泻作用，有些猫咪吃下后会轻微腹泻。</ZW>
                    <WX>
                        <p class="wx">[1]苏菁菁. 猫咪这样吃最健康[M]. 2013.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default MaoCao;