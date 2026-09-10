const experiences = [
  {
    role: "ICT Instructor",
    organization: "Srizon Coaching Center, Pabna",
    duration: "2023 - Present",
    description:
      "Teaching ICT courses, preparing learning materials, conducting assessments, and helping students develop ICT knowledge and problem-solving skills.",
  },

  {
    role: "Joint General Secretary",
    organization: "PUST Career and Entrepreneurship Club",
    duration: "2025 - 2026",
    description:
      "Participated in organizational activities, student development initiatives, and leadership responsibilities.",
  },

  {
    role: "Assistant Research and Course Development Secretary",
    organization: "Solver Green, PUST",
    duration: "2024 - 2025",
    description:
      "Supported research activities and contributed to course development initiatives.",
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          Experience & Leadership
        </h2>


        <div className="mt-12 space-y-6">

          {experiences.map((exp) => (

            <div
              key={exp.role}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400"
            >

              <div className="flex flex-col justify-between gap-2 md:flex-row">

                <h3 className="text-2xl font-semibold text-cyan-400">
                  {exp.role}
                </h3>

                <span className="text-gray-400">
                  {exp.duration}
                </span>

              </div>


              <h4 className="mt-2 text-lg">
                {exp.organization}
              </h4>


              <p className="mt-4 text-gray-300">
                {exp.description}
              </p>


            </div>

          ))}

        </div>

      </div>

    </section>
  );
}