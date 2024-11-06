import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Importing icons for hamburger and close

const TagList = () => {
	const [isOpen, setIsOpen] = useState(false);

	const tags = [
		"Standalone",
		"Webstore Templates",
		"Pterdactyl",
		"NamelessMC",
		"XenForo",
		"WHMCS",
		"LeaderOS themes",
		"Ghost themes",
		"- Other",
		"TypeScript",
		"GraphQL",
		"Redux"
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="px-4 md:px-8 lg:px-16 pb-8 text-gray-600">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-semibold">Resources</h1>
				{/* Hamburger Menu Icon for medium screens and above */}
				<button
					onClick={toggleMenu}
					className="flex lg:hidden p-2 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					{isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
				</button>
			</div>

			{/* Tag list displayed based on isOpen state */}
			<ul
				className={`grid grid-cols-1 gap-4 transition-all duration-300 ${
					isOpen ? "block" : "hidden lg:grid"
				}`}
			>
				{tags.map((tag, index) => (
					<li key={index} className="text-lg">
						<Link
							to={`/tags/${tag.toLowerCase()}`}
							className="block p-2 text-center rounded-lg hover:bg-blue-500 hover:text-white transition-colors"
						>
							{tag}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TagList;
