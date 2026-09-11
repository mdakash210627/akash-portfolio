const researchAreas = [
  {
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems using machine learning and deep learning approaches for real-world applications.",
  },

  {
    icon: "🧠",
    title: "Deep Learning",
    description:
      "Exploring neural networks, CNNs, transformers, and advanced deep learning architectures for intelligent systems.",
  },

  {
    icon: "👁️",
    title: "Computer Vision",
    description:
      "Building vision-based AI solutions including image classification, object recognition, and visual understanding.",
  },

  {
    icon: "🏥",
    title: "Biomedical Imaging",
    description:
      "Applying artificial intelligence techniques for medical image analysis, disease detection, and healthcare applications.",
  },

  {
    icon: "🔍",
    title: "Explainable AI",
    description:
      "Developing interpretable AI models using explainability techniques to build trustworthy intelligent systems.",
  },

  {
    icon: "📡",
    title: "Signal Processing",
    description:
      "Analyzing and processing biomedical and computational signals using machine learning-based approaches.",
  },
];



export default function Research() {


  return (

    <section
      id="research"
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

            Research Interests

          </h2>



          <p
            className="
            mx-auto
            mt-5
            max-w-3xl
            text-lg
            text-slate-600
            "
          >

            My research focuses on developing reliable and
            interpretable artificial intelligence systems
            combining deep learning, computer vision,
            biomedical applications and signal processing.

          </p>


        </div>





        {/* Research Cards */}



        <div
          className="
          mt-14
          grid
          gap-8
          md:grid-cols-3
          "
        >



        {
          researchAreas.map((item)=>(


            <div

              key={item.title}

              className="
              group
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-8
              shadow-lg
              transition
              duration-300
              hover:-translate-y-3
              hover:border-cyan-400
              hover:shadow-xl
              "

            >




              {/* Icon */}


              <div
                className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-50
                text-4xl
                transition
                group-hover:scale-110
                "
              >

                {item.icon}

              </div>






              {/* Title */}



              <h3

                className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                "

              >

                {item.title}

              </h3>






              {/* Description */}



              <p

                className="
                mt-4
                leading-relaxed
                text-slate-600
                "

              >

                {item.description}

              </p>




              {/* Bottom line */}


              <div
                className="
                mt-6
                h-1
                w-12
                rounded-full
                bg-cyan-500
                transition-all
                group-hover:w-full
                "
              />




            </div>


          ))
        }



        </div>



      </div>


    </section>


  );

}