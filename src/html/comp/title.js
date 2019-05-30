
import React, { Component } from 'react';

class Title extends Component {

    render() {
        return (
                <section className="title-1">
                        <section data-brushtype="text" className="title-2">{this.props.title}</section>
                        <section className="title-3">
                            <section className="title-4"></section>
                            <section className="title-5"></section>
                        </section>
                </section>
        );
    }
}

export default Title;

// import React, { Component } from 'react';

// class Title extends Component {

//     render() {
//         return (
//             <section className="title-1">
//                 <section className="title-2">
//                     <img className="title-3" src="http://qny.kuniseichi.cn/title.png" />
//                 </section>
//                 <section data-brushtype="text" className="title-5">{this.props.title}</section>
//                 <section className="title-2">
//                     <img className="title-4" src="http://qny.kuniseichi.cn/title.png"/>
//                 </section>
//             </section>
//         );
//     }
// }

// export default Title;