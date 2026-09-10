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
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Md. Akash Miya
        </h1>

        <h2 className="mt-6 text-2xl text-cyan-400 md:text-4xl">
          AI Researcher | Machine Learning Engineer
        </h2>

        <p className="mt-6 max-w-3xl text-lg text-gray-300">
          Researching Artificial Intelligence, Deep Learning,
          Computer Vision, Biomedical Imaging and Explainable AI.
        </p>


        <div className="mt-8 flex gap-4">

          <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-black hover:bg-cyan-400">
            View Research
          </button>


          <a
           href="/Md_Akash_Miya_CV.pdf"
           download
           className="rounded-full border border-gray-500 px-6 py-3 hover:bg-white hover:text-black"
          >
           Download CV
          </a>

        </div>


        <div className="mt-12 flex gap-6 text-gray-400">

          <span>Deep Learning</span>
          <span>Computer Vision</span>
          <span>Explainable AI</span>

        </div>


      </section>
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