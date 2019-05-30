import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';

class MaoXuan2 extends Component {
    render() {
        return (
            <Passage title="猫癣">
                <PW>
                    <TitleOne num="01" title="猫癣" />
                    <ZW>真菌性皮肤病也叫猫癣，常见皮肤病，症状是皮肤发红、发痒，起疹、圆形脱毛症等，人同样会传染给猫咪。</ZW>
                    <Img title="猫癣（可能会有鳞屑或大片脱落的情况）" url="http://qny.kuniseichi.cn/%E7%8C%AB%E7%99%A3.png"/>
                    <Img title="人感染猫癣" url="http://qny.kuniseichi.cn/%E4%BA%BA%E5%BE%97%E7%8C%AB%E7%99%A3.jpeg"/>
                    <TitleTwo num="01" title="传播途径" />
                    <ZW>通过肢体或毛发接触传染。</ZW>
                    <TitleTwo num="02" title="预防" />
                    <ZW>加强锻炼增强体质，和有猫癣的猫咪接触后做到洗手消毒。</ZW>
                    <ZW>一旦环境中的猫咪发生皮瘤菌病时，所有的猫咪都应同时一起进行治疗，环境并不需要特别地消毒，只需要勤用吸尘器去除掉可能掉落环境的感染毛发即可，猫的睡窝应添加漂白水进仔清洗并且日照晒干。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default MaoXuan2;