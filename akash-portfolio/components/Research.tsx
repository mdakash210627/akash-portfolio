const researchAreas = [
  {
    title: "Artificial Intelligence",
    description:
      "Developing intelligent systems using modern AI techniques."
  },
  {
    title: "Deep Learning",
    description:
      "Exploring neural networks and advanced deep learning architectures."
  },
  {
    title: "Computer Vision",
    description:
      "Building vision-based solutions for real-world applications."
  },
  {
    title: "Biomedical Imaging",
    description:
      "Applying AI techniques for medical image analysis and healthcare."
  },
  {
    title: "Explainable AI",
    description:
      "Developing interpretable AI models for trustworthy decisions."
  },
  {
    title: "Signal Processing",
    description:
      "Analyzing and processing signals using computational methods."
  }
];


export default function Research() {
  return (
    <section
      id="research"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          Research Interests
        </h2>


        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {researchAreas.map((item) => (

            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-cyan-400"
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {item.title}
              </h3>


              <p className="mt-4 text-gray-300">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}