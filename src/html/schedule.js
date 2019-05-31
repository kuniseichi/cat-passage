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

class Schedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCatelog: true,
            showIndex: false,
            passageIndex: [],
        }
    }

    changeShowCatelog = (e) => {
        this.setState({
            showCatelog:e
        })
    }

    changeShowIndex = (e) => {
        this.setState({
            showIndex:e
        })
    }

    onGetPassageIndex = (e) => {
        
        this.setState({
            passageIndex:e
        })
        console.log(this.state.passageIndex)
    }

    render() {


        return (
            <Passage title="备忘录">
                <PW>
                    <section className="schedule">
                        <section className="title">
                            <section className="content">今日事项</section>
                            <section className="set">设置</section>
                        </section>
                        <section>
                            
                        </section>
                    </section>
                </PW>
            </Passage>
        );
    }
}



export default Schedule;