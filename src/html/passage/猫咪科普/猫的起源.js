import React, { Component } from 'react';
import TitleOne from '../../comp/titleOne';
import TitleTwo from '../../comp/titleTwo';
import ZW from '../../comp/zw';
import PW from '../../comp/passageWrapper';
import Passage from '../../comp/passage';
import WX from '../../comp/wx';
import Quote from '../../comp/quote';
import Img from '../../comp/img';

class QiYuan extends Component {
    render() {
        return (
            <Passage title="猫的起源">
                <PW>
                    <TitleOne num="01" title="喵星人来自哪" />
                    <ZW>猫是世界上最为广泛的宠物之一，饲养率仅次于狗。</ZW>
                    <ZW>猫起源自中东，前30世纪时，埃及农业已十分发达，当时就有养猫保护谷仓、防鼠害，而非纯种家猫就是这些猫的后代。据说埃及由于将猫视为神明看待，杀猫者将被处以死刑。</ZW>
                    <ZW>前9世纪，埃及人将驯化过的猫传入意大利，意大利在4世纪时将短毛猫传入欧洲内陆，培育出纯种的短毛猫，在17世纪传入美洲。长毛猫则是16世纪由土耳其传入欧洲并培育出纯种长毛猫。</ZW>
                    <ZW>因此猫是外来物种，由于猎捕的习惯，威胁着很多原生鸟类、啮齿类的生存。更直接的风险是因狩猎而感染野外病菌的猫，会引入例如狂犬病等进入人类生活圈，因此对饲主知识技术与社会责任要求也较高，先进国家的公卫系统普遍会针对野猫进行抓捕绝育，管理意义即在于此。</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="有关喵星人的记载" />
                    <Quote content="溪柴火软蛮毡暖，我与狸奴不出门" author="陆游"/>
                    
                    <ZW>目前世界上最早对猫类的记载及文献是中国西周时代《诗经&middot;大雅&middot;韩奕》，内容写到：“有熊有罴，有猫有虎。”，此时中国古人已经认识到猫避鼠的作用。</ZW>
                    <ZW>唐朝，宫廷中出现“狸奴”，狸奴即为猫，专门担任各大殿的防鼠工作。李商隐诗：“鸳鸯瓦上狸奴睡”。猫出现在唐代《仕女图》中，成为贵妇的宠物。</ZW>
                    <Img url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E8%B5%B7%E6%BA%90-02.jpg" title="仕女图"/>
                    <ZW>猫演化至今有纯种和杂种之分，纯种猫的祖宗八代都是同一种猫，因为近亲交配的问题而常造成先天性缺陷。至于杂种猫则因为其血统并不纯粹，但适应力极佳而让一般社会大众饲养此种猫。</ZW>
                    <ZW>约两千年前，人类开始把一些小猫特别饲养起来，经过拣选再繁殖，便把纯种的下一代一步一步培育起来，这个过程是经过杂交和挑选的，所以今日能被人抱在怀里的猫，并不是狭义上的“纯种”。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="喵星人的品种"/>
                    <ZW>时至今日，猫咪已经衍生出诸多品种</ZW>
                    <Img url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E8%B5%B7%E6%BA%90-03.jpg" title="布偶猫"/>
                    <Img url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E8%B5%B7%E6%BA%90-04.jpg" title="挪威森林猫"/>
                    <Img url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E8%B5%B7%E6%BA%90-05.jpg" title="孟加拉豹猫"/>
                    <Img url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E8%B5%B7%E6%BA%90-06.jpg" title="英国短毛猫"/>
                    <Img url="http://qny.kuniseichi.cn/%E7%8C%AB%E5%92%AA%E8%B5%B7%E6%BA%90-07.jpg" title="中华狸花猫"/>
                </PW>
            </Passage>
        );
    }
}

export default QiYuan;