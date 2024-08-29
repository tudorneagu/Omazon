import type { ITag } from "../@types/index.types";

interface TagsProps {
	tag: ITag;
}
function Tag({ tag }: TagsProps) {
	const renderTagContent = () => {
		switch (tag.type) {
			case "choice":
				return (
					<div className="relative">
						<div className="absolute -left-2 bg-main-high w-[127px] h-full transform skew-x-[-35deg] origin-right right-0" />
						<div
							className="relative text-main-lowest text-s-regular px-2 choice-tag-orange"
							dangerouslySetInnerHTML={{ __html: tag.text }}
						/>
					</div>
				);
			case "new":
				return (
					<div className="relative">
						<div className="absolute -left-2 -z-10 bg-brand-grey w-[127px] h-full transform skew-x-[-35deg] origin-right right-0" />
						<div className=" text-main-lowest text-s-regular w-[127px] px-2 ">
							{tag.text}
						</div>
					</div>
				);
			case "best-seller":
				return (
					<div className="relative">
						<div className="absolute -left-2 -z-10 bg-brand-primary w-[127px] h-full transform skew-x-[-35deg] origin-right right-0" />
						<div className=" text-main-lowest text-s-regular w-[127px] px-2 ">
							{tag.text}
						</div>
					</div>
				);
			case "flash":
				return (
					<div className="relative">
						<div className="absolute -left-2 -z-10 bg-danger-medium w-[127px] h-full transform skew-x-[-35deg] origin-right right-0" />
						<div className=" text-main-lowest text-s-regular w-[127px] px-2 ">
							{tag.text}
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return <div className="absolute top-0 left-0">{renderTagContent()}</div>;
}

export default Tag;
