export const LetsConnect = () => {
  return (
    <>
      <div className="ml-2 mb-10">
        <h1 className="text-2xl mb-2 font-medium ">📬 Let’s Connect</h1>
        <hr />

        <div className="flex w-full mt-6 px-2">
          <div className="w-20 h-25 border border-r-0 px-2 py-1">
            <a
              className="flex flex-col items-center "
              href="mailto:mihirnikar@gmail.com"
            >
              <img className="" src="Gmail-icon.svg" alt="Gmail Image" />
              <p className="text-sm mt-1 font-semibold text-blue-700">Email</p>
            </a>
          </div>

           <div className="w-20 h-25 border border-r-0  px-2 py-3">
            <a
              className="flex flex-col items-center "
              href="https://github.com/MihirNirvikar"
            >
              <img className="w-12 h-12" src="Github-icon.svg" alt="Gmail Image" />
              <p className="text-sm mt-3 font-semibold text-blue-700">GitHub</p>
            </a>
          </div>

          <div className="w-20 h-25 border border-r-0  px-2 py-3">
            <a
              className="flex flex-col items-center "
              href="https://www.linkedin.com/in/mihir-nirvikar/"
            >
              <img className="w-12 h-12" src="Linkedin-icon.svg" alt="Gmail Image" />
              <p className="text-sm mt-3 font-semibold text-blue-700">LinkedIn</p>
            </a>
          </div>

          <div className="w-20 h-25 border border-r-0 px-2 py-3">
            <a
              className="flex flex-col items-center "
              href="https://x.com/MihirNirvikar"
            >
              <img className="w-12 h-12" src="Twitter-icon.svg" alt="Gmail Image" />
              <p className="text-sm mt-3 font-semibold text-blue-700">X</p>
            </a>
          </div>

          <div className="w-20 h-25 border px-2 py-3">
            <a
              className="flex flex-col items-center "
              href="https://instagram.com/mihirnirvikar"
            >
              <img className="w-12 h-12" src="Instagram-icon.svg" alt="Gmail Image" />
              <p className="text-sm mt-3 font-semibold text-blue-700">Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
