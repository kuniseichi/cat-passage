import React, { Component } from 'react';
import TitleOne from '../../comp/titleOne';
import TitleTwo from '../../comp/titleTwo';
import ZW from '../../comp/zw';
import PW from '../../comp/passageWrapper';
import Passage from '../../comp/passage';
import WX from '../../comp/wx';
import Quote from '../../comp/quote';
import Img from '../../comp/img';
import Progress from '../../comp/progress';

class PinZhong extends Component {
    render() {
        return (
            <Passage title="猫的起源">
                <PW>
                    <TitleOne num="01" title="美国短毛猫" />
                    <ZW>美国短毛猫，身体健壮，活泼好动，易于打理，是非常好养的猫。</ZW>
                    <Img url="http://qny.kuniseichi.cn/american-shorthair-detail.jpg" title="美短猫"/>
                    <Progress title="健康指数" num="4"/>
                    <Progress title="活跃程度" num="3"/>
                    <Progress title="友好程度" num="4"/>
                    <Progress title="易于打理" num="4"/>
                    <Progress title="粘人程度" num="3"/>
                    <Progress title="智商指数" num="4"/>
                    <TitleTwo num="02" title="美国卷耳猫" />
                    <ZW>美国短毛猫，身体健壮，活泼好动，易于打理，是非常好养的猫。</ZW>
                    <Img url="http://qny.kuniseichi.cn/american-shorthair-detail.jpg" title="美短猫"/>
                    <Progress title="健康" num="5"/>
                    <Progress title="活跃程度" num="3"/>
                    <Progress title="友好程度" num="4"/>
                    <Progress title="清理难度" num="1"/>
                    <Progress title="粘人" num="3"/>
                    <Progress title="智商" num="3"/>
                </PW>
            </Passage>
        );
    }
}

export default PinZhong;