import { ProjectList } from "./ProjectList";
import { ProjectCard } from "./ProjectCard";

export const ProjectTitle = ({
  projectName,
  description,
  techStack,
  externalLink,
  github,
  isFilterOpen,
  projectImage,
}) => {
  return (
    <>
      {isFilterOpen === "list" ? (
        <ProjectList
          projectName={projectName}
          description={description}
          techStack={techStack}
          externalLink={externalLink}
          github={github}
        />
      ) : (
        <ProjectCard
          projectName={projectName}
          description={description}
          techStack={techStack}
          externalLink={externalLink}
          github={github}
          projectImage={projectImage}
        />
      )}
    </>
  );
};
