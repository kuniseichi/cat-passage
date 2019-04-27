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

class Catalog extends Component {
    render() {
        return (
            <Passage title="文章索引">
                <PW>
                    <Search/>
                    <Line content="猫咪科普">
                        <Line content="猫咪品种" />
                        <Line content="生理结构" />
                        <Line content="生活习性" />
                        <Line content="品相鉴定" >
                            <Line content="英短" />
                            <Line content="美短" />
                        </Line>
                    </Line>
                    <Line content="日常养护">
                        <Line content="必需品" />
                        <Line content="健康检查" />
                        <Line content="定期工作" />
                        <Line content="环境需求" />
                        <Line content="掉毛" />
                        <Line content="刷牙" />
                    </Line>
                    <Line content="猫咪行为学">
                        <Line content="不良行为" />
                        <Line content="调整作息" />
                        <Line content="训练猫咪" />
                    </Line>
                    <Line content="疾病百科">
                        <Line content="人猫共患病" />
                        <Line content="消化系统" />
                        <Line content="呼吸系统" />
                    </Line>
                    <Line content="猫咪营养学">
                        <Line content="营养" />
                        <Line content="猫粮" />
                        <Line content="生骨肉" />
                        <Line content="自制猫饭" />
                    </Line>
                    <Line content="测评">
                    </Line>
                    <Line content="猫咪杂谈">
                    </Line>
                    <Line content="繁育知识">
                    </Line>
                </PW>
            </Passage>
        );
    }
}

export default Catalog;