import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
	return (
		<div className='container ex' id='experience'>
			<h1
				style={{
					textAlign: "center",
					marginBottom: "2rem",
					fontSize: "2.5rem",
					fontWeight: "bold",
				}}
			>
				EXPERIENCE
			</h1>
			<div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
				{experience.map((data) => (
					<div
						key={data.id}
						className='experience-card'
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							border: "1px solid #ddd",
							borderRadius: "10px",
							padding: "1.5rem",
							boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
							backgroundColor: "#f9f9f9",
						}}
					>
						<div style={{ flex: "1 1 30%", textAlign: "center" }}>
							<img
								src={
									data.imageSrc.startsWith("http")
										? data.imageSrc
										: `/assets/${data.imageSrc}`
								}
								alt={data.organisation || "Experience"}
								style={{
									width: "100px",
									borderRadius: "50%",
									marginBottom: "1rem",
								}}
							/>
							<h3 style={{ fontSize: "1.2rem", fontWeight: "600" }}>
								{data.organisation}
							</h3>
						</div>
						<div style={{ flex: "1 1 65%", paddingLeft: "1rem" }}>
							<h2
								style={{ fontSize: "1.5rem", fontWeight: "700", color: "#333" }}
							>
								{data.role}
							</h2>
							<p style={{ fontSize: "1rem", color: "#555" }}>
								<span style={{ color: "#27ae60" }}>
									{data.startDate} - {data.endDate}
								</span>{" "}
								| <span style={{ color: "#e67e22" }}>{data.location}</span>
							</p>
							<ol
								style={{
									marginTop: "1rem",
									paddingLeft: "1.5rem",
									color: "#333",
									fontSize: "1rem",
								}}
							>
								{data.experiences.map((exp, index) => (
									<li
										key={`${data.id}-${index}`}
										style={{ marginBottom: "0.5rem" }}
									>
										{exp}
									</li>
								))}
							</ol>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Experience;
