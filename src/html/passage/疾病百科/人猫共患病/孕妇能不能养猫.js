import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class YunFu extends Component {
    render() {
        return (
            <Passage title="孕妇能不能养猫">
                <PW>
                    <TitleOne num="01" title="孕妇是否能养猫"/>
                    <ZW>关于孕妇是否能养猫主要点在于担心孕妇感染弓形虫，从而导致流产、早产及胎儿畸形。</ZW>
                    <ZW>其实弓形虫的传播途径不仅仅是猫，具体传播途径为：</ZW>
                    <UL>
                        <li>食用生肉或煮得不够熟的肉类</li>
                        <li>运输或接触生肉或生的内脏后，没有清洁双手便放到嘴里</li>
                        <li>接触含有孵化卵囊的猫粪便或接触与此种猫粪便接触的物体</li>
                    </UL>
                    <ZW><strong>因此感染弓形虫的风险不在于猫，而在于个人卫生习惯</strong>，如果能做好以下几点，怀孕期间养猫也没有问题：</ZW>
                    <UL>
                        <li>提前给猫咪打疫苗。</li>
                        <li>让家人帮忙处理猫砂、打扫猫窝。</li>
                        <li>不要让自家的猫跟野猫接触，最好的办法就是让猫呆在室内，不要出门。</li>
                        <li>不管是谁，处理完猫的粪便、清理猫窝之后都要用肥皂或洗手液把手洗干净。</li>
                        <li>跟猫玩耍之后，记得把猫的玩具收拾好，放到专门的地方，然后洗手。</li>
                        <li>将猫砂放在远离客厅、餐厅和卧室的地方。</li>
                        <li>不要给宠物猫喂食生肉生水。</li>
                    </UL>
                    <ZW>但如果不能保持良好的卫生习惯，建议怀孕期间还是和猫咪隔离更为保险。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default YunFu;