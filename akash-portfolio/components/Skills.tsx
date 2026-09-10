const skills = [
  {
    category: "Programming Languages",
    items: [
      "Python",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
      "SQL",
      "MATLAB",
    ],
  },

  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Pandas",
    ],
  },

  {
    category: "Research & Tools",
    items: [
      "Jupyter Notebook",
      "Kaggle",
      "Visual Studio Code",
      "Proteus",
      "MATLAB",
      "Cisco Packet Tracer",
    ],
  },
];


export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          Skills & Technologies
        </h2>


        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {skills.map((skill) => (

            <div
              key={skill.category}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400 transition"
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {skill.category}
              </h3>


              <div className="mt-5 flex flex-wrap gap-2">

                {skill.items.map((item) => (

                  <span
                    key={item}
                    className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                  >
                    {item}
                  </span>

                ))}

              </div>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}