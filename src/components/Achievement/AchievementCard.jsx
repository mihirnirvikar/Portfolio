import { CalendarDays, ExternalLink } from "lucide-react";
import { PhotoView } from "react-photo-view";
import { ImageViewer } from "./ImageViewer";

export const AchievementCard = ({
  logo,
  title,
  description,
  image,
  link,
  date,
}) => {
  return (
    <>
      <div className="mt-6 p-2 mb-4">
        {/* Title */}
        <div className="flex items-center gap-4 flex-col sm:flex-row ">
          <img
            src={logo}
            alt=""
            className="w-18 h-18 rounded-lg object-fit border border-[#D4D4D8] dark:border-[#52525C]"
          />
          <div className="flex flex-col gap-1">
            <p className="md:text-2xl font-semibold">{title}</p>
            <p className="flex items-center gap-2 ">
              <CalendarDays className="size-4 stroke-2" />{" "}
              <span className="text-[13px]">{date}</span> |
              <ExternalLink className="size-4 stroke-2" />{" "}
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-[12px] hover:text-[#39A2FF]">Link</a>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-[17px] font-semibold">Description</p>
          <ul className="mt-1 list-disc pl-8 text-[14px]">
            {description.map((item, index) => {
              return (
                <>
                  <li key={index} className="leading-6 ">
                    {item}
                  </li>
                </>
              );
            })}
          </ul>
        </div>

        {/* Images */}
        <div className="mt-3">
          <p className="text-[17px] font-semibold">Images</p>
          <div className="flex gap-1 px-3">
            <ImageViewer image={image} />
          </div>
        </div>
      </div>
    </>
  );
};
