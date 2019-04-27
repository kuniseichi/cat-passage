import React, { Component } from 'react';
import './App.css';
import QRCode from './html/passage/comp/QRCode';
import "./css/font.css";
import "./css/img.css";
import "./css/layout.css";
import "./css/module.css";
import "./css/iconfont.css";

import Beizhuang from './html/passage/疾病百科/重要传染病/猫杯状病毒';
import YiMiaoJieZhong from './html/passage日常养护/疫苗接种的建议';
import QiYuan from './html/passage猫咪科普/猫的起源';
import RuHeShuaYa from './html/passage日常养护/如何给猫咪刷牙';
import KouQiangJiBing from './html/passage疾病百科/消化系统/口腔/猫咪常见口腔疾病';
import OuTuWu from './html/passage疾病百科/消化系统/呕吐/从呕吐物看猫咪健康';
import MaoXuan from './html/passage疾病百科/皮肤疾病/猫癣';
import MaoShi from './html/passage疾病百科/消化系统/拉稀/看猫屎知健康';
import Catalog from './html/catalog';

// 打喷嚏
// 眼睛疾病
// 接生
// 耳螨
// 健康饮食
// 传腹
// 猫瘟
// 人猫共患病
// 发情
// 第一次养猫需要准备什么
// 猫鼻支
// 训练你的猫
// 猫咪行为
// 猫咪身体检查

class App extends Component {
    render() {
		return (
				<section>
					<OuTuWu/>
					<QRCode/>
				</section>
			);
    }
}

export default App;
