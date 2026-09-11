const skills = [
  {
    icon: "💻",
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
    icon: "🤖",
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
    icon: "🛠️",
    category: "Research & Development Tools",
    items: [
      "Jupyter Notebook",
      "Kaggle",
      "Visual Studio Code",
      "Proteus",
      "MATLAB",
      "Cisco Packet Tracer",
      "Git",
      "Linux",
    ],
  },
];



export default function Skills() {

  return (

    <section
      id="skills"
      className="
      bg-white
      px-6
      py-24
      text-slate-900
      "
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

            Skills & Technologies

          </h2>



          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >

            Technical expertise in programming,
            artificial intelligence, machine learning
            and research tools.

          </p>


        </div>






        {/* Skill Cards */}



        <div
          className="
          mt-14
          grid
          gap-8
          md:grid-cols-3
          "
        >



        {
          skills.map((skill)=>(


            <div

              key={skill.category}

              className="
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




              {/* Icon */}


              <div
                className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-cyan-50
                text-3xl
                "
              >

                {skill.icon}

              </div>






              {/* Category */}


              <h3
                className="
                mt-6
                text-xl
                font-bold
                text-slate-900
                "
              >

                {skill.category}

              </h3>







              {/* Skills */}


              <div
                className="
                mt-6
                flex
                flex-wrap
                gap-3
                "
              >



              {
                skill.items.map((item)=>(


                  <span

                    key={item}

                    className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-slate-700
                    transition
                    hover:border-cyan-400
                    hover:bg-cyan-50
                    hover:text-cyan-700
                    "

                  >

                    {item}

                  </span>


                ))
              }



              </div>



            </div>


          ))
        }



        </div>



      </div>


    </section>


  );

}