import React, { Component } from 'react';
import TitleOne from '../../../../comp/titleOne';
import TitleTwo from '../../../../comp/titleTwo';
import ZW from '../../../../comp/zw';
import PW from '../../../../comp/passageWrapper';
import Passage from '../../../../comp/passage';
import WX from '../../../../comp/wx';
import UL from '../../../../comp/ul';
import Img from '../../../../comp/img';


class KouQiangJiBing extends Component {
    render() {
        return (
            <Passage title="如何给猫咪刷牙">
                <PW>
                    <TitleOne num="01" title="牙周病" />
                    <ZW>牙周病是最常见的口腔疾病，3岁以上猫咪80%会发生牙周病。</ZW>
                    <ZW>猫咪是肉食动物，每天吃大量的肉，会导致牙齿上有很多食物残渣，时间长了形成牙斑菌，继而形成牙石，初期会造成牙龈炎和口腔溃疡，最后恶化为牙周病，<strong>如果不进行控制，会无法治愈。</strong></ZW>
                    <TitleTwo num="1" title="症状" />
                    <UL>
                        <li>牙龈牙齿交接处的轻微红线</li>
                        <li>牙龈红肿发炎，萎缩</li>
                        <li>严重时牙龈组织破块，齿根外露，甚至牙齿掉落</li>
                        <li>进食困难流口水，口腔异味严重</li>
                    </UL>
                    <Img title="牙龈发炎" url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E5%B8%B8%E8%A7%81%E5%8F%A3%E8%85%94%E7%96%BE%E7%97%85-01.jpeg"/>
                    <TitleTwo num="2" title="治疗" />
                    <ZW>轻微的牙结石和牙龈炎的猫咪可以每日刷牙观察，也可以考虑麻醉镇静洗牙，将附着的牙结石洗净，之后定期每日刷牙。</ZW>
                    <TitleTwo num="3" title="预防" />
                    <ZW><strong>刷牙是目前最有效的办法，其他方法都不能代替。</strong>翻开猫咪的嘴，如果看到黄色齿垢和牙石，牙龈发红的话就应该清洁了。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="慢性口炎" />
                    <ZW>这是一种定义不明、病因不明的常见疾病。目前认为是猫杯状病毒的慢性感染所造成的，而且与细胞介导免疫反应有关。</ZW>
                    <ZW><strong>如果猫咪在幼猫时期就出现了口臭牙龈红肿，可能是免疫缺陷或者病毒感染口腔炎的前兆，考虑做CRP检测是否病毒感染。</strong></ZW>
                    <TitleTwo num="1" title="症状" />
                    <UL>
                        <li>齿龈会呈现严重增生肿大，越往上下颚交界处越严重，严重时回延伸至咽喉部</li>
                        <li>严重疼痛、口臭、唇边毛会粘附深褐色分泌物</li>
                        <li>食欲不振</li>
                    </UL>
                    <TitleTwo num="2" title="治疗" />
                    <ZW>只有全口臼齿拔除才有痊愈的机会，有经验且牙科设备齐全的兽医院有八成以上的成功率，大多于术后2~3个月得到缓解，有些甚至会长达一年。</ZW>
                    <TitleTwo num="3" title="预防" />
                    <ZW>现在学界普遍认为猫慢性口炎是由杯状病毒所引发，所以理论上应该是会传染，但经验的观察上，似乎也必须体质上的配合，所以第一是杯状病毒病原，第二是个体对于杯状病毒引发慢性口炎的感受性，所以在预防上应着重于猫杯状病毒的防疫，一旦成为猫杯状病毒带原者或慢性感染时，就很难去预防猫慢性口炎的发生了。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="猫齿骨吸收症"/>
                    <ZW>猫齿骨吸收症(FORLs)，是猫最常见的齿科疾病，占所有齿科就诊病例75%，临床上发现病灶的时候大多为时已晚，都已经是末期病灶了。FORLs 的病因目前尚未明了，许多研究都持续在努力中。</ZW>
                    <TitleTwo num="1" title="症状" />
                    <UL>
                        <li>初期与牙周炎和口炎相似</li>
                        <li>病灶往牙根尖端蔓延时，就会呈现牙根构造的明显缺损破坏，但仍不会产生疼痛</li>
                        <li>病灶往牙冠蔓延时，使得齿骨质暴露，呈现明显疼痛，周围的牙周组织呈现红肿发炎</li>
                    </UL>
                    <TitleTwo num="2" title="治疗" />
                    <ZW>根据病情有不同的治疗方案，可能需要定期x光检查，拔牙甚至切除牙冠。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:23-30.</p>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:158-161.</p>
                        <p class="wx">[2]糯米团. 猫的口臭问题怎么解决?[J]. 宠物世界(猫迷), 2018, 03</p>
                    </WX>
                </PW>

            </Passage>
        );
    }
}

export default KouQiangJiBing;