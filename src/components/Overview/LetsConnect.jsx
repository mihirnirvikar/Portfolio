export const LetsConnect = () => {
  return (
    <>
      <div className="ml-2 mb-40">
        <h1 className="text-2xl mb-2 font-medium ">📬 Let’s Connect</h1>
        <hr className="border-[#D4D4D8] dark:border-[#52525C]" />

        <div className="flex flex-wrap gap-1 w-full mt-6 px-2 text-[12px]">
          <div className="w-18 h-23 border border-[#D4D4D8] dark:border-[#52525C] px-2 py-2 rounded-lg">
            <a
              className="flex flex-col items-center hover:text-[#39A2FF]"
              href="mailto:mihirnikar@gmail.com"
            >
              <img
                className="w-14 h-14"
                src="Gmail-icon.svg"
                alt="Gmail Image"
              />
              <p className=" mt-1 font-semibold ">Email</p>
            </a>
          </div>

          <div className="w-18 h-23 border px-2 py-4 rounded-lg border-[#D4D4D8] dark:border-[#52525C]">
            <a
              className="flex flex-col items-center hover:text-[#39A2FF]"
              href="https://github.com/MihirNirvikar"
            >
              <img
                className="w-10 h-10 dark:bg-gray-300  bg-clip rounded-full"
                src="Github-icon.svg"
                alt="Github Image"
              />
              <p className=" mt-3 font-semibold ">GitHub</p>
            </a>
          </div>

          <div className="w-18 h-23 border px-2 py-4 rounded-lg border-[#D4D4D8] dark:border-[#52525C]">
            <a
              className="flex flex-col items-center hover:text-[#39A2FF]"
              href="https://www.linkedin.com/in/mihir-nirvikar/"
            >
              <img
                className="w-10 h-10"
                src="Linkedin-icon.svg"
                alt="Linkedin Image"
              />
              <p className=" mt-3 font-semibold ">LinkedIn</p>
            </a>
          </div>

          <div className="w-18 h-23 border px-2 py-4 rounded-lg border-[#D4D4D8] dark:border-[#52525C]">
            <a
              className="flex flex-col items-center hover:text-[#39A2FF]"
              href="https://x.com/MihirNirvikar"
            >
              <img
                className="w-10 h-10"
                src="Twitter-icon.svg"
                alt="Instagram Image"
              />
              <p className=" mt-3 font-semibold ">X</p>
            </a>
          </div>

          <div className="w-18 h-23 border px-2 py-4 rounded-lg border-[#D4D4D8] dark:border-[#52525C]">
            <a
              className="flex flex-col items-center hover:text-[#39A2FF]"
              href="https://instagram.com/mihirnirvikar"
            >
              <img
                className="w-10 h-10"
                src="Instagram-icon.svg"
                alt="Gmail Image"
              />
              <p className=" mt-3 font-semibold ">Instagram</p>
            </a>
          </div>

          <div className="w-18 h-23 border px-2 py-4 rounded-lg border-[#D4D4D8] dark:border-[#52525C]">
            <a
              className="flex flex-col items-center hover:text-[#39A2FF]"
              href="https://leetcode.com/u/Man_2004/"
            >
              <img
                className="w-10 h-10"
                src="Leetcode-icon.svg"
                alt="Leetcode Image"
              />
              <p className=" mt-3 font-semibold ">Leetcode</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
