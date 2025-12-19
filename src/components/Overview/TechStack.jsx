import { ImageComponent } from "./ImageComponent.jsx";

export const TechStack = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl mb-2 font-medium">💻 Tech Stack</h2>
        <hr />

        <div>
          <h1 className="flex justify-center mt-4 text-2xl font-bold">
            Frontend
          </h1>
          <div className="flex justify-center gap-2">
            <ImageComponent
              src="React-icon.svg"
              alt="React Image"
              bgc="gray-800"
            />

            <ImageComponent
              src="Javascript-icon.svg"
              alt="JavaScript Image"
              bgc="yellow-300"
            />

            <ImageComponent
              src="HTML5-icon.svg"
              alt="HTML5 Image"
              bgc="orange-400"
            />

            <ImageComponent
              src="CSS3-icon.svg"
              alt="CSS3 Image"
              bgc="blue-400"
            />

            <ImageComponent
              src="Tailwind_CSS-icon.svg"
              alt="Tailwind CSS Image"
              bgc="gray-800"
            />
            <ImageComponent
              src="Bootstrap-icon.svg"
              alt="Bootstrap Image"
              bgc="gray-200"
            />

            <ImageComponent
              src="Material-ui-icon.svg"
              alt="Material UI Image"
              bgc="gray-800"
            />

            <ImageComponent
              src="Redux-icon.svg"
              alt="Redux Image"
              bgc="gray-200"
            />
          </div>
        </div>

        <div>
          <h1 className="flex justify-center mt-8 text-2xl font-bold">
            Backend
          </h1>
          <div className="flex justify-center gap-2">
            <ImageComponent
              src="Node-js-icon.svg"
              alt="Node.js Image"
              bgc="gray-200"
            />
            <ImageComponent
              src="Expressjs-icon.svg"
              alt="Express.js Image"
              bgc="gray-200"
            />
            <ImageComponent
              src="Mongodb-icon.svg"
              alt="MongoDB Image"
              bgc="gray-200"
            />

            <ImageComponent
              src="Mysql-icon.svg"
              alt="MySql Image"
              bgc="gray-200"
            />
            <ImageComponent src="Ejs-icon.svg" alt="EJS Image" bgc="gray-200" />
            <ImageComponent
              src="Postman-icon.svg"
              alt="Postman Image"
              bgc="gray-200"
            />
          </div>
        </div>

        <div>
          <h1 className="flex justify-center mt-8 text-2xl font-bold">
            Languages
          </h1>
          <div className="flex justify-center gap-2">
            <ImageComponent
              src="Java-icon.svg"
              alt="Java Image"
              bgc="gray-300"
            />
            <ImageComponent
              src="Python-icon.svg"
              alt="Python Image"
              bgc="gray-300"
            />
            <ImageComponent
              src="Javascript-icon.svg"
              alt="JavaScript Image"
              bgc="yellow-300"
            />

            <ImageComponent src="Sql-icon.svg" alt="SQL Image" bgc="gray-300" />
          </div>
        </div>

        <div>
          <h1 className="flex justify-center mt-8 text-2xl font-bold">
            Tools & Technologies
          </h1>
          <div className="flex justify-center gap-2">
            <ImageComponent src="Git-icon.svg" alt="Git Image" bgc="gray-300" />
            <ImageComponent
              src="Github-icon.svg"
              alt="Github Image"
              bgc="gray-300"
            />
            <ImageComponent
              src="Vs-code-icon.svg"
              alt="Vs Code Image"
              bgc="gray-300"
            />

            <ImageComponent
              src="Hoppscotch-icon.svg"
              alt="Hoppscotch Image"
              bgc="gray-300"
            />
            <ImageComponent
              src="Vercel-icon.svg"
              alt="Vercel Image"
              bgc="gray-300"
            />

            <ImageComponent
              src="Netlify-icon.svg"
              alt="Netlify Image"
              bgc="gray-300"
            />

            <ImageComponent src="Npm-icon.svg" alt="Npm Image" bgc="gray-300" />
          </div>
        </div>
      </div>
    </>
  );
};
