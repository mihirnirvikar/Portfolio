export const SkillTagComponent = ({ skillName }) => {
  return (
    <>
      <div
        className="
        text-xs bg-white dark:bg-[#21262d] text-gray-700 dark:text-[#f0f6fc] border border-gray-300 dark:border-[#30363d] px-2 py-1 rounded w-fit"
      >
        {skillName}
      </div>
    </>
  );
};
