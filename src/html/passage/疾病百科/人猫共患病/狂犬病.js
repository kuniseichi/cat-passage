import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';

class KuangQuanBing extends Component {
    render() {
        return (
            <Passage title="狂犬病">
                <PW>
                    <TitleOne num="01" title="狂犬病" />
                    <ZW>猫也有可能携带狂犬病毒，并通过抓咬将病毒通过唾液污染伤口，传染给人类。</ZW>
                    <ZW>一旦发病会出现怕水，疼痛，产生幻觉，死亡率100%。无药可治。</ZW>
                    <TitleTwo num="1" title="传播途径" />
                    <ZW>猫、狗等宠物的抓咬。</ZW>
                    <TitleTwo num="2" title="预防" />
                    <ZW>被猫咪抓伤咬伤之后及时伤口清创消毒，如果被流浪猫狗咬后注射狂犬疫苗。</ZW>
                    <ZW>实际上，世界上有个公理，那就是如果你被狗猫咬了，如果这个狗猫10天内没有发病而死，你就根本没有被传染的几率，因为咬你的时候狗或猫并不在狂犬病传染期内（10天观察法仅限于猫狗，不适用于其他动物）。</ZW>    
                    <TitleTwo num="3" title="关于疫苗"/>
                    <ZW>猫咪如果不出门可以不用打狂犬疫苗。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:415-422.</p>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:415-422.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default KuangQuanBing;