import React, { Component } from 'react';
import Passage from './comp/passage';
import PW from './comp/passageWrapper';
import Line from './comp/line';
import Search from './comp/search';

/**
 *  症状 -> 可能疾病
    病的介绍 -> 症状 -> 治疗 -> 预防
    病毒 -> 导致病和相应症状 -> 预防
 * 
 * 
 */
import QRCode from './comp/QRCode';

import Beizhuang from '../html/passage/疾病百科/重要传染病/猫杯状病毒';
import QiYuan from '../html/passage/猫咪科普/猫的起源';
import KouQiangJiBing from '../html/passage/疾病百科/消化系统/猫咪常见口腔疾病';
import OuTuWu from '../html/passage/疾病百科/消化系统/从呕吐物看猫咪健康';
import MaoXuan from '../html/passage/疾病百科/皮肤疾病/猫癣';
import DaPenTi from '../html/passage/疾病百科/呼吸系统/猫咪打喷嚏是感冒了吗？';
import PaoZhen from '../html/passage/疾病百科/重要传染病/猫疱疹病毒';
import GanMao from '../html/passage/疾病百科/呼吸系统/你的猫咪感冒了吗？';
import ErMan from './passage/疾病百科/耳科疾病/耳螨';
import MaoChuanFu from '../html/passage/疾病百科/重要传染病/猫传腹';
import YanKeJiBing from './passage/疾病百科/眼科疾病/猫咪常见眼科疾病';
import MaoWen from './passage/疾病百科/重要传染病/猫瘟';
import HuiChongBing from './passage/疾病百科/人猫共患病/蛔虫病';
import GouChongBing from './passage/疾病百科/人猫共患病/钩虫病';
import GongXingChong from './passage/疾病百科/人猫共患病/弓形虫';
import ShaMenShiJun from './passage/疾病百科/人猫共患病/沙门氏菌';
import KuangQuanBing from './passage/疾病百科/人猫共患病/狂犬病';
import MaoZhuaBing from './passage/疾病百科/人猫共患病/猫抓病';
import BaSiDe from './passage/疾病百科/人猫共患病/巴斯德杆菌病';
import MaoXuan2 from './passage/疾病百科/人猫共患病/猫癣';
import TiaoZao from './passage/疾病百科/人猫共患病/跳蚤过敏性皮炎';
import TaoChongBing from './passage/疾病百科/人猫共患病/绦虫病';
import YunFu from './passage/疾病百科/人猫共患病/孕妇能不能养猫';
import GongHuanBing from './passage/疾病百科/人猫共患病/如何预防人猫共患病';
import XiaMiNiao from './passage/疾病百科/泌尿系统/下泌尿道疾病';
import KeSou from './passage/疾病百科/呼吸系统/咳嗽';
import MaoXiaoChuan from './passage/疾病百科/呼吸系统/猫哮喘';

import RuHeShuaYa from '../html/passage/日常养护/如何给猫咪刷牙';
import YiMiaoJieZhong from '../html/passage/日常养护/疫苗接种的建议';
import MaoShi from '../html/passage/疾病百科/消化系统/看猫屎知健康';
import XiErDuo from '../html/passage/日常养护/如何给猫洗耳朵';
import PinZhong from './passage/猫咪科普/想好要养什么品种的猫咪了吗？';



// *第一次养猫需要准备什么
// *新手适合养什么猫
// *养猫后定期要做的事 

// 猫咪作息表
// 猫的生理结构 各项指标参数
// 对猫有毒的东西
// 捡到小猫怎么处理
// 训练你的猫
// *猫咪身体检查

// 健康饮食
// *自制猫饭
// 猫粮
// 生骨肉

// *最可爱的猫咪品种
// 品种翻译
// 比赛
// 买猫证书。。

// ---------------------

// 参考别的公众号内容
// youtube高赞视频

// 绝育
// 发情
// 交配
// 接生
// 小猫护理
// 繁殖障碍
// 难产
// 子宫蓄脓
// 基因型
// 你的猫会生出什么颜色的后代



class Article extends Component {

    render() {
        return (
            <section>
                <HuiChongBing/>
                <QRCode/>
            </section>
        );
    }
}



export default Article;