import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sun,
  Moon,
  Activity,
  BookOpen,
  FolderKanban,
  Award,
  IdCardLanyard,
  GraduationCap,
  FileText,
  MessageSquareMore,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Phone,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { SkillTagComponent } from "../Common/SkillTagComponent";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

export const SheetContentComponent = () => {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);
  const { isNavItemSelected, setIsNavItemSelected } = useContext(AppContext);

  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "Overview", icon: BookOpen },
    { to: "/projects", label: "Projects", icon: FolderKanban },
    { to: "/achievements", label: "Achievement", icon: Award },
    { to: "/experience", label: "Experience", icon: IdCardLanyard },
    { to: "/educations", label: "Education", icon: GraduationCap },
    { to: "/resume", label: "Resume", icon: FileText },
    { to: "/contact", label: "Contact", icon: MessageSquareMore },
  ];

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

  const contactLinks = [
    {
      to: "https://www.google.com/maps/place/Mumbai,+Maharashtra,+India/",
      label: "Mumbai, India",
      icon: MapPin,
    },
    {
      to: "mailto:mihirnirvikar@gmail.com",
      label: "mihirnirvikar@gmail.com",
      icon: Mail,
    },
    {
      to: "https://github.com/mihirnirvikar",
      label: "Github",
      icon: Github,
    },
    {
      to: "https://www.linkedin.com/in/mihirnirvikar/",
      label: "Linkedin",
      icon: Linkedin,
    },
    {
      to: "tel: +91 9876543210",
      label: "+91 9876543210",
      icon: Phone,
    },
  ];

  const themeBtnHandler = () => {
    toggleTheme();
  };

  return (
    <>
      <SheetContent className="flex flex-col h-full" >
        <SheetHeader>
          <SheetTitle>
            <div className="flex gap-3 items-center">
              <img
                src={"/icon_mihir.jpg"}
                alt=""
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover"
              />
              <div>
                <p className="text-[18px]">Mihir Nirvikar</p>
                <p className="text-[#39A2FF] text-[15px]">Frontend Engineer</p>
              </div>
            </div>
          </SheetTitle>
          <SheetDescription>
            <p className="text-[12px]">
              🌱 Learning, building, and growing - one project at a time.
            </p>

            {/* Currently working */}
            <div className="border border-[#D4D4D8] dark:border-[#323238] mt-4 bg-zinc-50 dark:bg-[#161B22] p-3 rounded-sm flex flex-col gap-2 duration-200">
              <div className="flex gap-2 items-center">
                <Activity className="size-4 text-green-400" />
                <p className="dark:text-[#EBF1F7] text-[#3c3c3f] font-semibold">
                  Currently working on
                </p>
              </div>
              <p className="text-[12px] text-[#8B949E]">
                Exploring the world of web development
              </p>
            </div>
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto no-scrollbar scroll-smooth text-[#a1a1a1] ">
          {/* Theme switch toggler */}
          <div className=" ">
            <p className="font-semibold text-[16px] mb-4">Settings</p>

            <div className="flex  gap-2 justify-between px-2 items-center text-[14px] text-[#3F3F46] dark:text-[#E4E4E7]">
              <div className="flex items-center gap-1">
                <Sun className="size-4" />
                <p>Light</p>
              </div>
              <div className="">
                <Switch checked={theme === "dark"} onClick={themeBtnHandler} />
              </div>
              <div className="flex items-center gap-1">
                <Moon className="size-4" />
                <p>Dark</p>
              </div>
            </div>
          </div>

          {/* Navigation items */}
          <div className="mt-4">
            <p className="font-semibold text-[16px] mb-2">Explore</p>

            {navItems.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex h-9 w-full px-4 hover:bg-[#E4E4E7] dark:hover:bg-[#27272A] rounded-sm cursor-pointer justify-between items-center text-[14px] text-[#3F3F46] dark:text-[#E4E4E7]"
                  onClick={() => {
                    navigate(item.to);
                    setIsNavItemSelected(item.to);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="size-4 stroke-2" />
                    <span>{item.label}</span>
                  </div>

                  <span
                    className={`w-2 h-2 rounded-full ${isNavItemSelected === item.to ? "bg-green-400" : ""}`}
                  ></span>
                </div>
              );
            })}
          </div>

          {/* Skills */}
          <div className="mt-4 flex flex-col gap-1">
            <p className="font-semibold text-[16px] ">Skills</p>

            <div className="flex flex-wrap gap-1 mt-2">
              {skillSet.map((item, index) => {
                return <SkillTagComponent skillName={item} />;
              })}
            </div>
          </div>

          {/* Contact */}
          <div className="mt-4 flex flex-col gap-2 mb-8">
            <p className="mb-2">Contacts</p>
            {contactLinks.map((item, index) => {
              return (
                <div
                  className="flex rounded-sm cursor-pointer gap-2 items-center text-[14px] text-[#3F3F46] dark:text-[#E4E4E7]"
                  key={index}
                >
                  <item.icon className="size-4 stroke-2" />
                  <a
                    href={item.to}
                    className="hover:text-[#39A2FF] text-[#3F3F46] dark:text-[#E4E4E7] text-[14px]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </>
  );
};
