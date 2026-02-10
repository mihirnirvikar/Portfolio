export const ButtonComponent = ({ onClick, icon, className }) => {
  return (
    <>
      <button
        className={`w-9 h-9 border border-[#D4D4D8] dark:border-[#52525C] rounded-md flex justify-center items-center cursor-pointer hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] dark:text-[#E4E4E7] text-[#3F3F46] ${className}`}
        onClick={onClick}
      >
        {icon}
      </button>
    </>
  );
};
