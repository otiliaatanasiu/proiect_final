import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.style.css";

function Footer() {
	return (
		<div
			className='footer_content'
			style={{
        position:'sticky',
				backgroundColor: "#fa5a62",
				color: "#fff",
				bottom: "0px",
				left: "0px",
				right: "0px",
				padding: "auto",
			}}>
			<Link to='/HomePage' style={{ color: "#fff", marginLeft:'20px', top:'20px' }}>
				Home{" "}
			</Link>
			<br />
			<Link to='/Product' style={{ color: "#fff", marginLeft:'20px' }}>
				Products{" "}
			</Link>

			<p className='text'>Copyright &copy; 2023. All Rights Reserved</p>

			<p className='social-container'>
				<a
					href='https://www.youtube.com/c/jamesqquick'
					className='youtube social'>
					<FontAwesomeIcon icon={faYoutube} size='2x' />
				</a>
				<a
					href='https://www.facebook.com/learnbuildteach/'
					className='facebook social'>
					<FontAwesomeIcon icon={faFacebook} size='2x' />
				</a>
				<a
					href='http://www.instagram.com/larnbuildteach'
					className='instagram social'>
					<FontAwesomeIcon icon={faInstagram} size='2x' />
				</a>
				<a href='https://wwww.twitter.com' className='twitter social'>
					<FontAwesomeIcon icon={faTwitter} size='2x' />
				</a>
			</p>
		</div>
	);
}

export default Footer;
