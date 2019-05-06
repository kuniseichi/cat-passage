import React, { Component } from 'react';
import './App.css';
import QRCode from './html/comp/QRCode';
import "./css/font.css";
import "./css/img.css";
import "./css/layout.css";
import "./css/module.css";
import "./css/iconfont.css";



import Catalog from './html/catalog';
import Beizhuang from './html/passage/疾病百科/重要传染病/猫杯状病毒';
import YiMiaoJieZhong from './html/passage/日常养护/疫苗接种的建议';
import QiYuan from './html/passage/猫咪科普/猫的起源';
import RuHeShuaYa from './html/passage/日常养护/如何给猫咪刷牙';
import KouQiangJiBing from './html/passage/疾病百科/消化系统/猫咪常见口腔疾病';
import OuTuWu from './html/passage/疾病百科/消化系统/从呕吐物看猫咪健康';
import MaoXuan from './html/passage/疾病百科/皮肤疾病/猫癣';
import MaoShi from './html/passage/疾病百科/消化系统/看猫屎知健康';
import DaPenTi from './html/passage/疾病百科/呼吸系统/猫咪打喷嚏是感冒了吗？';
import PaoZhen from './html/passage/疾病百科/重要传染病/猫疱疹病毒';
import GanMao from './html/passage/疾病百科/呼吸系统/你的猫咪感冒了吗？';
import ErMan from './html/passage/疾病百科/皮肤疾病/耳螨';
import XiErDuo from './html/passage/日常养护/如何给猫洗耳朵';
import MaoChuanFu from './html/passage/疾病百科/重要传染病/猫传腹';

// 猫瘟

// 眼睛疾病

// 人猫共患病

// 下泌尿道疾病
// 咳嗽
// 哮喘
// 呼吸困难

// 第一次养猫需要准备什么
// 养猫后定期要做的事 
	
// 猫咪作息表
// 猫的生理结构 各项指标参数
// 对猫有毒的东西
// 捡到小猫怎么处理
// 训练你的猫
// 猫咪身体检查

// 健康饮食
// 自制猫饭
// 猫粮
// 生骨肉

// ---------------------

// 10篇吸引眼球的

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

// 猫的品种
// 品种翻译
// 比赛
// 买猫证书。。

// 别的公众号内容

class App extends Component {
    render() {
		return (
				<section className="shell">
					<MaoChuanFu/>
					<QRCode/>
				</section>
			);
    }
}

export default App;
