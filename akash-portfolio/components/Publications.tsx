const publications = [
  {
    title:
      "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",
    venue:
      "2025 28th International Conference on Computer and Information Technology (ICCIT), IEEE",
    role: "First Author",
    year: "2026",
  },

  {
    title:
      "Machine Learning-Based Hepatitis C Detection Using Ensemble Boosting",
    venue:
      "Lecture Notes in Networks and Systems (LNNS), Springer Nature",
    role: "",
    year: "2026",
  },

  {
    title:
      "Machine Learning-Based Prediction of Nightmares in Children: A Pediatric Psychological Integration",
    venue:
      "2025 IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS)",
    role: "",
    year: "2026",
  },

  {
    title:
      "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",
    venue:
      "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",
    role: "",
    year: "2026",
  },

  {
    title:
      "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",
    venue:
      "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",
    role: "",
    year: "2026",
  },

  {
    title:
      "Comparative Evaluation of CNN Backbones with Explainable AI for Multi-Class Chest X-Ray Classification",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), IEEE",
    role: "",
    year: "2026",
  },

  {
    title:
      "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), IEEE",
    role: "",
    year: "2026",
  },
];



export default function Publications() {

  return (

    <section
      id="publications"
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

            Publications & Research Work

          </h2>



          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >

            Peer-reviewed research contributions in Artificial Intelligence,
            Machine Learning, Computer Vision and Healthcare AI.

          </p>


        </div>





        {/* Publication List */}


        <div
          className="
          mt-14
          space-y-8
          "
        >



        {
          publications.map((paper,index)=>(


            <div

              key={index}

              className="
              relative
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



              {/* Number + Year */}


              <div
                className="
                flex
                items-center
                justify-between
                "
              >



                <span
                  className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-cyan-100
                  font-bold
                  text-cyan-700
                  "
                >

                  {index + 1}

                </span>




                <span
                  className="
                  rounded-full
                  bg-slate-100
                  px-4
                  py-1
                  text-sm
                  font-semibold
                  text-slate-700
                  "
                >

                  {paper.year}

                </span>


              </div>






              {/* Title */}


              <h3
                className="
                mt-6
                text-xl
                md:text-2xl
                font-bold
                leading-relaxed
                text-slate-900
                "
              >

                {paper.title}

              </h3>






              {/* Venue */}


              <p
                className="
                mt-4
                leading-relaxed
                text-slate-600
                "
              >

                {paper.venue}

              </p>







              {/* Author */}


              {
                paper.role && (

                  <div
                    className="
                    mt-5
                    inline-block
                    rounded-full
                    bg-cyan-50
                    px-4
                    py-2
                    text-sm
                    font-semibold
                    text-cyan-700
                    "
                  >

                    ⭐ {paper.role}

                  </div>

                )
              }





              {/* Future Buttons */}


              <div
                className="
                mt-6
                flex
                gap-4
                "
              >

                <button
                  className="
                  rounded-full
                  border
                  border-slate-300
                  px-5
                  py-2
                  text-sm
                  font-medium
                  text-slate-700
                  hover:bg-slate-900
                  hover:text-white
                  transition
                  "
                >

                  View Paper

                </button>



                <button
                  className="
                  rounded-full
                  bg-cyan-500
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  hover:bg-cyan-600
                  transition
                  "
                >

                  DOI

                </button>


              </div>



            </div>


          ))
        }



        </div>



      </div>


    </section>

  );

}