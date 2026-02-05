import { ImageComponent } from "./ImageComponent.jsx";
import {
  BootstrapImage,
  CSS3Image,
  EjsImage,
  ExpressjsImage,
  GitImage,
  GithubImage,
  HoppscotchImage,
  HTML5Image,
  JavaImage,
  JavascriptImage,
  MaterialUiImage,
  MongoDBImage,
  MySQLImage,
  SqlImage,
  NetlifyImage,
  NodejsImage,
  PostmanImage,
  PythonImage,
  ReactImage,
  ReduxImage,
  NpmImage,
  TailwindCSSImage,
  VercelImage,
  VsCodeImage,
} from "../../assets/iconsImages.js";

export const TechStack = () => {
  return (
    <>
      <div className="ml-2 mb-6">
        <h2 className="text-2xl mb-2 font-medium">💻 Tech Stack</h2>
        <hr className="border-[#D4D4D8] dark:border-[#52525C]" />

        <div>
          <h1 className="flex justify-center mt-4 text-2xl font-semibold mb-4">
            Frontend
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <ImageComponent src={ReactImage} alt="React Image" bgc="gray-800" />

            <ImageComponent
              src={JavascriptImage}
              alt="JavaScript Image"
              bgc="yellow-300"
            />

            <ImageComponent
              src={HTML5Image}
              alt="HTML5 Image"
              bgc="orange-400"
            />

            <ImageComponent src={CSS3Image} alt="CSS3 Image" bgc="blue-400" />

            <ImageComponent
              src={TailwindCSSImage}
              alt="Tailwind CSS Image"
              bgc="gray-800"
            />
            <ImageComponent
              src={BootstrapImage}
              alt="Bootstrap Image"
              bgc="gray-200"
            />

            <ImageComponent
              src={MaterialUiImage}
              alt="Material UI Image"
              bgc="gray-800"
            />

            <ImageComponent src={ReduxImage} alt="Redux Image" bgc="gray-200" />
          </div>
        </div>

        <div>
          <h1 className="flex  justify-center mt-8 text-2xl font-semibold mb-4">
            Backend
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <ImageComponent
              src={NodejsImage}
              alt="Node.js Image"
              bgc="gray-200"
            />
            <ImageComponent
              src={ExpressjsImage}
              alt="Express.js Image"
              bgc="gray-200"
            />
            <ImageComponent
              src={MongoDBImage}
              alt="MongoDB Image"
              bgc="gray-200"
            />

            <ImageComponent src={MySQLImage} alt="MySql Image" bgc="gray-200" />

            <ImageComponent src={EjsImage} alt="EJS Image" bgc="gray-200" />

            <ImageComponent
              src={PostmanImage}
              alt="Postman Image"
              bgc="gray-200"
            />
          </div>
        </div>

        <div>
          <h1 className="flex justify-center mt-8 text-2xl font-semibold mb-4">
            Languages
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <ImageComponent src={JavaImage} alt="Java Image" bgc="gray-300" />
            <ImageComponent
              src="Python-icon.svg"
              alt="Python Image"
              bgc="gray-300"
            />
            <ImageComponent
              src={JavascriptImage}
              alt="JavaScript Image"
              bgc="yellow-300"
            />

            <ImageComponent src={SqlImage} alt="SQL Image" bgc="gray-300" />
          </div>
        </div>

        <div>
          <h1 className="flex justify-center mt-8 text-2xl font-semibold mb-4">
            Tools & Technologies
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            <ImageComponent src={GitImage} alt="Git Image" bgc="gray-300" />

            <ImageComponent
              src={GithubImage}
              alt="Github Image"
              bgc="gray-300"
            />
            <ImageComponent
              src={VsCodeImage}
              alt="Vs Code Image"
              bgc="gray-300"
            />

            <ImageComponent
              src={HoppscotchImage}
              alt="Hoppscotch Image"
              bgc="gray-300"
            />
            <ImageComponent
              src={VercelImage}
              alt="Vercel Image"
              bgc="gray-300"
            />

            <ImageComponent
              src={NetlifyImage}
              alt="Netlify Image"
              bgc="gray-300"
            />

            <ImageComponent src={NpmImage} alt="Npm Image" bgc="gray-300" />
          </div>
        </div>

        <div className="flex mt-8 px-2">
          <div className="w-1.5 xl:h-13 lg:h-13 md:h-18 sm:h-26 h-32 mr-2 mb-4 transition-ease-in-out duration-200 bg-[#D0D7DE] dark:bg-[#30363D]"></div>
          <p className="text-[#656D8C] dark:text-[#848D97] ml-2">
            Continuously exploring new tools, frameworks, and best practices to
            improve scalability, maintainability, and developer experience.
          </p>
        </div>
      </div>
    </>
  );
};
