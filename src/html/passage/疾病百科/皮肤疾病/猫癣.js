import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class MaoXuan extends Component {
    render() {
        return (
            <Passage title="猫癣">
                <PW>
                    <TitleOne num="01" title="猫癣是什么" />
                    <ZW>猫癣是猫咪最常见的皮肤病，好发于品种猫，且是一种人猫共患病，会传染给人类和犬只。</ZW>
                    <ZW>猫癣主要通过解除传染，可以通过梳子，毛发等传染至全身各处。</ZW>
                    <ZW>可以用伍氏灯来进行确认病灶，会呈现绿色荧光，但其准确度不到三成，所以只能仅供参考。</ZW>
                    
                    <Img title="猫癣（可能会有鳞屑或大片脱落的情况）" url="http://qny.kuniseichi.cn/%E7%8C%AB%E7%99%A3.png"/>
                    <Img title="人感染猫癣" url="http://qny.kuniseichi.cn/%E4%BA%BA%E5%BE%97%E7%8C%AB%E7%99%A3.jpeg"/>
                </PW>
                <PW>
                    <TitleOne num="02" title="治疗" />
                    <ZW>短毛猫在猫癣不严重的情况下多晒晒太阳可以自愈，但如果发生全身性猫癣或长毛猫得了猫癣则需要做好以下几点。</ZW>
                    <TitleTwo num="1" title="口服药物"/>
                    <ZW>全身性的猫癣大多需要口服药物治疗，局部涂药和药浴是无法痊愈的，现在使用最多且效果最好伊曲康唑，剂量为5-10mg/kg，每日口服一次，共计治疗4-6周。</ZW>
                    <ZW>有极少数猫咪的确会引发ALT的上升，波斯猫、喜马拉雅猫及异国短毛猫建议调低的剂量，如果已经造成厌食或食欲明显减退时，应立即停药。</ZW>
                    <TitleTwo num="2" title="药浴" />
                    <ZW>单纯的氯己定洗剂不具备明确的治疗效果，推荐Dermacare公司的Malaseb（麻辣洗），每周1-2次，必须让泡沫留在身上至少10min才能产生最好的效果。</ZW>
                    <TitleTwo num="3" title="关于是否需要剃毛" />
                    <ZW>如果能做到口服药治疗4-6周，并配合麻辣洗药浴每周1-2次，不论剃不剃毛效果相同。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="预防"/>
                    <ZW>一旦环境中的猫咪发生皮瘤菌病时，所有的猫咪都应同时一起进行治疗，环境并不需要特别地消毒，只需要勤用吸尘器去除掉可能掉落环境的感染毛发即可，猫的睡窝应添加漂白水进仔清洗并且日照晒干。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:263-265.</p>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:203-209.</p>
                    </WX>
                </PW>

            </Passage>
        );
    }
}

export default MaoXuan;