import Image from "next/image";

import Navbar from "@/components/Navbar";
import About from "../components/About";
import Research from "../components/Research";
import Publications from "../components/Publications";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import GithubProjects from "../components/GithubProjects";


export default function Home() {

  return (

    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">

      <Navbar />


      {/* HERO SECTION */}
      

      <section
        className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-32
        md:pt-40
        pb-16
        overflow-hidden
        "
      >


        {/* Background Glow */}

        <div
          className="
          absolute
          top-20
          left-20
          h-72
          w-72
          rounded-full
          bg-cyan-300/30
          blur-3xl
          animate-pulse
          "
        />


        <div
          className="
          absolute
          bottom-20
          right-20
          h-96
          w-96
          rounded-full
          bg-blue-300/20
          blur-3xl
          animate-pulse
          "
        />




        <div
          className="
          relative
          z-10
          max-w-5xl
          text-center
          "
        >



          {/* PROFILE PHOTO */}

          <div
            className="
            mx-auto
            mt-6
            mb-8
            relative
            h-44
            w-44
            rounded-full
            overflow-hidden
            border-4
            from-cyan-400
            via-blue-500
            to-purple-500
            shadow-xl
            "
          >

            <div
              className="
              h-full
              w-full
              rounded-full
              overflow-hidden
              bg-white
              "
            >

              <Image

                src="/Profile.png"

                alt="Md. Akash Miya"

                fill

                className="object-cover object-top"

                priority

              />

            </div>


          </div>




          {/* NAME */}

          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            tracking-tight
            bg-gradient-to-r
            from-slate-900
            to-slate-600
            bg-clip-text
            text-transparent
            "
          >

            Md. Akash Miya

          </h1>




          {/* TITLE */}

          <h2
            className="
            mt-5
            text-xl
            md:text-3xl
            font-semibold
            text-cyan-600
            "
          >

            Researcher | Software Engineer

          </h2>




          {/* DESCRIPTION */}

          <p
            className="
            mx-auto
            mt-6
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
            "
          >

            Researching Artificial Intelligence,
            Deep Learning, Computer Vision,
            Biomedical Imaging and Explainable AI
            for reliable healthcare solutions.

          </p>




          {/* BUTTONS */}


          <div
            className="
            mt-10
            flex
            flex-wrap
            justify-center
            gap-5
            "
          >


            <a

              href="#research"

              className="
              rounded-full
              bg-cyan-500
              px-8
              py-3
              font-semibold
              text-white
              shadow-lg
              transition
              hover:scale-105
              hover:bg-cyan-600
              "

            >

              🔬 View Research

            </a>




            <a

              href="/Md_Akash_Miya_CV.pdf"

              download

              className="
              rounded-full
              border
              border-slate-300
              px-8
              py-3
              font-semibold
              text-slate-700
              transition
              hover:bg-slate-900
              hover:text-white
              hover:scale-105
              "

            >

              📄 Download CV

            </a>


          </div>




          {/* SOCIAL LINKS */}

          <div
            className="
            mt-10
            flex
            justify-center
            gap-8
            text-slate-500
            "
          >


            <a
              href="https://scholar.google.com/"
              target="_blank"
              className="hover:text-cyan-600 transition"
            >
              Google Scholar
            </a>



            <a
              href="https://github.com/mdakash210627"
              target="_blank"
              className="hover:text-cyan-600 transition"
            >
              GitHub
            </a>



            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-cyan-600 transition"
            >
              LinkedIn
            </a>


          </div>




          {/* RESEARCH TAGS */}


          <div
            className="
            mt-12
            flex
            flex-wrap
            justify-center
            gap-4
            "
          >

            {
              [
                "Deep Learning",
                "Computer Vision",
                "Medical AI",
                "Explainable AI"
              ].map((item)=>(


                <span
                  key={item}
                  className="
                  rounded-full
                  border
                  border-slate-200
                  bg-white
                  px-5
                  py-2
                  text-sm
                  text-slate-700
                  shadow-sm
                  hover:border-cyan-400
                  transition
                  "
                >

                  {item}

                </span>


              ))
            }


          </div>



        </div>


      </section>




      {/* SECTIONS */}


      <About />

      <Research />

      <Publications />

      <Skills />

      <Experience />

      <GithubProjects />

      <Contact />


    </main>

  );
}