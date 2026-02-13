import { Link } from "react-router-dom";
import { MapPin, Mail, Github, Linkedin, Phone } from "lucide-react";

export const About = () => {
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
  return (
    <>
      <div className="xl:w-76 xl:h-76 lg:w-76 lg:h-76 md:w-64 md:h-64 w-full h-full 2xl:ml-32 xl:ml-12 lg:ml-8 md:ml-4 sm:ml-4 px-4 sm:p-0 md:mt-10 md:mb-10 mt-6 mb-4 transition-ease-in-out duration-300">
        {/* About Image Container */}
        <div className="flex flex-row xl:flex-col lg:flex-col md:flex-col sm:flex-row gap-4 md:gap-2 items-center text-start md:text-center overflow-hidden">
          <img
            className="lg:w-72 lg:h-72 md:w-60 md:h-60 sm:w-36 sm:h-36 w-24 h-24 rounded-full object-cover transition-ease-in-out duration-300"
            src={
              "/icon_mihir.jpg" ||
              "https://images.rawpixel.com/image_png_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMl9ibGFja19mbGF0X3ZlY3Rvcl9pbGx1c3RyYXRpb25fb2Zfc2V0X29mXzRfc183YWRhN2I5MC1iNDFhLTQwZmYtYWQxOC04MWNmZjQ4NWFlM2QtbTN3dXc4c3MucG5n.png"
            }
            alt="Mihir Nirvikar Image"
          />
          <div className="">
            <p className="mdmt-4 text-xl md:text-3xl font-semibold mb-2">
              Mihir Nirvikar
            </p>
            <p className="text-[16px] md:text-lg font-medium text-[#39A2FF] text-start md:text-center">
              Frontend Engineer
            </p>
          </div>
        </div>
        <p className="mt-4 sm:text-[16px] text-sm text-start ml-6">
          🌱 Learning, building, and growing - one project at a time.
        </p>

        {/* Horizontal Line */}
        <div className="border-b-2 mt-4 text-[#F75C7E] hidden md:block"></div>

        {/* About Details Container */}
        <div className="text-center ml-6 mt-6 dark:text-[#E4E4E7] text-[#3F3F46] hidden md:block">
          <div className="mt-4 flex flex-col gap-2 mb-8">
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
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
