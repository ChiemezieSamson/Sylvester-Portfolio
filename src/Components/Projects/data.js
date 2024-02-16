// import projectImage from "./../../asset/image/projects/food_vision.jpg";
import dogImage from "./../../asset/image/projects/dog_breed.jpg";
import flowerImage from "./../../asset/image/projects/flower.jpg";
import service_callImage from "./../../asset/image/projects/service_call.png";
import weatherImage from "./../../asset/image/projects/weather_api.png";
import prosperImage from "./../../asset/image/projects/prosper_img.jpg";
import dc_internetImage from "./../../asset/image/projects/dc_internet.jpg";
import dicey_htfImage from "./../../asset/image/projects/dicey_htf.png";
import iplImage from "./../../asset/image/projects/IPl.png";
import google_playImage from "./../../asset/image/projects/google_play_store.jpg";
import iconImage1 from "./../../asset/image/excel.png";
import iconImage2 from "./../../asset/image/powerbi.png";
import iconImage3 from "./../../asset/image/sql.png";

export const MyProjects = [
	{
		id: 0,
		title: {
			En: "Building Robust Data Pipelines for Washington DC Service Calls Request: End to End Data Engineering Project",
			Zh: "为华盛顿特区服务呼叫请求建立强大的数据管道： 端到端数据工程项目",
		},
		project_image: service_callImage,
		icon_image: iconImage1,
		text: {
			En: "The objective of this project was to design an end-to-end data engineering pipeline on Service calls request data using Python, Pandas, AWS storage services and finally create an analytics dashboard using Tableau 📈.",
			Zh: "本项目的目标是使用 Python、Pandas 和 AWS 存储服务设计一个端到端数据工程管道，处理服务调用请求数据，最后使用 Tableau 📈 创建一个分析仪表板。",
		},
		url: "https://github.com/Sylvesterchuks/Data_Engineering_Journey/tree/main/Day_30",
		type: "ETL",
	},
	{
		id: 1,
		title: {
			En: "Prosper Loan Defaulter P2P Lending 🏦",
			Zh: "Prosper Loan Defaulter P2P Lending 🏦",
		},
		project_image: prosperImage,
		icon_image: iconImage2,
		text: {
			En: "Ultimately, the Prosper Loan Defaulter Prediction project aims to assist Prosper in making data-driven decisions to minimize loan defaults, reduce financial risks, attract more investors, and maintain a healthy lending marketplace.",
			Zh: "最终，Prosper 贷款违约预测项目旨在协助 Prosper 做出数据驱动型决策，以最大限度地减少贷款违约、降低金融风险、吸引更多投资者并维护健康的借贷市场。",
		},
		url: "https://github.com/Sylvesterchuks/Prosper-Loan-P2P-Lending-Team-Report?tab=readme-ov-file#prosper-loan-defaulter-p2p-lending-",
		type: "ML/DL",
	},
	{
		id: 2,
		title: {
			En: "Working with APIs: ETL Automation of World's Daily Weather Data Report Info",
			Zh: "使用应用程序接口（API）： 世界每日天气数据的 ETL 自动化 报告信息",
		},
		project_image: weatherImage,
		icon_image: iconImage2,
		text: {
			En: "The objective of this project was to build an ETL Automation of World's Daily Weather Data Report using a chosen country, city or location. Various scripts were written to perform one o the various tasks in this project. Finally, a bash script was created to run every process on the Terminal using one line of code.",
			Zh: "本项目的目标是使用选定的国家、城市或地点建立世界每日天气数据报告的 ETL 自动化。我们编写了各种脚本来执行本项目中的各项任务之一。最后，创建了一个 bash 脚本，只需一行代码即可在终端上运行每个进程。",
		},
		url: "https://github.com/Sylvesterchuks/Data_Engineering_Journey/tree/main/Day_31_37",
		type: "ETL",
	},
	{
		id: 3,
		title: {
			En: "IPL SQL Data Analysis",
			Zh: "IPL SQL Data Analysis",
		},
		project_image: iplImage,
		icon_image: iconImage3,
		text: {
			En: "As a data analysis intern you are given two datasets related to IPL (Indian Premier League) cricket matches. One dataset contains ball-by-ball data and the other contains match-wise data. You are required to import the datasets into an SQL database and perform the tasks given in this assignment to find important insights from this dataset.",
			Zh: "作为一名数据分析实习生，给你两个与 IPL（印度板球超级联赛）相关的数据集。一个数据集包含逐球数据，另一个数据集包含比赛数据。您需要将数据集导入到 SQL 数据库中，并执行本作业中给出的任务，以便从数据集中找到重要的见解。",
		},
		url: "https://github.com/Sylvesterchuks/Start_Tech_Academy_Intern/tree/main/SQL",
		type: "Data Analysis",
	},
	{
		id: 4,
		title: {
			En: "How Much of the World Has Access to the Internet",
			Zh: "世界上有多少人可以使用互联网",
		},
		project_image: dc_internetImage,
		icon_image: iconImage2,
		text: {
			En: "In this project, we were given access to the internet usage dataset of all countries in the world, and was required to analyzed the world's internet coverage, penetration rate and trends",
			Zh: "在这个项目中，我们获得了全球所有国家的互联网使用数据集，并被要求分析全球互联网的覆盖率、渗透率和发展趋势。",
		},
		url: "https://app.datacamp.com/workspace/w/badf81d1-369f-4de7-9fc7-3558563bc237/edit",
		type: "Data Analysis",
	},
	{
		id: 5,
		title: {
			En: "Playhouse Communication: Hack the Feed",
			Zh: "Playhouse Communication: Hack the Feed",
		},
		project_image: dicey_htfImage,
		icon_image: iconImage2,
		text: {
			En: "This project was on the analysis of Stanbic IBTC social media accounts. We were required to draw out patterns from the media accounts and make recommendations on the best way to improve impressions and reach. Python library stack was used for loading,  cleaning and analysis of the datasets. I cleaned and transformed the columns, dealt with missing values and inconsistent features. Merged the datasets into one big data frame, did additional cleaning and answered some business questions.",
			Zh: "该项目是关于 Stanbic IBTC 社交媒体账户的分析。我们需要从媒体账户中找出模式，并就提高印象和覆盖率的最佳方法提出建议。数据集的加载、清理和分析使用了 Python 库栈。我清理并转换了列，处理了缺失值和不一致的特征。将数据集合并为一个大数据框架，进行额外的清理并回答一些业务问题。",
		},
		url: "https://portfolio.diceytech.co.uk/project/1696830417105x690181563066089500",
		type: "Data Analysis",
	},
	{
		id: 6,
		title: {
			En: "Dog Breed Classification",
			Zh: "狗类分类",
		},
		project_image: dogImage,
		icon_image: iconImage3,
		text: {
			En: "A subset of 10 harder to classify classes from Imagenet (all dog breeds): Australian terrier, Border terrier, Samoyed, beagle, Shih-Tzu, English foxhound, Rhodesian ridgeback, dingo, golden retriever, Old English sheepdog.",
			Zh: "来自 Imagenet 的 10 个较难分类的类别子集（所有犬种）： 澳大利亚梗、边境梗、萨摩耶犬、小猎犬、西施犬、英国猎狐犬、罗得西亚脊背犬、鼎犬、金毛寻回猎犬、英国牧羊犬。",
		},
		url: "https://github.com/Sylvesterchuks/dogbreed_app",
		type: "ML/DL",
	},
	{
		id: 7,
		title: {
			En: "United Kingdom 102 Flower Classification",
			Zh: "英国100花分类",
		},
		project_image: flowerImage,
		icon_image: iconImage2,
		text: {
			En: "We downloaded the 102 flower category dataset, consisting of 102 flower categories. The flower dataset chosen are commonly found in the United Kingdom. Each class consists of between 40 and 258 images. Build a model to classify these flower images.",
			Zh: "我们下载了 102 个花卉类别数据集，其中包括 102 个花卉类别。所选的花卉数据集在英国很常见。每个类别由 40 到 258 张图片组成。建立一个模型来对这些花卉图像进行分类。",
		},
		url: "https://github.com/Sylvesterchuks/flower_classification",
		type: "ML/DL",
	},
	{
		id: 8,
		title: {
			En: "The Android App Market on Google Play",
			Zh: "The Android App Market on Google Play",
		},
		project_image: google_playImage,
		icon_image: iconImage2,
		text: {
			En: "Mobile apps are everywhere. They are easy to create and can be lucrative. Because of these two factors, more and more apps are being developed. In this notebook, we will do a comprehensive analysis of the Android app market by comparing over ten thousand apps in Google Play across different categories. We'll look for insights in the data to devise strategies to drive growth and retention.",
			Zh: "移动应用程序无处不在。它们易于创建，而且利润丰厚。正因为这两点，越来越多的应用程序被开发出来。在本笔记本中，我们将通过比较 Google Play 中不同类别的一万多个应用程序，对安卓应用程序市场进行全面分析。我们将从数据中寻找启示，以制定推动增长和留住用户的策略。",
		},
		url: "https://app.datacamp.com/workspace/w/87f238bb-efb6-4b56-b0ab-4c32bccc9bf5/edit",
		type: "Data Analysis",
	},
];

export const projectButton = ["all", "ETL", "Data Analysis", "ML/DL"];
