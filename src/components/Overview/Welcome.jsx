import { Typewriter } from "react-simple-typewriter";

export const Welcome = () => {
  return (
    <>
      <p className="text-sm font-semibold">MihirNirvikar / Overview.md</p>

      <div>
        <h1 className="text-[36px] font-semibold mt-10 text-[#F75C7E] flex justify-center">
          <span>
            <Typewriter
              words={[
                "Welcome to My Portfolio!",
                "Hi, I'm Mihir Nirvikar.",
                "Full Stack Developer",
                "Explore My Projects.",
                "Discover My Skills.",
                "Get in Touch!",
              ]}
              loop={0}
              cursor
              cursorStyle=" "
              typeSpeed={60}
              deleteSpeed={20}
              delaySpeed={2000}
            />
          </span>
          &nbsp;
        </h1>
      </div>

      <div className="p-2">
        <h1 className="text-2xl font-semibold flex justify-center mt-8 mb-4">
          Welcome to My Digital Space
        </h1>
        <hr className="text-gray-400"/>

        <p className="px-2 leading-7 mt-4">
          Hey there! I'm <b>Mihir Nirvikar</b>, a Full-Stack Developer and recently
          graduated student from Yeshwantrao Chavan College of Engineering,
          Nagpur, India. Here, I showcase my experience in creating scalable,
          performance-driven, and user-centric web applications with modern tech
          stacks.
        </p>

        <div className="flex mt-4 ml-2">
          <div className="w-1.5 xl:h-13 lg:h-13 md:h-18 sm:h-32 h-36 mr-2 mb-4 rounded transition-ease-in-out duration-300 bg-gray-500"></div>
          <p className="text-[#656D76] ml-2">
            I believe in <em>learning by building</em> — every project here
            represents my dedication to solving real-world problems through
            clean code and thoughtful design.
          </p>
        </div>
      </div>
    </>
  );
};
