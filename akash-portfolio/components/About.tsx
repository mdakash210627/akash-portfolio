import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-24 text-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            About Me
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Building AI for Real-World Impact
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-slate-600">
            I am Md. Akash Miya, an Information and Communication Engineering
            graduate and AI researcher working on Artificial Intelligence,
            Deep Learning, Computer Vision, Biomedical Imaging, and
            Explainable AI. My research focuses on developing reliable,
            interpretable and practical AI solutions for real-world applications.
          </p>
        </div>

        {/* Large Image */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
          <div className="relative h-[280px] w-full md:h-[420px]">
            <Image
              src="/about-photo.png"
              alt="Md. Akash Miya academic moment"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid gap-6 border-t border-slate-200 bg-slate-50 px-6 py-6 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Focus
              </p>
              <p className="mt-2 text-slate-700">
                Artificial Intelligence, Deep Learning, Computer Vision,
                Biomedical Imaging, and Explainable AI.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Goal
              </p>
              <p className="mt-2 text-slate-700">
                To design trustworthy, interpretable and impactful AI systems
                for healthcare and practical decision-making.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-600">
                Strength
              </p>
              <p className="mt-2 text-slate-700">
                Research mindset, academic writing, model development,
                and solving real-world problems with AI.
              </p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-3xl">
              🎓
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Education
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              B.Sc. Engineering in Information and Communication Engineering
              from Pabna University of Science and Technology.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
              🔬
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Research
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Research interests include Deep Learning, Computer Vision,
              Biomedical Imaging, Signal Processing and Explainable AI.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
              📚
            </div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              Publications
            </h3>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Research publications in IEEE conferences and Springer Nature
              platforms covering AI, Machine Learning and Computer Vision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}