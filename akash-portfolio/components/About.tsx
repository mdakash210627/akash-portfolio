export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          About Me
        </h2>


        <p className="mx-auto mt-8 max-w-4xl text-center text-lg text-gray-300">
          I am Md. Akash Miya, an Information and Communication
          Engineering graduate and AI researcher working on
          Artificial Intelligence, Deep Learning, Computer Vision,
          Biomedical Imaging, and Explainable AI.
        </p>


        <div className="mt-12 grid gap-6 md:grid-cols-3">


          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-semibold text-cyan-400">
              🎓 Education
            </h3>

            <p className="mt-4 text-gray-300">
              B.Sc. Engineering in Information and Communication
              Engineering from Pabna University of Science and
              Technology.
            </p>

          </div>



          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-semibold text-cyan-400">
              🔬 Research
            </h3>

            <p className="mt-4 text-gray-300">
              Research interests include Deep Learning,
              Computer Vision, Biomedical Imaging,
              Signal Processing and Explainable AI.
            </p>

          </div>



          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            <h3 className="text-xl font-semibold text-cyan-400">
              📚 Publications
            </h3>

            <p className="mt-4 text-gray-300">
              Research publications in IEEE conferences
              and Springer Nature platforms.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}