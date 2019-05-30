import React, { Component } from 'react';
import TitleOne from '../../../comp/titleOne';
import TitleTwo from '../../../comp/titleTwo';
import ZW from '../../../comp/zw';
import PW from '../../../comp/passageWrapper';
import Passage from '../../../comp/passage';
import WX from '../../../comp/wx';
import UL from '../../../comp/ul';
import Img from '../../../comp/img';
import Title from '../../../comp/title';


class XiaMiNiao extends Component {
    render() {
        return (
            <Passage title="下泌尿道疾病">
                <PW>
                    <Title title="下泌尿道疾病"/>
                    <ZW>下泌尿道疾病是猫咪常见的疾病之一，如果你的猫咪出现以下症状，可能就是因为下泌尿道疾病：</ZW>
                    <UL>
                        <li>频尿，猫咪会增加去砂盆的次数，而且尿量会变少，或甚至蹲了老半天却不见半滴尿，会发现猫砂盆内的尿液凝结块明显地变得小块且数目增多</li>
                        <li>血尿</li>
                        <li>频频舔证生殖器</li>
                        <li>尿急痛，猫咪会急着冲到猫砂盆中，于排尿的，同时会发出痛苦的嚎叫声。</li>
                        <li>乱尿尿</li>
                        <li>呕吐</li>
                    </UL>
                    <ZW>下泌尿道疾病主要有下面3种：</ZW>
                </PW>
                <PW>
                    <TitleOne num="01" title="尿石症" />
                    <TitleTwo num="1" title="病因"/>
                    <ZW>磷酸铵镁结晶及草酸钙结晶的成分本来就存在尿液中，一旦达到超饱和浓度时，就会让晶体析出。</ZW>
                    <ZW>晶体会对膀胱粘膜造成伤害，使得膀胱壁肿胀发炎及出血，并且随着尿液的排放而进入尿道，造成尿道的肿胀发炎或阻塞。</ZW>
                    <ZW>有些小结石甚至会卡在尿道转弯处，造成不完全性阻塞，使得猫咪还能够继续排尿，但却需要更大的压力才能排放出去，使得膀胱过度地过张而受损。</ZW>
                    <ZW>而尿道也在结石的刺激下产生慢性剌激及狭窄，只要一点点的膀胱剥落组织就足以让尿道完全阻塞。</ZW>
                    <TitleTwo num="2" title="诊断"/>
                    <ZW>很多人认为只要猫咪有排尿困难的症状出现，就确诊尿石症，这是非常不确定或错误的诊断方式</ZW>
                    <ZW>可以通过X光检查，但必须侧躺并且以臀部为焦点</ZW>
                </PW>
                <PW>
                    <TitleOne num="02" title="自发性膀胱炎" />
                    <ZW>这样的膀胱炎就是无特定病因，而且是1-10岁龄猫咪最常见的下泌尿道疾病，高达五成以上的病例是自发性膀胱炎。依靠病史及排除诊断法。</ZW>
                </PW>
                <PW>
                    <TitleOne num="03" title="其他" />
                    <ZW>还有许多的疾病会侵犯下泌尿道，如膀胱过渡上皮细胞癌、细菌性膀胱炎(10岁以上或免疫抑制的猫咪好发)、真菌性膀胱炎、前列腺肿大、创伤等。</ZW>
                </PW>
                <PW>
                    <TitleOne num="04" title="预防" />
                    <ZW>大部分的下泌尿道疾病都能被多喝水所缓解，特别是尿石症及自发性膀胱炎，但干饲料中含有的水分只有9%~12%，而且猫咪舌头的构造是非常不利于喝水的。所以在猫科疾病上，泌尿系统疾病才会占有如此大的比率。</ZW>
                    <ZW>这也是近年来猫科疾病研究上的反思，<strong>认为湿性食物远优于单纯干饲料的喂食方式。</strong></ZW>
                    <ZW>现今大多的专业处方饲料厂商也不再强调酸化尿液及低镁的配方，取而代之的是增加钠的含量，让猫咪感到口渴，借此增加猫的饮水量</ZW>
                    <WX>
                        <p class="wx">[1]林政毅. 猫博士的猫病学[M]. 2015:39-46.159-163</p>
                        <p class="wx">[1]POSTA寵物生活廣場.</p>
                    </WX>
                </PW>
            </Passage>
        );
    }
}

export default XiaMiNiao;