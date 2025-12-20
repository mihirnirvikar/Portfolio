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
      <div className={`${bgMap[bgc]} overflow-hidden w-14 h-14 mt-6 p-2 items-center rounded-xl flex justify-center `} >
        <img className="w-full " src={src} alt={alt} />
      </div>
    </>
  );
};
