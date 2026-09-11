const experiences = [
  {
    role: "ICT Instructor",
    organization: "Srizon Coaching Center, Pabna",
    duration: "2023 - Present",
    description:
      "Teaching ICT courses, preparing learning materials, conducting assessments, and helping students develop ICT knowledge and problem-solving skills.",
    icon: "👨‍🏫",
  },

  {
    role: "Joint General Secretary",
    organization: "PUST Career and Entrepreneurship Club",
    duration: "2025 - 2026",
    description:
      "Participated in organizational activities, student development initiatives, and leadership responsibilities.",
    icon: "🚀",
  },

  {
    role: "Assistant Research and Course Development Secretary",
    organization: "Solver Green, PUST",
    duration: "2024 - 2025",
    description:
      "Supported research activities and contributed to course development initiatives.",
    icon: "🔬",
  },
];


export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-white px-6 py-24 text-slate-900"
    >

      <div className="mx-auto max-w-6xl">


        {/* Heading */}

        <div className="text-center">

          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            bg-gradient-to-r
            from-slate-900
            to-cyan-600
            bg-clip-text
            text-transparent
            "
          >
            Experience & Leadership
          </h2>


          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >
            Professional experience, leadership activities and academic involvement.
          </p>

        </div>





        {/* Timeline */}

        <div className="relative mt-14">


          {/* Vertical line */}

          <div
            className="
            absolute
            left-5
            top-0
            hidden
            h-full
            w-0.5
            bg-slate-200
            md:block
            "
          />



          <div className="space-y-10">


          {experiences.map((exp, index) => (

            <div
              key={exp.role}
              className="
              relative
              flex
              gap-8
              "
            >



              {/* Icon */}

              <div
                className="
                hidden
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-cyan-100
                text-2xl
                md:flex
                "
              >

                {exp.icon}

              </div>





              {/* Card */}


              <div
                className="
                flex-1
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-lg
                transition
                hover:-translate-y-2
                hover:border-cyan-400
                hover:shadow-xl
                "
              >



                <div
                  className="
                  flex
                  flex-col
                  justify-between
                  gap-3
                  md:flex-row
                  "
                >


                  <h3
                    className="
                    text-2xl
                    font-bold
                    text-slate-900
                    "
                  >
                    {exp.role}
                  </h3>



                  <span
                    className="
                    rounded-full
                    bg-cyan-50
                    px-4
                    py-1
                    text-sm
                    font-medium
                    text-cyan-700
                    "
                  >
                    {exp.duration}
                  </span>


                </div>




                <h4
                  className="
                  mt-4
                  text-lg
                  font-semibold
                  text-cyan-600
                  "
                >

                  {exp.organization}

                </h4>




                <p
                  className="
                  mt-4
                  leading-relaxed
                  text-slate-600
                  "
                >

                  {exp.description}

                </p>



              </div>



            </div>


          ))}


          </div>



        </div>


      </div>


    </section>
  );
}