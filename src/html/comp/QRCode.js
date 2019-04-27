import React, { Component } from 'react';

class QRCode extends Component {

    render() {
        return (
            <section className="qrcode-wrapper">
                <img className="qrcode-img" src="http://qny.kuniseichi.cn/qrcode-bg.jpg" />
            </section>
        );
    }
}

export default QRCode;