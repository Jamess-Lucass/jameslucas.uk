import useTitle from "../hooks/use-title";

function Home() {
  useTitle("James Lucas • Lead Software Developer");

  return (
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h1 className="font-bold text-xl">Who am I?</h1>

      <p>Hey, I'm James, a Lead Software Developer based in London.</p>

      <p>
        I enjoy working across the whole stack: backend, frontend, and
        infrastructure. I am at my happiest when I get to own something from
        idea through to production. I'm all about picking the right tool for the
        job and will always learn and pick up whatever a project actually needs.
      </p>

      <p>
        I'm big on automation, declarative configuration and reproducible
        environments, being able to tear something down and, with ease, bring it
        back up to where it was without issues.
      </p>

      <p>
        You can find my projects over on{" "}
        <a
          href="https://github.com/Jamess-Lucass"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
        . I've also contributed to a few open source projects like Argo CD,
        gofiber/fiber and Elastic's Go APM agent.
      </p>
    </div>
  );
}

export default Home;
