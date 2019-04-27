import React, { Component } from 'react';
import TitleOne from '../comp/titleOne';
import TitleTwo from '../comp/titleTwo';
import ZW from '../comp/zw';
import PW from '../comp/passageWrapper';
import Passage from '../comp/passage';
import WX from '../comp/wx';
import UL from '../comp/ul';
import Img from '../comp/img';


class RuHeShuaYa extends Component {
    render() {
        return (
            <Passage title="如何给猫咪刷牙">
                <PW>
                    <TitleOne num="01" title="为什么要给猫咪刷牙" />
                    <ZW>牙周病是最常见的口腔疾病，3岁以上猫咪80%会发生牙周病。刷牙可以保障牙齿健康，有效预防牙龈炎，牙周病。</ZW>
                    <ZW>翻开猫咪的嘴，如果看到黄色齿垢和牙石，牙龈发红的话就应该清洁了。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="牙膏和牙刷的选择" />
                    <ZW>牙刷可以选择：</ZW>
                    <UL>
                        <li>猫咪专用牙刷</li>
                        <li>婴儿牙刷</li>
                        <li>纱布</li>
                        <li>指套类牙刷</li>
                        <li>成人牙刷（软毛）减小一点</li>
                    </UL>
                </PW>
                <PW>
                    <TitleOne num="03" title="怎么刷"/>
                    <Img title="猫咪牙齿" url="http://qny.kuniseichi.cn/%E5%A6%82%E4%BD%95%E7%BB%99%E7%8C%AB%E5%88%B7%E7%89%99-01.jpg"/>
                    <ZW>猫咪的牙齿分为犬齿，门齿，前臼齿，臼齿。其中犬齿和门齿一起刷，前臼齿和臼齿一起刷。</ZW>
                    <ZW>首先用包猫大发将猫咪包起来</ZW>
                    <Img title="无助的小猫咪" url="http://qny.kuniseichi.cn/%E5%A6%82%E4%BD%95%E7%BB%99%E7%8C%AB%E5%88%B7%E7%89%99-02.jpg"/>
                    <Img title="给猫咪刷门齿和犬齿" url="http://qny.kuniseichi.cn/%E5%A6%82%E4%BD%95%E7%BB%99%E7%8C%AB%E5%88%B7%E7%89%99-03.gif"/>
                    <Img title="给猫咪刷臼齿" url="http://qny.kuniseichi.cn/%E5%A6%82%E4%BD%95%E7%BB%99%E7%8C%AB%E5%88%B7%E7%89%99-04.gif"/>
                    <ZW>最后刷完牙别忘了给主子奖励哦。</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫咪家庭医学大百科[M]. 2014:158-161.</p>
                        <p class="wx">[2]糯米团. 猫的口臭问题怎么解决?[J]. 宠物世界(猫迷), 2018, 03</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default RuHeShuaYa;