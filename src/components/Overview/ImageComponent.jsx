export const ImageComponent = ({src, alt, bgc}) => {
  const  bgMap ={
    "gray-800":"bg-gray-800",
    "yellow-300":"bg-yellow-300",
    "orange-400":"bg-orange-400",
    "blue-400":"bg-blue-400",
    "white-200":"bg-white-200",
    "gray-400":"bg-gray-400",
    "gray-300":"bg-gray-300",
    "gray-200":"bg-gray-200",
  }
  return (
    <>
      <div className={`${bgMap[bgc]} overflow-hidden xl:w-14 lg:w-13 md:w-12 sm:w-10 w-8 xl:h-14 lg:h-13 md:h-12 sm:h-10 h-8 mt-6 p-2 items-center rounded-lg flex justify-center `} >
        <img className="w-full " src={src} alt={alt} />
      </div>
    </>
  );
};
