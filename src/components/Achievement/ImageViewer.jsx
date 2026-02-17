import { PhotoView } from "react-photo-view";

export const ImageViewer = ({image}) => {
  return (
    <>
      <div className="w-70 h-40 border border-[#D4D4D8] dark:border-[#52525C] mt-3 rounded-xl overflow-hidden hover:">
        <PhotoView src={image}>
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover hover:scale-105 transition-ease-in-out duration-300 cursor-pointer"
          />
        </PhotoView>
      </div>
    </>
  );
};
