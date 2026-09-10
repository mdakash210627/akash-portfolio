export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-4xl font-bold">
          Get In Touch
        </h2>


        <p className="mt-6 text-lg text-gray-300">
          I am open to research collaborations,
          AI projects, and academic opportunities.
        </p>


        <div className="mt-10 grid gap-5 md:grid-cols-3">


          <a
            href="mailto:mdakashmiya0827@gmail.com"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400"
          >
            📧
            <br />
            Email
          </a>


          <a
            href="https://linkedin.com/in/md-akash-178192326/"
            target="_blank"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400"
          >
            💼
            <br />
            LinkedIn
          </a>


          <a
            href="https://github.com"
            target="_blank"
            className="rounded-xl border border-white/10 bg-white/5 p-5 hover:border-cyan-400"
          >
            💻
            <br />
            GitHub
          </a>


        </div>


      </div>

    </section>
  );
}