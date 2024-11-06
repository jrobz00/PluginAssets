import PropTypes from 'prop-types';
import bookImage from "./../../assets/images/book.svg";

const ModeratorItem = ({
	bgColor,
	basicContent,
	title,
	content
}) => {
	return (
		<div className="pl-12 pt-2">
			<div
				className="rounded-[30px] px-7 py-4 relative"
				style={{
					backgroundColor: bgColor,
					color: bgColor === 'transparent' ? "#FFFFFF" : "#000000"
				}}
			>
				<img src={bookImage} alt="" className="absolute -left-12 -top-2" />
				<div className="flex justify-between">
					<h3 className="text-[1.375rem] font-bold">{title}</h3>
					{!basicContent && <span className="">Free</span>}
				</div>
				<p className="text-lg opacity-60">{content}</p>
				{!basicContent && (
					<div className="flex justify-between">
						<span>Bla Studio</span>
						<span>March 25, 21’</span>
					</div>
				)}
			</div>
		</div>
	);
};

ModeratorItem.propTypes = {
	bgColor: PropTypes.string.isRequired,
	basicContent: PropTypes.bool,
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
};

export default ModeratorItem;