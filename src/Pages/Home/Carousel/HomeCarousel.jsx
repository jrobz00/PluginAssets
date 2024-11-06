import { useState, useEffect } from "react";
import ModeratorItem from "../../../Common/ModeratorItem/ModeratorItem";

const HomeCarousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideInterval = 5000; // Auto-slide every 5 seconds
	const slides = [
		[
			{
				bgColor: "transparent",
				basicContent: true,
				title: "React Router",
				content: "A powerful library for seamless client-side navigation in React applications."
			},
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Tailwind CSS",
				content: "A utility-first CSS framework that helps you create responsive, modern UIs quickly."
			}
		],
		[
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Framer Motion",
				content: "A popular library for creating complex animations in React with easy-to-use APIs."
			},
			{
				bgColor: "transparent",
				basicContent: true,
				title: "DaisyUI",
				content: "A Tailwind CSS component library that adds beautifully designed UI components."
			}
		],
		[
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Formik",
				content: "A robust library to handle forms and validations in React, simplifying complex forms."
			},
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Swiper",
				content: "A mobile-friendly library for smooth, responsive touch sliders and carousels."
			}
		],
		[
			{
				bgColor: "transparent",
				basicContent: true,
				title: "React Query",
				content: "A data-fetching library that provides powerful caching and synchronization in React."
			},
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Heroicons",
				content: "A collection of beautiful SVG icons available in outline and solid styles."
			}
		],
		[
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Lottie Animations",
				content: "A library that makes it easy to add stunning animations to your projects with JSON files."
			},
			{
				bgColor: "transparent",
				basicContent: true,
				title: "React Hook Form",
				content: "A flexible, lightweight form library for handling forms and validations in React."
			}
		],
		[
			{
				bgColor: "transparent",
				basicContent: true,
				title: "React Helmet",
				content: "A component for managing meta tags, SEO, and document head properties in React apps."
			},
			{
				bgColor: "transparent",
				basicContent: true,
				title: "Ant Design",
				content: "A comprehensive UI library with a wide range of customizable components for React."
			}
		]
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
		}, slideInterval);
		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div className="carousel w-full rounded-[30px]">
			{slides.map((slideContent, index) => (
				<div
					key={index}
					className={`carousel-item ${index === currentSlide ? "block" : "hidden"} relative w-full transform transition-transform ease-in-out duration-500`}
				>
					<div className="flex flex-wrap lg:flex-nowrap bg-[#092334] p-8 md:p-12 w-full items-center justify-center gap-8">
						{slideContent.map((item, itemIndex) => (
							<ModeratorItem
								key={itemIndex}
								bgColor={item.bgColor}
								basicContent={item.basicContent}
								title={item.title}
								content={item.content}
							/>
						))}
					</div>
					{/* Navigation Buttons */}
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<button onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)} className="text-white text-[24px]">❮</button>
						<button onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)} className="text-white text-[24px]">❯</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default HomeCarousel;