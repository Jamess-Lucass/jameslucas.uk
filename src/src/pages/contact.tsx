import useTitle from "../hooks/use-title";

function Contact() {
  useTitle("Contact • James Lucas");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-xl">Contact</h1>

      <p>
        The best way to reach me is email:{" "}
        <a
          href="mailto:james@jameslucas.uk"
          className="text-blue-600 hover:underline"
        >
          james@jameslucas.uk
        </a>
      </p>

      <ul className="list-disc ml-8">
        <li>
          <a
            href="https://github.com/Jamess-Lucass"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/james-lucas3"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
