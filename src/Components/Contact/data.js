import {
	FaGithubSquare,
	FaLinkedin,
	FaPhoneAlt,
	FaRegEnvelope,
} from "react-icons/fa";

export const contactMe = [
	{
		id: 0,
		name: {
			En: "Email",
			Zh: "电子邮件",
		},
		url: "mailto:Syfreeman1992@gmail.com",
		icon: <FaRegEnvelope className="inline-block" />,
	},
	{
		id: 1,
		name: {
			En: "Github",
			Zh: "Github",
		},
		url: "https://github.com/Sylvesterchuks",
		icon: <FaGithubSquare className="inline-block rounded-full" />,
	},
	{
		id: 2,
		name: {
			En: "Linkedin",
			Zh: "Linkedin",
		},
		url: "https://www.linkedin.com/in/okaforsylvesterchukwuka/",
		icon: <FaLinkedin className="inline-block rounded-full" />,
	},
	{
		id: 3,
		name: {
			En: "Call",
			Zh: "电话",
		},
		url: "tel: +86 13104431812",
		icon: <FaPhoneAlt className="inline-block" />,
	},
];
