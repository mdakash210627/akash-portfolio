export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>


          <p
            className="
            mx-auto
            mt-6
            max-w-4xl
            text-lg
            leading-relaxed
            text-slate-600
            "
          >

            I am Md. Akash Miya, an Information and Communication
            Engineering graduate and AI researcher working on
            Artificial Intelligence, Deep Learning, Computer Vision,
            Biomedical Imaging, and Explainable AI.

            My research focuses on developing reliable and
            interpretable AI solutions for real-world applications.

          </p>

        </div>




        {/* Cards */}


        <div
          className="
          mt-14
          grid
          gap-8
          md:grid-cols-3
          "
        >



          {/* Education Card */}


          <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition
            hover:-translate-y-2
            hover:shadow-xl
            hover:border-cyan-400
            "
          >

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-cyan-100
              text-3xl
              "
            >
              🎓
            </div>


            <h3
              className="
              mt-6
              text-2xl
              font-bold
              text-slate-900
              "
            >
              Education
            </h3>


            <p
              className="
              mt-4
              text-slate-600
              leading-relaxed
              "
            >

              B.Sc. Engineering in Information and
              Communication Engineering from
              Pabna University of Science and Technology.

            </p>


          </div>





          {/* Research Card */}


          <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition
            hover:-translate-y-2
            hover:shadow-xl
            hover:border-cyan-400
            "
          >

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-3xl
              "
            >
              🔬
            </div>


            <h3
              className="
              mt-6
              text-2xl
              font-bold
              text-slate-900
              "
            >
              Research
            </h3>


            <p
              className="
              mt-4
              text-slate-600
              leading-relaxed
              "
            >

              Research interests include Deep Learning,
              Computer Vision, Biomedical Imaging,
              Signal Processing and Explainable AI.

            </p>


          </div>






          {/* Publication Card */}


          <div
            className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition
            hover:-translate-y-2
            hover:shadow-xl
            hover:border-cyan-400
            "
          >

            <div
              className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-purple-100
              text-3xl
              "
            >
              📚
            </div>


            <h3
              className="
              mt-6
              text-2xl
              font-bold
              text-slate-900
              "
            >
              Publications
            </h3>


            <p
              className="
              mt-4
              text-slate-600
              leading-relaxed
              "
            >

              Research publications in IEEE conferences
              and Springer Nature platforms covering
              AI, Machine Learning and Computer Vision.

            </p>


          </div>



        </div>


      </div>


    </section>
  );
}