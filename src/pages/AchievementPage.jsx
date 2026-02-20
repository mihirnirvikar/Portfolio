import { AchievementCard } from "../components/Achievement/AchievementCard";
import {
  patentImage,
  researchPaperImage,
  patentLogo,
  ieeeLogo,
} from "../assets/achievementImages";

export const AchievementPage = () => {
  const achievement = [
    {
      logo: patentLogo,
      title: "The Patent Office, Government Of India",
      description: [
        "The present invention relates to A Grass Cutting Machine designed for efficient and eco-friendly lawn maintenance.",
        "The machine features key components, including a motor input for powering the motors, a microcontroller for processing and control, and ultrasonic sensors for real-time obstacle detection.",
        "An input connector facilitates external connections, while an OLED display provides operational feedback.",
        "The power system includes a rechargeable Li-ion battery with automatic charging capability.",
        "The microcontroller manages IOT connectivity, enabling remote operation, real-time monitoring, and scheduling through a mobile app.",
        " The adaptive cutting mechanism uses fixed blades that adjust to varying grass heights and terrain, ensuring an even cut.",
        " Safety features include sensors to halt blade operation when obstacles or tilt are detected.",
        " This energy-efficient and user friendly machine offers a sustainable, automated lawn care solution with minimal human intervention.",
      ],
      image: patentImage,
      link: "https://ycce.edu/wp-content/uploads/2026/01/65.-202421090296.pdf",
      date: "Dec-2025",
    },
    {
      logo: ieeeLogo,
      title: "Design and Development of Smart Grass Cutter Machine",
      description: [
        "The present invention relates to A Grass Cutting Machine designed for efficient and eco-friendly lawn maintenance.",
        "The machine features key components, including a motor input for powering the motors, a microcontroller for processing and control, and ultrasonic sensors for real-time obstacle detection.",
        "An input connector facilitates external connections, while an OLED display provides operational feedback.",
        "The power system includes a rechargeable Li-ion battery with automatic charging capability.",
        "The microcontroller manages IOT connectivity, enabling remote operation, real-time monitoring, and scheduling through a mobile app.",
        " The adaptive cutting mechanism uses fixed blades that adjust to varying grass heights and terrain, ensuring an even cut.",
        " Safety features include sensors to halt blade operation when obstacles or tilt are detected.",
        " This energy-efficient and user friendly machine offers a sustainable, automated lawn care solution with minimal human intervention.",
      ],
      image: researchPaperImage,
      link: "https://ieeexplore.ieee.org/document/11034862",
      date: "July-2025",
    },
  ];

  return (
    <>
      <div className="min-w-0 max-w-4xl flex-1 2xl:mr-32 xl:mr-12 lg:mr-8 md:mr-4 sm:mr-4 mr-2 xl:ml-8 lg:ml-4 md:ml-4 sm:ml-4 ml-2 transition-ease-in-out duration-300 dark:text-[#E4E4E7]">
        <div className="overview-container border mt-4 md:mt-7 w-full py-3 px-4 rounded-lg mb-10 border-[#D4D4D8] dark:border-[#52525C]">
          <p className="text-[13px]">
            MihirNirvikar <span className="text-gray-500">/</span> Achievement
            <span className="text-gray-500">.md</span>
          </p>

          {achievement.map((item, index) => {
            return (
              <>
                <AchievementCard key={index} {...item} />
                <hr className="border-[#D4D4D8] dark:border-[#52525C] mt-4 mb-4" />
              </>
            );
          })}

          {/* <AchievementCard />

          <hr className="border-[#D4D4D8] dark:border-[#52525C] mt-4 mb-4" />

          <AchievementCard /> */}
        </div>
      </div>
    </>
  );
};
