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

class ZenMeChi extends Component {
    render() {
        return (
            <Passage title="猫咪怎么吃才健康">
                <PW>
                    <TitleOne num="01" title="了解猫咪的营养需要" />
                    <ZW>要清楚猫咪怎么吃最健康，首先需要对猫所需的营养物质有一个充分的了解。</ZW>
                    <TitleTwo num="1" title="猫咪食物的成分"/>
                    <UL>
                        <li>碳水化合物不是必需品</li>
                        <li>动物蛋白</li>
                        <li>脂肪</li>
                        <li>牛磺酸</li>
                        <li>精氨酸</li>
                        <li>动物活性维生素A</li>
                        <li>维生素D</li>
                        <li>维生素B群</li>
                        <li>水-60ml/kg</li>
                    </UL>
                    <TitleTwo num="2" title="猫咪最理想的饮食结构"/>
                    <UL>
                        <li>45%以上的动物蛋白</li>
                        <li>25%-45%的脂肪</li>
                        <li>10%以内的碳水化合物</li>
                        <li>2%以内的膳食纤维</li>
                        <li>63%以上的水(额外比例)</li>
                    </UL>
                </PW>
                <PW>
                    <TitleOne num="02" title="食物的选择" />
                    <TitleTwo num="1" title="罐头比干粮的优势"/>
                    <ZW>吃罐头能提供所需的90%的水分，干粮只能提供4%，猫咪的口渴机制不发达，很难主动去补充剩下所需的水分，从而易引发尿结石等疾病。</ZW>
                    <ZW>干粮含有太多碳水化合物，长期吃干粮易导致下泌尿道症候群。</ZW>
                    <TitleTwo num="2" title="自制猫饭"/>
                    <ZW>自制猫饭需要掌握好营养的搭配，否则可能导致猫咪营养不均衡，导致生病。</ZW>
                    <ZW>具体的猫饭制作可以看</ZW>
                    <TitleTwo num="3" title="生骨肉究竟好不好"/>
                    <ZW>生骨肉（BARF）今年之所以在宠物界成为风潮，主要是由于90年代开始，澳洲兽医lan Billinghurst对于BARF的推广。</ZW>
                    <ZW>他认为这种饮食方法更加天然，可以提升免疫力，清洁牙齿等等，但目前没有足够的证据证明BARF的好处，但也不代表这些好处不成立。</ZW>
                    <ZW><strong>从以往的实验结果来看，生骨肉的表现是优秀的，但也不是所有家庭都适合吃生骨肉。</strong></ZW>
                    <ZW>因为生骨肉可能会带来沙门氏菌，大肠杆菌等问题。</ZW>
                    <TitleTwo num="4" title="不适合吃生骨肉的家庭"/>
                    <UL>
                        <li>有免疫力低下的幼猫、老年猫</li>
                        <li>5岁以下儿童</li>
                        <li>孕妇</li>
                        <li>免疫力低下的人</li>
                    </UL>

                </PW>
                <PW>
                    <TitleOne num="03" title="其他注意事项"/>
                    <TitleTwo num="1" title="换粮须知"/>
                    <ZW>干粮：太频繁转换会令肠胃不适，3-4个月换一次</ZW>
		            <ZW>湿粮：选定3-4种不同口味的湿粮，每天换着吃</ZW>
                    <TitleTwo num="2" title="定时吃饭的重要性"/>
                    <ZW>除了病猫，幼猫和猫妈妈，所有成猫都应该定时进食，长期放量会造成猫咪胃口不振，挑嘴等毛病。平均早晚各一餐，或早上，傍晚，睡前三餐</ZW>
                    <WX>
                        <p class="wx">[1]苏菁菁. 猫咪这样吃最健康[M]. 2013.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default ZenMeChi;