import { ReactNode } from "react";
import useTitle from "../hooks/use-title";

type Project = {
  name: string;
  link: string;
  description: ReactNode;
};

const projects: Project[] = [
  {
    name: "Ecommerce Shop",
    link: "https://github.com/Jamess-Lucass?tab=repositories&q=ecommerce",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          This project was built to simulate a real world ecommerce application,
          using microservices that are deployed to Kubernetes, I have purposely
          developed the services with different languages and libraries to gain
          exposure to different languages and have a nice foundation across many
          languages that I can perform proof-of-concepts with on a real-world
          application.
        </p>

        <p>
          There are currently 9 individual services running, login-ui,
          identity-service, user-service, shop-ui, internal-ui, catalog-service,
          basket-service, order-service, email-service, with the 10th being the
          gitops repository for all the automation to take place from.
        </p>
      </div>
    ),
  },
  {
    name: "GoatQuery",
    link: "https://github.com/orgs/goatquery/repositories",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          This project is a collection of SDKs that conform to a given spec to
          aid in building REST APIs that support functionality like paging,
          ordering, filtering, searching, counting and selecting.
        </p>

        <p>
          The reason for me creating this project is I found myself creating
          many REST APIs that needed to offer basic table functionality from a
          UI, I could have queried the entire data from the UI and performed all
          the operations on the client, but this is not scalable or performant.
          I potentially could have utilized something like GraphQL but do not
          have experience with this and I will always have a use case to offer a
          REST API.
        </p>

        <p>
          I could not find many standards for all the features mentioned above,
          the closest being OData but this goes far beyond the scope I wanted
          and is very opinionated with the entire API, it also only supports C#
          and I wanted to utilize multiple languages.
        </p>
      </div>
    ),
  },
  {
    name: "Dependency Updater",
    link: "https://github.com/Jamess-Lucass/dependency-updater",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          This project is similar to dependabot for GitHub, but is written in Go
          and is not tied towards the GitHub ecosystem.
        </p>

        <p>
          It can be run as a container and all you have to do is specific the
          repository, any credentials, the package manager and the path to the
          given file, it will then detect any updates in your package and a
          submit a pull request for each package upgrade.
        </p>

        <p>
          I run this as a Kubernetes cronjob on a nightly basis and automates
          the process of checking for updates and creating pull requests.
        </p>
      </div>
    ),
  },
  {
    name: "Personal Website",
    link: "https://github.com/Jamess-Lucass/jameslucas.uk",
    description: (
      <div className="flex flex-col gap-4">
        <p>
          This project is the website you're viewing currently, my personal
          website.
        </p>

        <p>This is built using React, Vite and Tailwind CSS. </p>
      </div>
    ),
  },
];

function Projects() {
  useTitle("Projects • James");

  return (
    <>
      <h1 className="mb-4 font-bold text-xl">Projects</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div key={project.name} className="border rounded-md">
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-1 p-4 border-b hover:bg-slate-100"
            >
              <h1>{project.name}</h1>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="p-4">{project.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
