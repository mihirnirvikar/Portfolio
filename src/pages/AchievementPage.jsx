import { AchievementCard } from "../components/Achievement/AchievementCard";

export const AchievementPage = () => {
  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-4 mr-2 xl:ml-8 lg:ml-4 md:ml-4 sm:ml-4 ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7]">
        <div className="overview-container border mt-4 md:mt-7 w-full py-3 px-4 rounded-lg mb-10 border-[#D4D4D8] dark:border-[#52525C]">
          <p className="text-[13px]">
            MihirNirvikar <span className="text-gray-500">/</span> Achievement
            <span className="text-gray-500">.md</span>
          </p>

          <AchievementCard />

          <hr className="border-[#D4D4D8] dark:border-[#52525C] mt-4 mb-4" />

          <AchievementCard />

          <hr className="border-[#D4D4D8] dark:border-[#52525C] mt-4 mb-4" />

          <AchievementCard />
        </div>
      </div>
    </>
  );
};
