import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import QRCode from './html/comp/QRCode';
import "./css/font.css";
import "./css/img.css";
import "./css/layout.css";
import "./css/module.css";
import "./css/iconfont.css";



import Catalog from './html/catalog';
import Schedule from './html/schedule';
import Article from './html/article';


class App extends Component {
    render() {
		return (
			<section className="shell">
				<Router>
					<Route path="/" exact component={Article} />
					<Route path="/catalog/" component={Catalog} />
					<Route path="/schedule/" component={Schedule} />
				</Router>
				
			</section>
		);
    }
}

export default App;
