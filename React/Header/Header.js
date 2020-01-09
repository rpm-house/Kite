import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		
	}
   render() {
      return (
	 
	  
         <div className="header">
           
				<img className="img" src="./img/youtube.jpeg"/>
				<div className="title">Services</div>
				<div className="rightSegment">
				<span className="spanTest"> About Us </span>
				<span className="spanTest"> Contact Us</span>
				<span className="spanTest "> Login / Signin </span>
				</div>
         </div>
		 
      );
   }
}
export default Header;
