import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
	return (
		<>
			<div className='container contact' id='contact'>
				<h1>CONTACT ME</h1>
				<div className='full-width-wrapper'>
					<div
						className='contact-icon'
						data-aos='zoom-in-up'
						data-aos-duration='1000'
					>
						<a
							href='https://www.facebook.com/facebook.com.stev'
							target='_blank'
							className='items'
						>
							<CiFacebook className='icons' />
						</a>
						<a
							href='https://www.linkedin.com/in/stephen-otieno-847264252/'
							target='_blank'
							className='items'
						>
							<CiLinkedin className='icons' />
						</a>
						<a
							href='https://x.com/Stephen062706'
							target='_blank'
							className='items'
						>
							<FaSquareXTwitter className='icons' />
						</a>
						<a
							href='https://github.com/stephenOwino'
							target='_blank'
							className='items'
						>
							<FaGithubSquare className='icons' />
						</a>
						<a
							href='mailto:stephenowin233@gmail.com'
							target='_blank'
							className='items'
						>
							<SiGmail className='icons' />
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
