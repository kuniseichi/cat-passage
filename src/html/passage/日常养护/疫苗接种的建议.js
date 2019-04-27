import React, { Component } from 'react';
import TitleOne from '../comp/titleOne';
import TitleTwo from '../comp/titleTwo';
import ZW from '../comp/zw';
import PW from '../comp/passageWrapper';
import Passage from '../comp/passage';
import Img from '../comp/img';
import WX from '../comp/wx';

class YiMiaoJieZhong extends Component {
    render() {
        return (
            <Passage title="疫苗接种的建议">
                <PW>
                    <TitleOne num="01" title="是否一定要打疫苗" />
                    <ZW>猫疫苗一般有猫三联、猫五联，甚至猫七联等，通常情况下都是选择猫三联。</ZW>
                    <Img title="不同疫苗对病毒的防范" url="http://qny.kuniseichi.cn/WX20190416-155343.png"/>
                    <ZW>正常情况下，<strong>要打猫三联</strong>，即使平常不出门也有可能被人携带的病毒感染。但是如果猫咪不出门，没有机会和有狂犬病的动物接触，则不需要打狂犬疫苗。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="接种建议" />
                    <TitleTwo num="1" title="最初的疫苗接种行程"/>
                    <ZW>最初的疫苗接种行程建议是在9周龄左右开始，第二剂则是在2-4周后，但最好是超过12周龄。</ZW>
                    <ZW>但是因为有些猫咪的移行抗体会存在较长的时间，所以这样的最初接种计划可能是不足的，在猫杯状病毒感染高风险的状况下，则建议于第16周施打第三剂。</ZW>
                    <ZW>国际性的猫科医学会建议在<strong>整个最初疫苗接种行程中都采用相同品牌的疫苗。</strong></ZW>
                    <ZW>如果成猫或年轻猫无法确认之前是否有施打过疫苗时，则仍建议间隔2~4周连续施打两剂。</ZW>
                    <TitleTwo num="2" title="定期补强" />
                    <ZW>如果猫咪处在环境是属于高感染风险时（定期外出洗澡或经常到医院），则建议每年加强一次，如果猫咪是完全户内饲养且足不出户，则可以三年接种一次。</ZW>
                    <ZW>疫苗的接种并无法让猫咪产生100%的猫杯状病毒保护能力，即使在接种疫苗没多久之后也是一样，而且这样的保护能力是随着时间而逐渐降低的。</ZW>
                    <ZW>如果加强接种的时间延误了，如果距离上次接种时间不超过三年时，则施打一次即可，但如果超过三年，则建议施打两次，间隔2-4周。</ZW>
                    {/* <TitleTwo num="3" title="怀孕的猫咪" /> */}
                </PW>
                <PW>
                    <TitleOne num="03" title="注意事项" />
                    <ZW>接种疫苗前，要确保猫咪的身体是健康的，如果猫咪有呕吐，打喷嚏等症状，不建议打疫苗。</ZW>
                    <ZW>不少猫咪会在打疫苗后3天内食欲减弱，精神不佳，这些都是轻微过敏状态，如果超过5天没有好转就要联系医生。</ZW>
                    <ZW>如果猫咪在打疫苗当天脸部水肿，上吐下泻，可能是急性过敏，需要立即就诊。</ZW>
                    <ZW>打完疫苗一周内尽量不要带猫咪出门，也不要给猫咪洗澡。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:415-422.</p>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:67-72.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default YiMiaoJieZhong;