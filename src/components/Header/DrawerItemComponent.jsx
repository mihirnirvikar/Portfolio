import { Link } from "react-router-dom";

export const DrawerItemComponent = ({ index, projectTo, projectName, tag }) => {
  return (
    <>
      <div className="flex h-8 w-full px-4 hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm cursor-pointer items-center justify-between text-[14px] text-[#3F3F46] dark:text-[#E4E4E7] group">
        <div className="flex items-center">
          <img
            src={"/icon_mihir.jpg"}
            alt=""
            className="w-5 h-5 mr-2 rounded-full object-cover"
          />
          <p className="dark:text-gray-400 text-gray-500 ">MihirNirvikar/</p>
          <Link to={projectTo} className="group-hover:text-[#39A2FF]">
            {projectName}
          </Link>
        </div>
        <p className="text-[12px] group-hover:text-[#39A2FF]">{tag}</p>
      </div>
    </>
  );
};
