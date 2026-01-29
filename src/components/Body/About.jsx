import { Link } from "react-router-dom";
import { MapPin, Mail, Github, Linkedin, Phone } from "lucide-react";

export const About = () => {
  return (
    <>
      <div className="w-72 2xl:ml-32 xl:ml-12 lg:ml-8 md:ml-4 sm:ml-2 sm:mr-2 mt-10 mb-10 p-2 transition-ease-in-out duration-300">
        {/* About Image Container */}
        <div className="items-center text-center">
          <img
            className="w-68 h-68 rounded-full"
            src="https://images.rawpixel.com/image_png_600/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMl9ibGFja19mbGF0X3ZlY3Rvcl9pbGx1c3RyYXRpb25fb2Zfc2V0X29mXzRfc183YWRhN2I5MC1iNDFhLTQwZmYtYWQxOC04MWNmZjQ4NWFlM2QtbTN3dXc4c3MucG5n.png"
            alt="Mihir Nirvikar Image"
          />
          <p className="mt-4 text-2xl font-semibold">Mihir Nirvikar</p>
          <p className="mt-4 text-lg font-medium text-[#39A2FF]">
            Full Stack Developer, Frontend Developer
          </p>
        </div>

        {/* Horizontal Line */}
        <div className="border-b-2 w-68 mt-4 text-[#F75C7E]"></div>

        {/* About Details Container */}
        <div className="text-center ml-6 mt-6 flex flex-col gap-3 dark:text-[#E4E4E7] text-[#3F3F46]">
          {/* Location */}
          <div className="flex items-center">
            <MapPin className="size-4" />
            <Link to="https://www.google.com/maps/place/Mumbai,+Maharashtra,+India/">
              <span className="ml-2 hover:text-[#39A2FF]">Mumbai, India</span>
            </Link>
          </div>

          {/* Email */}
          <div className="flex items-center">
            <Mail className="size-4" />
            <a
              className="ml-2 hover:text-[#39A2FF]"
              href="mailto:q2GxT@mihirnirvikar@gmail.com"
            >
              mihirnirvikar@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center">
            <Github className="size-4" />
            <a
              className="ml-2 hover:text-[#39A2FF]"
              href="https:github.com/mihirnirvikar"
            >
              MihirNirvikar
            </a>
          </div>

          {/* Linkedin  */}
          <div className="flex items-center">
            <Linkedin className="size-4" />
            {/* <a className="ml-2" href="https://www.linkedin.com/in/mihirnirvikar/">MihirNirvikar</a> */}
            <Link
              className="ml-2 hover:text-[#39A2FF]"
              to="https://www.linkedin.com/in/mihirnirvikar/"
            >
              MihirNirvikar
            </Link>
          </div>

          {/* Mobile No. */}
          <div className="flex items-center">
            <Phone className="size-4" />
            <Link to="tel:+919876543210">
              <span className="ml-2 hover:text-[#39A2FF]">+91-9876543210</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
