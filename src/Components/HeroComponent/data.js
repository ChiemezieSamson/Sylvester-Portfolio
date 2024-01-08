import {
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";
import Image from "./../../asset/image/protfolioImage.png";
import Excel from "./../../asset/image/excel.png";
import PowerBI from "./../../asset/image/powerbi.png";
import _SQL from "./../../asset/image/sql.png";

export const personalInfo = {
	id: 0,
	username: {
		En: "Sylvester",
		Zh: "王往",
	},
	Full_name: {
		En: "Sylvester Chukwuka Okafor",
		Zh: "王往",
	},
	welcome: {
		En: "Hello, I am",
		Zh: "你好，我叫",
	},
	profession: {
		En: "Data Analyst",
		Zh: "数据分析师",
	},
	Image: Image,
	socialMedia: [
		{
			id: 0,
			name: "linkedin",
			icon: <FaLinkedin className="icon text-[#0A66C2] rounded-full" />,
			url: "https://www.linkedin.com/feed",
		},
		{
			id: 1,
			name: "gitHub",
			icon: <FaGithubSquare className="icon text-[#000] rounded-full" />,
			color: "#000",
			url: "https://www.linkedin.com/feed",
		},
		{
			id: 2,
			name: "twitter",
			icon: <FaTwitterSquare className="icon text-[#1D9BF0] rounded-full" />,
			url: "https://www.linkedin.com/feed",
		},
		{
			id: 3,
			name: "instagram",
			icon: <FaInstagramSquare className="icon text-[#E4405F] rounded-full" />,
			url: "https://www.linkedin.com/feed",
		},
	],
};

export const HeroProjects = [
	{
		id: 0,
		name: {
			En: "Excel",
			Zh: "",
		},
		project_number: 1,
		image_Icon: Excel,
	},
	{
		id: 1,
		name: {
			En: "PowerBI",
			Zh: "",
		},
		project_number: 3,
		image_Icon: PowerBI,
	},
	{
		id: 2,
		name: {
			En: "SQL",
			Zh: "",
		},
		project_number: 1,
		image_Icon: _SQL,
	},
];
