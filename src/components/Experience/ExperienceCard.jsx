import { CalendarDays } from "lucide-react";
import { SkillTagComponent } from "../Common/SkillTagComponent";

export const ExperienceCard = () => {
  const skillSet = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Redux",
    "TailwindCSS",
    "Bootstrap",
    "Ejs",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "Frontend",
    "Backend",
    "Fullstack",
    "MERN Stack",
  ];
  return (
    <>
      <div className="mt-6 p-2 mb-4">
        {/* Title */}
        <div className="flex items-center gap-4">
          <img
            src={"/logo.svg"}
            alt=""
            className="w-16 h-16 p-1 bg-amber-300 rounded-lg object-cover"
          />
          <div className="flex flex-col gap-1">
            <p className="text-2xl font-semibold">Mihir Nirvikar</p>
            <p className="flex items-center gap-2 ">
              <span className="text-[13px]">Full Stack Developer</span>
              <span>|</span> 
              <CalendarDays className="size-4 stroke-2" />{" "}
              <span className="text-[13px]">Nov-2025</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <p className="text-[17px] font-semibold">Key Achievements</p>
          <ul className="mt-1 list-disc pl-8 text-[14px]">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              repudiandae perferendis. Nulla eius accusantium veritatis expedita
              eum quis, ut dolore!
            </li>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              perferendis!
            </li>
          </ul>
        </div>

        {/* Images */}
        <div className="mt-3">
          <p className="text-[17px] font-semibold">Technologies</p>
          <div className="flex gap-1 px-3">
            <div className="flex flex-wrap gap-1 mt-2">
              {skillSet.map((item, index) => {
                return <SkillTagComponent skillName={item} index={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
