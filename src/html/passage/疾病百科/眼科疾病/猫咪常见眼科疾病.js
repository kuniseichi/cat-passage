import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class YanKeJiBing extends Component {
    render() {
        return (
            <Passage title="猫咪常见眼科疾病">
                <PW>
                    <TitleOne num="01" title="结膜炎" />
                    <ZW>结膜是富含血管的粘膜组织，在白眼球上面那层薄薄的膜就叫结膜，一旦收到刺激或感染就会充血肿胀。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>翻开眼皮可以看到红肿的结膜，还会出现眯眯眼、泪光、畏光、抓眼睛等症状</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E7%BB%93%E8%86%9C%E7%82%8E.png" title="结膜炎"/>
                    <TitleTwo num="2" title="病因"/>
                    <ZW>由于细菌和病毒感染、外伤、过敏、药品或植物刺激、垃圾、灰尘等引起。</ZW>
                    <TitleTwo num="3" title="治疗"/>
                    <ZW>病因复杂，建议送医。</ZW>    
                </PW>
                <PW>
                    <TitleOne num="02" title="角膜炎" />
                    <ZW>角膜是在眼球最前面的透明组织，当角膜发炎时角膜看起来会雾雾的。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>角膜的透明度会发生改变，眯眯眼、泪光、畏光、抓眼睛等症状。</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E8%A7%92%E8%86%9C%E7%82%8E.jpg" title="角膜炎"/>
                    <TitleTwo num="2" title="治疗"/>
                    <ZW>立即送医。</ZW>    
                </PW>
                <PW>
                    <TitleOne num="03" title="角膜溃疡" />
                    <ZW>正常的角膜是光滑平整的，如果观察到角膜上出现不平整的小区域凹陷，就可能是角膜溃疡。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>角膜上出现不平整的小区域凹陷，眯眯眼、泪光、畏光、抓眼睛等症状</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E8%A7%92%E8%86%9C%E6%BA%83%E7%96%A1.jpg" title="角膜溃疡"/>
                    <TitleTwo num="2" title="治疗"/>
                    <ZW>根据严重程度给予抗生素眼药水，定时擦药，同时一定要带上伊丽莎白圈。</ZW>    
                </PW>
                <PW>
                    <TitleOne num="04" title="泪溢" />
                    <ZW>有的猫咪的眼角总是湿湿的，好像有眼泪流出来一样。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>猫咪眼下方的毛发染成茶褐色。</ZW>
                    <TitleTwo num="2" title="病因"/>
                    <ZW>泪水分泌过多或是泪管阻塞所引起。</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E6%B3%AA%E6%BA%A2.jpg" title="泪溢"/>
                    <TitleTwo num="3" title="治疗"/>
                    <ZW>短期的泪溢使用药膏即可，长期的泪溢需要保持良好清洁习惯，并使用药膏辅佐。</ZW>    
                </PW>
                <PW>
                    <TitleOne num="05" title="青光眼" />
                    <ZW>青光眼的起因是由于角膜和水晶体之间的前眼房液增加，造成眼内的压力升高。另外，猫咪的眼睛如果内出血，或是因各种原因造成的眼液不能循环，也会引发青光眼。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>眼睛肿大、角膜浑浊等。</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E9%9D%92%E5%85%89%E7%9C%BC.png" title="青光眼"/>
                    <TitleTwo num="2" title="治疗"/>
                    <ZW>青光眼有内科治疗的方法，比如眼药等等，不过这要看青光眼的严重程度，如果除了眼压高之外，已并发眼睛感染甚至蓄脓的话，则外科手术是较快速解决方法。</ZW>    
                </PW>
                <PW>
                    <TitleOne num="06" title="白内障" />
                    <ZW>水晶体因先天性或后天性的原因而变得白、不透明。</ZW>
                    <TitleTwo num="1" title="症状"/>
                    <ZW>猫咪眼睛变得白、不透明。</ZW>
                    <Img url = "http://qny.kuniseichi.cn/%E7%99%BD%E5%86%85%E9%9A%9C.jpg" title="白内障"/>
                    <TitleTwo num="2" title="治疗"/>
                    <ZW>白内障的普遍治疗是做外科手术把不透明的部分去除，让猫咪恢复视力。只有经验丰富的医师才能做这种手术，如果没办法做手术或是手术失败，那么猫咪的视力就会逐渐丧失。</ZW>    
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:150-153.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default YanKeJiBing;