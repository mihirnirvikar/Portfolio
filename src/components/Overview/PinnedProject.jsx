import { ProjectComponent } from "./ProjectComponent";

export const PinnedProject = () => {
  return (
    <>
      <div className="w-full mb-20">
        <h1 className=" text-xl mb-4 font-semibold ">📌 Pinned Projects</h1>
        <div className="flex gap-4">
          <ProjectComponent
            projectName="Project 1"
            projectDesc="Description"
            skills="MERN"
          />
          <ProjectComponent />
        </div>

        <div className="flex gap-4 mt-4">
          <ProjectComponent
            projectName="Project 1"
            projectDesc="Description"
            skills="MERN"
          />
          <ProjectComponent />
        </div>

        <div className="flex gap-4 mt-4">
          <ProjectComponent
            projectName="Project 1"
            projectDesc="Description"
            skills="MERN"
          />
          <ProjectComponent />
        </div>
      </div>
    </>
  );
};
