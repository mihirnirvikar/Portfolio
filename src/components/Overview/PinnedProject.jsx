import { ProjectComponent } from "./ProjectComponent";

export const PinnedProject = () => {
  return (
    <>
      <div className="w-full mb-20">
        <h1 className=" text-xl mb-4 font-semibold ">📌 Pinned Projects</h1>

        <div className="w-full flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap gap-4 mt-4">
          <ProjectComponent
            projectName="Portfolio"
            projectDesc="A personal portfolio to showcase my skills and projects."
            skills="React, Tailwind CSS, Framer Motion"
          />

          <ProjectComponent
            projectName="Portfolio"
            projectDesc="A personal portfolio to showcase my skills and projects."
            skills="React, Tailwind CSS, Framer Motion"
          />
        </div>

        <div className="w-full flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap gap-4 mt-4">
          <ProjectComponent
            projectName="Portfolio"
            projectDesc="A personal portfolio to showcase my skills and projects."
            skills="React, Tailwind CSS, Framer Motion"
          />

          <ProjectComponent
            projectName="Portfolio"
            projectDesc="A personal portfolio to showcase my skills and projects."
            skills="React, Tailwind CSS, Framer Motion"
          />
        </div>
      </div>
    </>
  );
};
