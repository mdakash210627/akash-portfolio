export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white px-6 py-24 text-slate-900"
    >

      <div className="mx-auto max-w-5xl text-center">


        {/* Heading */}

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
          Let's Connect
        </h2>



        <p
          className="
          mx-auto
          mt-6
          max-w-3xl
          text-lg
          text-slate-600
          leading-relaxed
          "
        >

          I am open to research collaborations,
          AI projects, PhD opportunities,
          and academic discussions in Artificial Intelligence,
          Deep Learning and Computer Vision.

        </p>




        {/* Contact Cards */}


        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-3
          "
        >



          {/* Email */}


          <a
            href="mailto:mdakashmiya0827@gmail.com"
            className="
            group
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
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-cyan-100
              text-3xl
              "
            >
              📧
            </div>


            <h3
              className="
              mt-5
              text-xl
              font-bold
              "
            >
              Email
            </h3>


            <p
              className="
              mt-2
              text-sm
              text-slate-500
              "
            >
              Contact me for research collaboration
            </p>


          </a>






          {/* LinkedIn */}


          <a
            href="https://linkedin.com/in/md-akash-178192326/"
            target="_blank"
            className="
            group
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition
            hover:-translate-y-2
            hover:border-blue-400
            hover:shadow-xl
            "
          >


            <div
              className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-blue-100
              text-3xl
              "
            >
              💼
            </div>



            <h3
              className="
              mt-5
              text-xl
              font-bold
              "
            >
              LinkedIn
            </h3>



            <p
              className="
              mt-2
              text-sm
              text-slate-500
              "
            >
              Professional networking
            </p>



          </a>







          {/* GitHub */}



          <a
            href="https://github.com/mdakash210627"
            target="_blank"
            className="
            group
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-8
            shadow-lg
            transition
            hover:-translate-y-2
            hover:border-purple-400
            hover:shadow-xl
            "
          >


            <div
              className="
              mx-auto
              flex
              h-16
              w-16
              justify-center
              items-center
              rounded-2xl
              bg-purple-100
              text-3xl
              "
            >
              💻
            </div>



            <h3
              className="
              mt-5
              text-xl
              font-bold
              "
            >
              GitHub
            </h3>



            <p
              className="
              mt-2
              text-sm
              text-slate-500
              "
            >
              Explore my research code
            </p>



          </a>



        </div>




        {/* Bottom CTA */}


        <div
          className="
          mt-14
          rounded-3xl
          bg-slate-50
          border
          border-slate-200
          p-8
          "
        >

          <h3
            className="
            text-2xl
            font-bold
            "
          >
            Interested in Collaboration?
          </h3>


          <p
            className="
            mt-3
            text-slate-600
            "
          >

            Feel free to reach out for AI research,
            machine learning projects and academic opportunities.

          </p>


          <a
            href="mailto:mdakashmiya0827@gmail.com"
            className="
            mt-6
            inline-block
            rounded-full
            bg-cyan-500
            px-8
            py-3
            font-semibold
            text-white
            transition
            hover:bg-cyan-600
            "
          >
            Send Email
          </a>


        </div>


      </div>


    </section>
  );
}