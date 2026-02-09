import { ycce, lbsv, zphs } from "../../assets/educationImages.js";

export const TimelinePreview = () => {
  const items = [
    {
      title: "Yeshwantrao Chavan College of Engineering, Nagpur",
      year: "( 2021 - 2025 )",
      src: ycce,
      subtitle: "Electronics and Telecommunication Engineering",
      description: "CGPA: 8.12 (out of 10)",
    },
    {
      title: "Lal Bahadur Shastri Junior College, Bhandara",
      year: "( 2019 - 2021 )",
      src: lbsv,
      subtitle: "Science",
      description: "Percentage: 74% (out of 100%)",
    },
    {
      title: "Z. P. Highschool, Mohadi",
      year: "( 2013 - 2019 )",
      src: zphs,
      subtitle: "Science",
      description: "Percentage: 81.40% (out of 100%)",
    },
  ];

  return (
    <div className="w-full min-h-0 max-h-full text-white flex items-center justify-center py-10 px-5">
      <div className="relative w-full max-w-5xl">
        {/* Center Line */}
        <div className="absolute top-0 h-full w-0.5 -translate-x-1/2 dark:bg-[#52525C] bg-[#D4D4D8]" />

        <div className="space-y-10">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-start`}
            >
              {/* Card */}
              <div className="w-full h-auto ml-10 border rounded-lg p-6 border-[#D4D4D8] dark:border-[#52525C] dark:text-[#E4E4E7] text-[#3F3F46] flex justify-between gap-4 items-center">
                <div className="w-25 h-25 border overflow-hidden rounded-xl">
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full hover:scale-105 transition-ease-in-out duration-300 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex  items-center justify-between">
                    <h3 className="xl:text-xl lg:text-xl md:text-lg sm:text-lg text-md font-semibold text-orange-500">
                      {item.title}
                    </h3>

                    <p className="text-sm ">{item.year}</p>
                  </div>
                  <div>
                    <p className="text-[18px] mt-2 mb-2">{item.subtitle}</p>
                    <p className="text-[14px]">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute -translate-x-1/2 w-5 h-5 rounded-full bg-orange-500 border-4 dark:border-gray-950 border-neutral-800" />

              {/* Horizontal line */}
              <div className="absolute left-5 top-1/2 w-7.5 h-0.5 -translate-y-1/2 -translate-x-2.5 dark:bg-[#52525C] bg-[#D4D4D8]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
