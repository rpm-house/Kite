import React, { Component } from 'react';
const footer = {
	// position: 'fixed',
    lineHeight: '1.5',
    
	borderTop:'.0625rem solid #d0d0d0',
    backgroundColor: '#000000'
};
const img = {
	width:'60px',
	height:'60px',
	paddingTop:'9px',
	paddingLeft: '100px',
	display: 'block'
}

const title = {
      
      lineHeight: '1 !important',
      fontSize: '20px',
      fontWeight: '900',
      lineHeight: '21px',
      letterSpacing: '2px',
      color: '#A9A9A9',
      textDecoration: 'none',
      padding: '1rem',
      position: 'relative',
      top: '-1.2rem',
	  display: 'inline-block'
}

const rightSegment = {
	display: 'inline-block',
	float: 'right',
	 top: '-1.2rem',
	 fontSize: '20px',
	  padding: '1rem',
	  paddingRight: '100px',
	  color:'#A9A9A9'
}

const spanTest = {
	paddingLeft: '0.5rem',
	cursor: 'pointer'
}
const list = {
	 color:'#A9A9A9',
	 display: 'inline',
	 paddingLeft: '5rem'
}
const middle = {
	display: 'inline',
	fontSize: '12px',
	 padding: '1rem',
	 position: 'relative',
	 opacity: '.8',
	 marginLeft: '16px',
	  color:'#A9A9A9'
}
class Footer extends Component {
   render() {
      return (
	 
	  
         <div style={footer}>
		 <div>
            <ul style={list}>
				<li style={list}>About Us </li>
				<li style={list}> Contact Us </li>
				<li style={list}> Terms & Conditions </li>
				<li style={list}> Privacy Policy </li>
			</ul>
		</div>	
			<img style = {img} src="./img/youtube.jpeg"/>	
				<div style = {title}>Services</div>
				<div style = {middle}> © 2019-20 Prani Technologies India Pvt. Ltd.</div>
				<div style = {rightSegment}>
				<span style = {spanTest}> About Us </span>
				<span style = { spanTest }> Contact Us</span>
				<span style = { spanTest }> Login / Signin </span>
				</div>
         </div>
		 
      );
   }
}
export default Footer;
