import { Asterisk, ArrowRight, MoveLeft } from "lucide-react";

export const ContactCard = () => {
  return (
    <>
      <div className="mt-8 px-4">
        <form onSubmit={""}>
          {/* Name */}
          <div className="flex flex-col w-full">
            <p className="flex text-[14px]">
              Name{" "}
              <span className="text-red-500 text-[2px]">
                {" "}
                <sup>
                  <Asterisk className="size-3" />
                </sup>
              </span>
            </p>
            <input
              type="text"
              className="h-9 w-full border border-[#D4D4D8] dark:border-[#52525C] hover:border-2  hover:border-[#39A2FF] focus:border-2 focus:border-[#39A2FF] focus:outline-none rounded-sm px-4 mt-2 text-[14px]"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-full mt-6">
            <p className="flex text-[14px]">
              Email{" "}
              <span className="text-red-500 text-[2px]">
                {" "}
                <sup>
                  <Asterisk className="size-3" />
                </sup>
              </span>
            </p>
            <input
              type="text"
              className="h-9 w-full border border-[#D4D4D8] dark:border-[#52525C] hover:border-2  hover:border-[#39A2FF] focus:border-2 focus:border-[#39A2FF] focus:outline-none rounded-sm px-4 mt-2 text-[14px]"
              placeholder="Your Email"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col w-full mt-6">
            <p className="flex text-[14px]">
              Message{" "}
              <span className="text-red-500 text-[2px]">
                {" "}
                <sup>
                  <Asterisk className="size-3" />
                </sup>
              </span>
            </p>
            <textarea
              name=""
              id=""
              type="text"
              className="w-full border border-[#D4D4D8] dark:border-[#52525C] hover:border-2  hover:border-[#39A2FF] focus:border-2 focus:border-[#39A2FF] focus:outline-none rounded-sm px-4 py-2 mt-2 text-[14px]"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>

          <button
            className="bg-green-600 hover:bg-green-700 text-white rounded-sm h-9 w-32 mt-6 text-[14px] flex justify-center items-center group transition-ease-in-out duration-200 gap-1"
            type="submit"
          >
            Send Message{" "}
            <span className="group-hover:translate-x-1 transition-ease-in-out duration-200">
              <ArrowRight className="size-4 stroke-2" />
            </span>
          </button>

          <div className="mt-6 flex items-center gap-2">
            <MoveLeft className="size-6 stroke-2" />
            <p className="text-[16px]">Alternatively, you can contact me on my socials</p>
          </div>
        </form>
      </div>
    </>
  );
};
