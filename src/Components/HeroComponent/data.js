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
		En: "Data Engineer",
		Zh: "数据分析师",
	},
	Image: Image,
	socialMedia: [
		{
			id: 0,
			name: "linkedin",
			icon: (
				<FaLinkedin className="dark:text-[#0A66C2] group-hover:text-[#0A66C2] rounded-full inline-block transitionEffect" />
			),
			url: "https://www.linkedin.com/feed",
		},
		{
			id: 1,
			name: "gitHub",
			icon: (
				<FaGithubSquare className="dark:text-[#000] group-hover:text-[#000] rounded-full inline-block transitionEffect" />
			),
			color: "#000",
			url: "https://www.linkedin.com/feed",
		},
		{
			id: 2,
			name: "twitter",
			icon: (
				<FaTwitterSquare className="dark:text-[#1D9BF0] group-hover:text-[#1D9BF0] rounded-full inline-block transitionEffect" />
			),
			url: "https://www.linkedin.com/feed",
		},
		{
			id: 3,
			name: "instagram",
			icon: (
				<FaInstagramSquare className="dark:text-[#E4405F] group-hover:text-[#E4405F] rounded-full inline-block transitionEffect" />
			),
			url: "https://www.linkedin.com/feed",
		},
	],
};

export const HeroProjects = [
	{
		id: 0,
		name: {
			En: "Excel",
			Zh: "Excel",
		},
		project_number: 1,
		image_Icon: Excel,
	},
	{
		id: 1,
		name: {
			En: "PowerBI",
			Zh: "PowerBI",
		},
		project_number: 3,
		image_Icon: PowerBI,
	},
	{
		id: 2,
		name: {
			En: "SQL",
			Zh: "SQL",
		},
		project_number: 1,
		image_Icon: _SQL,
	},
];
