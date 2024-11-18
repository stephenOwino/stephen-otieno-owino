import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
	return (
		<div className='container skills' id='skills'>
			<h1>SKILLS</h1>
			<div className='items'>
				{skills.map((data) => (
					<div
						key={data.id} // The key is applied to this div, which is the outermost element
						className='item'
						data-aos-duration='100'
					>
						<img src={`/assets/${data.imageSrc}`} alt={data.title} />
						<h3>{data.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
