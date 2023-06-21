import { ReactNode } from "react";
import useTitle from "../hooks/use-title";
import { ReactComponent as ExternalLink } from "../icons/external-link.svg";

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
          <div
            key={project.name}
            className="border rounded-md dark:border-stone-700"
          >
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-1 p-4 border-b dark:border-stone-700 hover:bg-stone-200 dark:hover:bg-stone-900"
            >
              <h1>{project.name}</h1>
              <ExternalLink />
            </a>
            <div className="p-4">{project.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
