function Home() {
  const myBirthDate = new Date("2000-08-29");
  const myAge = Math.abs(
    new Date(Date.now() - myBirthDate.getTime()).getUTCFullYear() - 1970
  );

  return (
    <div className="flex flex-col gap-4 lg:w-1/2">
      <h1 className="font-bold text-xl">Who am i?</h1>

      <p>
        I am a {myAge} year old developer, living in the UK. I enjoy working on
        every part of the stack, being able to create a product from scratch and
        be confident in designing, developing, testing and deploying the
        application to production.
      </p>

      <p>
        I have a strong interest in automation and attempting to automate and
        streamline as many processes as possible, I am very interested in DevOps
        and solving fundamental business problems. For example, setting up
        things like continuous integration (CI) and continuous deployment (CD),
        including automated tests so the developer can focus on just writing
        code and has that safety net of regression tests from the testing
        pipeline if any changes have effected anything. Ultimatley increasing
        efficiency.
      </p>

      <p>
        I am all about picking the right tool for the job, doing the research
        needed to come to a sensible decision on how to solve a given problem.
      </p>
    </div>
  );
}

export default Home;
