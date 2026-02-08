import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ImageComponent = ({ src, alt, bgc }) => {
  const bgMap = {
    "gray-800": "bg-gray-800",
    "yellow-300": "bg-yellow-300",
    "orange-400": "bg-orange-400",
    "blue-400": "bg-blue-400",
    "white-200": "bg-white-200",
    "gray-400": "bg-gray-400",
    "gray-300": "bg-gray-300",
    "gray-200": "bg-gray-200",
  };

  const imageName = alt.split(" ");

  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`${bgMap[bgc]} overflow-hidden xl:w-12 lg:w-12 md:w-12 sm:w-12 w-12 xl:h-12 lg:h-12 md:h-12 sm:h-12 h-12 mt-2 p-2 items-center rounded-lg flex justify-center `}
          >
            <img className="w-full" src={src} alt={alt} />
            {/* <img className="w-full" src={src} alt={alt} /> */}
          </div>
        </TooltipTrigger>
        <TooltipContent>{imageName[0]}</TooltipContent>
      </Tooltip>
    </>
  );
};
