import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class MaoShi extends Component {
    render() {
        return (
            <Passage title="看猫屎知健康">
                <PW>
                    <TitleOne num="01" title="便便提现健康" />
                </PW>
                <PW>
                    <TitleOne num="02" title="不同便便的形态" />
                    <TitleTwo num="1" title="健康的便便" />
                    {/* <ZW>干硬的便便非常容易捡起，且不会粘在地上。</ZW> */}
                    <Img title="干硬、条状的便便" url="http://qny.kuniseichi.cn/QQ20190417-204029.png"/>
                    <Img title="干燥、条状但不硬的便便" url="http://qny.kuniseichi.cn/QQ20190417-204022.png"/>
                    <TitleTwo num="2" title="亚健康的便便" />
                    <Img title="干硬的球状便便" url="http://qny.kuniseichi.cn/QQ20190417-204038.png"/>
                    <ZW>如果出现干硬的球状便便时说明猫咪缺水了，可以尝试给猫咪增加水分多的食物。</ZW>
                    <Img title="成型的软便" url="http://qny.kuniseichi.cn/QQ20190417-203946.png"/>
                    <TitleTwo num="3" title="不健康的便便"/>
                    <Img title="水状、糊状、黑焦油状便便" url="http://qny.kuniseichi.cn/QQ20190417-204054.png"/>
                    <ZW>血便，出现寄生虫或者寄生虫卵等等。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="软便是否需要看医生"/>
                    <ZW>引起软便的疾病有很多种，如果情况不严重的话可以在家做初步的治疗调理。</ZW>
                    <ZW>如果是气候变化或应激反应引起的，基本可以自愈。</ZW>
                    <ZW>如果是消化不良引起的，可以禁粮24小时（不禁水），再喂食少量益生菌。</ZW>
                    <ZW>但如果出现以下状况则需要及时送医。</ZW>
                    <UL>
                        <li>体重若降低超过10%</li>
			  			<li>脱水超过3%-5%或更多（可以检查牙龈是否湿润）</li>
			  			<li>明显的危及肠粘膜征兆（如:出血性腹泻）</li>
			  			<li>严重的电解质不平衡（水状便便）</li>
			  			<li>发烧</li>
                    </UL>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:39-46.</p>
			  	        <p class="wx">[2]糯米团. 猫迷呕吐有学问[J]. 宠物世界(猫迷), 2009, 12</p>
                    </WX>
                </PW>

            </Passage>
        );
    }
}

export default MaoShi;