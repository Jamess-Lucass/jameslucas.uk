import useTitle from "../hooks/use-title";

function Home() {
  useTitle("James Lucas • Lead Software Developer");

  const dateOfBirth = new Date("2000-08-29");
  const today = new Date();

  const myAge =
    new Date(today.getTime() - dateOfBirth.getTime()).getUTCFullYear() - 1970;

  return (
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h1 className="font-bold text-xl">Who am I?</h1>

      <p>
        I'm a {myAge}-year-old software developer based in London, UK. I like
        working across the whole stack and being involved in the whole journey,
        from the first idea right through to shipping it to production.
      </p>

      <p>
        I'm a big fan of automation and defining things declaratively, so
        everything stays reproducible.
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
