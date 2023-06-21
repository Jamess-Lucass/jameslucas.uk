import useTitle from "../hooks/use-title";

function Contact() {
  useTitle("Contact • James");

  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-xl">Contact</h1>

      <p>Thanks for taking the time to visit.</p>

      <p>
        The best place to contact me is via a{" "}
        <a
          href="https://twitter.com/messages/compose?recipient_id=743274449567367168"
          className="text-blue-600 hover:underline"
        >
          Twitter DM
        </a>
        .<br /> Alternatively, you may send me an email at{" "}
        <a
          href="mailto:james@jameslucas.uk"
          className="text-blue-600 hover:underline"
        >
          james@jameslucas.uk
        </a>
      </p>

      <h1 className="text-lg font-semibold">Other</h1>

      <ul className="list-disc ml-8">
        <li>
          <a
            href="https://github.com/Jamess-Lucass"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/james-lucas-6b2b6a169/"
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
