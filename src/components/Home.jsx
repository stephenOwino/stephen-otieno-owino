import React, { useEffect, useRef } from "react";
import stephen from "./data/hero.json";
import Typed from "typed.js";

const pdf =
	"https://drive.google.com/file/d/1g2WhyxBPdurwHaDn7SbK1VuRPb8zu10F/view";

const Home = () => {
	const typedRef = useRef(null);
	useEffect(() => {
		const options = {
			strings: [
				"WELCOME TO MY PROFILE",
				"MY NAME IS ",
				"STEPHEN OTIENO OWINO",
				"I'M A SOFTWARE DEVELOPER",
				"ANDROID DEVELOPER (Kotlin)",
			],
			typeSpeed: 50,
			backSpeed: 50,
			loop: true,
		};

		const typed = new Typed(typedRef.current, options);

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<>
			<div className='container home' id='home'>
				<div className='left' data-aos='fade-up-right' data-aos-duration='1000'>
					<h1 ref={typedRef}></h1>

					<a
						href={pdf}
						download='resume.pdf'
						className='btn btn-outline-warning my-3'
					>
						Download Resume
					</a>
				</div>
				<div className='right'>
					<div className='img' data-aos='fade-up-left' data-aos-duration='1000'>
						<img src={`/assets/${stephen.imgSrc}`} alt='hero' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
