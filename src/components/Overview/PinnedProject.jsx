import { ProjectComponent } from "./ProjectComponent";

export const PinnedProject = () => {
  return (
    <>
      <div className="w-full mb-20">
        <h1 className=" text-xl mb-4 font-semibold ">📌 Pinned Projects</h1>

        <div className="w-full flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap gap-4 mt-4">
          <ProjectComponent
            projectName="Nestinn"
            projectDesc="NestInn is a MERN-based property listing app that enables users to discover and explore a wide range of rental properties. It stays while allowing owners to manage and showcase their properties."
            skills="Node.js, Express.js, MongoDB, Ejs, BootstrapCSS."
          />

          <ProjectComponent
            projectName="PurpleGPT"
            projectDesc="PurpleGPT is an AI chat web app that delivers real-time intelligent conversations with a customizable themed interface and responsive user experience."
            skills="MERN Stack, TailwindCSS."
          />
        </div>

        <div className="w-full flex flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap gap-4 mt-4">
          <ProjectComponent
            projectName="Portfolio"
            projectDesc="Built a GitHub-inspired portfolio website to showcase projects and skills with repository-style layouts, theme toggle, and responsive design."
            skills="React, Tailwind CSS."
          />
        </div>
      </div>
    </>
  );
};
