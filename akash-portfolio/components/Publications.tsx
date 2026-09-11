const publications = [

  {
    title:
      "Remote Health Monitoring via PPG Signal Processing and Machine Learning Using Mobile Devices",

    venue:
      "2025 28th International Conference on Computer and Information Technology (ICCIT), IEEE",

    role:
      "First Author",

    year:
      "2026",

    doi:
      "https://doi.org/10.1109/ICCIT68739.2025.11491546",

    paperLink:
      "https://ieeexplore.ieee.org/document/11491546",

  },


  {
    title:
      "Machine Learning-Based Hepatitis C Detection Using Ensemble Boosting",

    venue:
      "Lecture Notes in Networks and Systems (LNNS), Springer Nature",


    year:
      "2026",

    doi:
      "https://doi.org/10.1007/978-3-032-15764-5_50",

    paperLink:
      "https://link.springer.com/chapter/10.1007/978-3-032-15764-5_50",

  },


  {
    title:
      "Machine Learning-Based Prediction of Nightmares in Children: A Pediatric Psychological Integration",

    venue:
      "2025 IEEE 2nd International Conference on Computing, Applications and Systems (COMPAS)",


    year:
      "2026",

    doi:
      "https://doi.org/10.1109/COMPAS67506.2025.11381639",

    paperLink:
      "https://ieeexplore.ieee.org/document/11381639",

  },


  {
    title:
      "GR-ACE Net: A Hybrid Graph-Attentional Framework with Global Relational Reasoning for Deepfake Forensics",

    venue:
      "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",

    year:
      "2026",

    doi:
      "https://doi.org/10.1109/PECCII70991.2026.11661873",

    paperLink:
      "https://ieeexplore.ieee.org/document/11661873",

  },


  {
    title:
      "A Comparative Study of CNN, Transformer, and Recurrent Models for Deepfake Detection on Degraded Images",

    venue:
      "2026 International Conference on Power, Electronics, Communications, Computing, and Intelligent Infrastructure (PECCII), IEEE",

    year:
      "2026",

    doi:
      "https://doi.org/10.1109/PECCII70991.2026.11662017",

    paperLink:
      "https://ieeexplore.ieee.org/document/11662017",

  },


  {
    title:
      "Comparative Evaluation of CNN Backbones with Explainable AI for Multi-Class Chest X-Ray Classification",

    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), IEEE",

    year:
      "2026",

    doi:
      "https://doi.org/10.1109/QPAIN69676.2026.11546150",

    paperLink:
      "https://ieeexplore.ieee.org/document/11546150",

  },


  {
    title:
      "A Hybrid YOLO-EfficientNet Framework for Fine-Grained Vegetable Recognition in Dense Multi-Object Images",

    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence & Networking (QPAIN), IEEE",

    role:
      "",

    year:
      "2026",

    doi:
      "https://doi.org/10.1109/QPAIN69676.2026.11545784",

    paperLink:
      "https://ieeexplore.ieee.org/document/11545784",

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


<p
className="
text-sm
font-semibold
uppercase
tracking-widest
text-cyan-600
"
>
Research Portfolio
</p>


<h2
className="
mt-3
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





{/* Papers */}


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
group
rounded-3xl
border
border-slate-200
bg-white
p-8
shadow-lg
transition-all
duration-300
hover:-translate-y-2
hover:border-cyan-400
hover:shadow-2xl
"

>


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
h-11
w-11
items-center
justify-center
rounded-full
bg-cyan-100
font-bold
text-cyan-700
"
>

{index+1}

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





<h3
className="
mt-6
text-xl
md:text-2xl
font-bold
leading-relaxed
group-hover:text-cyan-700
transition
"
>

{paper.title}

</h3>





<p
className="
mt-4
leading-relaxed
text-slate-600
"
>

{paper.venue}

</p>





{
paper.role && (

<div
className="
mt-5
inline-flex
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







{/* DOI */}


<div
className="
mt-6
flex
flex-wrap
gap-4
"
>


<a

href={paper.paperLink}

target="_blank"

rel="noopener noreferrer"

className="
rounded-full
border
border-slate-300
px-5
py-2
text-sm
font-semibold
text-slate-700
transition
hover:bg-slate-900
hover:text-white
"

>

📄 View Paper

</a>





<a

href={`https://doi.org/${paper.doi}`}

target="_blank"

rel="noopener noreferrer"

className="
rounded-full
bg-cyan-500
px-5
py-2
text-sm
font-semibold
text-white
transition
hover:bg-cyan-600
"

>

🔗 DOI

</a>



</div>




</div>


))

}



</div>


</div>


</section>


);


}