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
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
    role: "",
    year: "2026",
  },

  {
    title:
      "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN)",
    role: "",
    year: "2026",
  },
];


export default function Publications() {
  return (
    <section
      id="publications"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          Publications & Research Work
        </h2>


        <div className="mt-12 space-y-6">

          {publications.map((paper, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400"
            >

              <div className="flex items-center justify-between">

                <span className="text-cyan-400 font-semibold">
                  {paper.year}
                </span>

              </div>


              <h3 className="mt-3 text-xl font-semibold">
                {paper.title}
              </h3>


              <p className="mt-3 text-gray-300">
                {paper.venue}
              </p>


              {paper.role && (
                <p className="mt-2 text-cyan-300">
                  {paper.role}
                </p>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}