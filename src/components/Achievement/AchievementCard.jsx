import { CalendarDays } from "lucide-react";
import { PhotoView } from "react-photo-view";
import { ImageViewer } from "./ImageViewer";

export const AchievementCard = () => {
  return (
    <>
      <div className="mt-6 p-2 mb-4">
        {/* Title */}
        <div className="flex items-center gap-4">
          <img
            src={"/logo.svg"}
            alt=""
            className="w-16 h-16 p-1 bg-amber-300"
          />
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">Mihir Nirvikar</p>
            <p className="flex items-center gap-2 ">
              <CalendarDays className="size-4 stroke-2" />{" "}
              <span className="text-[13px]">Nov-2025</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-[17px] font-semibold">Description</p>
          <ul className="mt-1 list-disc pl-8 text-[14px]">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              repudiandae perferendis. Nulla eius accusantium veritatis expedita
              eum quis, ut dolore!
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="mt-3">
          <p className="text-[17px] font-semibold">Images</p>
          <div className="flex gap-1 px-3">
            <ImageViewer />
          </div>
        </div>
      </div>
    </>
  );
};
