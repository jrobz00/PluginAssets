import Modal from "react-modal";
import ModeratorItem from "../../Common/ModeratorItem/ModeratorItem";
import HomeCarousel from "./Carousel/HomeCarousel";
import TagList from "./TagList/TagList";
import TopSection from "./TopSection/TopSection";
import { Link } from "react-router-dom";
import ChatBox from "../Chatbox/ChatBox";

Modal.setAppElement('#root'); // For accessibility, point to the main app div

const Home = () => {

	const moderatorItems = [
		{
			bgColor: "white",
			basicContent: true,
			title: "React Router",
			content: "A powerful library for seamless client-side navigation in React applications.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Tailwind CSS",
			content: "A utility-first CSS framework that helps you create responsive, modern UIs quickly.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Framer Motion",
			content: "A popular library for creating complex animations in React with easy-to-use APIs.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "DaisyUI",
			content: "A Tailwind CSS component library that adds beautifully designed UI components.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Formik",
			content: "A robust library to handle forms and validations in React, simplifying complex forms.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Swiper",
			content: "A mobile-friendly library for smooth, responsive touch sliders and carousels.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "React Query",
			content: "A data-fetching library that provides powerful caching and synchronization in React.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Heroicons",
			content: "A collection of beautiful SVG icons available in outline and solid styles.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Lottie Animations",
			content: "A library that makes it easy to add stunning animations to your projects with JSON files.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "React Hook Form",
			content: "A flexible, lightweight form library for handling forms and validations in React.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "React Helmet",
			content: "A component for managing meta tags, SEO, and document head properties in React apps.",
		},
		{
			bgColor: "white",
			basicContent: true,
			title: "Ant Design",
			content: "A comprehensive UI library with a wide range of customizable components for React.",
		},
	];

	return (
		<div className="min-h-screen bg-[#EBF4FF] pb-12 relative">
			<TopSection />

			<div className="flex flex-col lg:flex-row gap-8 px-4 md:px-8 lg:px-16 mt-10">
				{/* Left Sidebar */}
				<div className="flex flex-col gap-8 lg:w-[350px]">
					<TagList />
					<div className="hidden lg:flex items-center justify-center w-full h-[700px] border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-[#EBF4FF]">
						AD
					</div>
				</div>

				{/* Main Content */}
				<div className="flex-1">
					{/* Chat Box */}
					<div className="flex items-center justify-center w-full md:w-2/3 lg:w-full mx-auto rounded-lg bg-[#EBF4FF] shadow-md p-4">
						<ChatBox className="h-full w-full max-w-full overflow-hidden rounded-md" />
					</div>

					{/* Search and Carousel */}
					<div className="flex flex-col gap-5 my-5 px-2 md:px-0">
						<div className="relative w-full">
							<input
								type="text"
								className="input input-bordered w-full pl-4 pr-10 py-2 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none bg-white shadow"
								placeholder="Search"
							/>
							<div className="absolute right-4 top-1/2 transform -translate-y-1/2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 16 16"
									fill="currentColor"
									className="h-5 w-5 opacity-70">
									<path
										fillRule="evenodd"
										d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
						</div>
						<HomeCarousel />
					</div>

					{/* Moderator Items */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-2 md:px-0">
						{moderatorItems.map((item, index) => (
							<Link to={`/checkout`} key={index}>
								<ModeratorItem
									bgColor={item.bgColor}
									title={item.title}
									content={item.content}
								/>
							</Link>
						))}
					</div>
				</div>

				{/* Right Sidebar (Ads) */}
				<div className="w-full lg:w-[250px] flex flex-col gap-8 items-center">
					<div className="hidden lg:flex items-center justify-center w-full h-[700px] border-2 border-dashed border-gray-400 rounded-lg cursor-pointer bg-[#EBF4FF]">
						AD
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;