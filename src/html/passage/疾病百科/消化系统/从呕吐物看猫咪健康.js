import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';


class OuTuWu extends Component {
    render() {
        return (
            <Passage title="从呕吐物看猫咪健康">
                <PW>
                    <TitleOne num="01" title="呕吐可能不是病" />
                    <ZW>大部分猫咪都会遇到呕吐的情况，只要没有其他不良反应，也不需要大惊小怪。</ZW>
                    <ZW>猫咪的呕吐分为生理性和病理性两种，对猫来说，由于呕吐机制特别发达，所以有时呕吐变成了它们日常保护自己的方法之一。</ZW>
                    <ZW>所以要认识到呕吐不一定是病，而疾病性的呕吐则需要谨慎对待。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="病症的判断与治疗" />
                    <ZW>临床上必须先区别呕吐与食物逆流，食物逆流可能的疾病包括食道炎、食道狭窄、食道肿瘤等。</ZW>
                    <section class="one-table-wrapper">
                        <section class="one-table-head">
                            <section class="one-table-left"></section>
                            <section class="one-table-content">呕吐</section>
                            <section class="one-table-content">食物逆流</section>
                        </section>
                        <section class="one-table-body2">
                            <section class="one-table-left">特征</section>
                            <section class="one-table-content">猫咪的腹部会有急速且大动作的收缩</section>
                            <section class="one-table-content">腹部不会收缩</section>
                        </section>
                        <section class="one-table-body2">
                            <section class="one-table-left">时间</section>
                            <section class="one-table-content">随时可能</section>
                            <section class="one-table-content">进食数秒至2分钟内</section>
                        </section>
                    </section>
                    
                    <ZW>区分清楚两者的区别后，我们再通过观察猫咪的呕吐物，判断猫咪的病情。</ZW>

                    <section class="one-table-wrapper">
                        <section class="two-table-head">
                            <section class="two-table-body" >
                                <section class="two-table-left">呕吐物</section>
                                <section class="two-table-right">胃液混着毛球，可能是一小撮毛或是结实的毛团</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">原因</section>
                                <section class="two-table-right">毛发积聚在食道或肠胃中</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">解决办法</section>
                                <section class="two-table-right">经常替猫咪梳毛，喂猫草（小麦草）</section>
                            </section>
                        </section>
                    </section>
                    <section class="one-table-wrapper">
                        <section class="two-table-head">
                            <section class="two-table-body">
                                <section class="two-table-left">呕吐物</section>
                                <section class="two-table-right">猫粮清晰可见，呕吐物呈长条状</section>
                            </section>
                            <section class="two-table-body">
                                <section class="two-table-left">原因</section>
                                <section class="two-table-right">可能是先天或后天食道巨大症，也可能食物太硬难以消化</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">解决办法</section>
                                <section class="two-table-right">将干粮浸湿或改罐头，如果出现一天数次，需要看医生。</section>
                            </section>
                        </section>
                    </section>
                    <section class="one-table-wrapper">
                        <section class="two-table-head">
                            <section class="two-table-body">
                                <section class="two-table-left">呕吐物</section>
                                <section class="two-table-right">用餐不久后就把食物吐出，食物只消化了一半，部分仍清晰可见</section>
                            </section>
                            <section class="two-table-body">
                                <section class="two-table-left">原因</section>
                                <section class="two-table-right">吃的太多、太急，令胃部负担过重以致消化不良，或猫粮成分敏感</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">解决办法</section>
                                <section class="two-table-right">改用小颗粒或不同成分猫粮，如果呕吐严重或次数频繁，则需要看医生</section>
                            </section>
                        </section>
                    </section>
                    <section class="one-table-wrapper">
                        <section class="two-table-head">
                            <section class="two-table-body">
                                <section class="two-table-left">呕吐物</section>
                                <section class="two-table-right">附带白色半透明线状寄生虫</section>
                            </section>
                            <section class="two-table-body">
                                <section class="two-table-left">原因</section>
                                <section class="two-table-right">寄生虫的幼虫和幼卵潜伏在消化肠道中</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">解决办法</section>
                                <section class="two-table-right">呕吐物中有寄生虫，说明寄生虫数量惊人，需要马上看医生进行驱虫</section>
                            </section>
                        </section>
                    </section>
                    <section class="one-table-wrapper">
                        <section class="two-table-head">
                            <section class="two-table-body">
                                <section class="two-table-left">呕吐物</section>
                                <section class="two-table-right">呕吐物带淡红或鲜红血液</section>
                            </section>
                            <section class="two-table-body">
                                <section class="two-table-left">原因</section>
                                <section class="two-table-right">胃炎，或肠胃粘膜被吃下的异物割伤</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">解决办法</section>
                                <section class="two-table-right">尽快看医生，可能需要吃药治疗或手术将异物取出</section>
                            </section>
                        </section>
                    </section>
                    <section class="one-table-wrapper">
                        <section class="two-table-head">
                            <section class="two-table-body">
                                <section class="two-table-left">呕吐物</section>
                                <section class="two-table-right">呕吐物中发现塑料、针线或其他异物</section>
                            </section>
                            <section class="two-table-body">
                                <section class="two-table-left">原因</section>
                                <section class="two-table-right">不小心误食</section>
                            </section>
                            <section class="two-table-body" >
                                <section class="two-table-left">解决办法</section>
                                <section class="two-table-right">有些异物不能被消化，也不易排出体外，有些异物可能会吸收猫咪的胃液而膨胀，形成阻塞。如果猫咪做呕吐状，却吐不出任何东西，这可能代表异物已经阻塞消化道，非常危险，即使吐出来了，也不能确保安全，可能还有更大的异物没有吐出。如果猫咪持续呕吐频繁或便秘，就要马上就医。</section>
                            </section>
                        </section>
                    </section>

                    
                </PW>
                <PW>
                    <TitleOne num="03" title="是否需要看医生"/>
                    <ZW>总的来说，如果猫咪吐完之后精神状态良好，那么基本上不用太担心，可以先在家观察调理，或电话咨询医生，记录好猫咪呕吐的日期、次数和呕吐物详情，如果情况恶化可以作为医生参考的依据。</ZW>
                    <ZW>但如果出现以下状况则需要及时送医。</ZW>
                    <UL>
                        <li>精神不振，行动迟钝</li>
			  			<li>呕吐物中伴有血丝</li>
			  			<li>一天呕吐数次</li>
			  			<li>被接触时有疼痛感</li>
			  			<li>发出异常叫声</li>
			  			<li>喝水频率和排尿次数较平常大幅增加</li>
			  			<li>存在特别反常的行为</li>
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

export default OuTuWu;