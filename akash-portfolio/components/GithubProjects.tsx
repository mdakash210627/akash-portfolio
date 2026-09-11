"use client";

import { useEffect, useState } from "react";


interface Repo {

  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;

}



export default function GithubProjects() {


  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {


    fetch(
      "https://api.github.com/users/mdakash210627/repos"
    )

      .then((response) => response.json())

      .then((data) => {


        const selected = data

          .filter(
            (repo: Repo) =>
              repo.name !== "mdakash210627"
          )

          .slice(0, 6);


        setRepos(selected);

        setLoading(false);


      })


      .catch(() => {

        setLoading(false);

      });



  }, []);




  return (

    <section
      id="github"
      className="
      bg-white
      px-6
      py-24
      text-slate-900
      "
    >


      <div
        className="
        mx-auto
        max-w-6xl
        "
      >



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

            GitHub Projects

          </h2>



          <p
            className="
            mt-5
            text-lg
            text-slate-600
            "
          >

            Explore my open-source projects,
            research implementations and machine
            learning experiments.

          </p>


        </div>





        {/* Loading */}


        {
          loading && (

            <div
              className="
              mt-12
              text-center
              text-slate-500
              "
            >

              Loading repositories...

            </div>

          )
        }






        {/* Repository Cards */}



        <div
          className="
          mt-12
          grid
          gap-8
          md:grid-cols-3
          "
        >



          {repos.map((repo)=>(


            <div

              key={repo.id}

              className="
              rounded-3xl
              border
              border-slate-200
              bg-white
              p-7
              shadow-lg
              transition
              hover:-translate-y-2
              hover:border-cyan-400
              hover:shadow-xl
              "

            >



              {/* Title */}


              <h3
                className="
                text-xl
                font-bold
                text-slate-900
                "
              >

                {repo.name}

              </h3>





              {/* Description */}


              <p
                className="
                mt-4
                min-h-[70px]
                text-slate-600
                leading-relaxed
                "
              >

                {

                repo.description ||

                "Machine learning and software development project."

                }

              </p>






              {/* Info */}


              <div
                className="
                mt-5
                flex
                items-center
                justify-between
                "
              >



                {

                repo.language && (

                  <span
                    className="
                    rounded-full
                    bg-cyan-50
                    px-3
                    py-1
                    text-sm
                    font-medium
                    text-cyan-700
                    "
                  >

                    {repo.language}

                  </span>

                )

                }




                <span
                  className="
                  text-sm
                  text-slate-500
                  "
                >

                  ⭐ {repo.stargazers_count}

                </span>




              </div>







              {/* Button */}


              <a

                href={repo.html_url}

                target="_blank"

                className="
                mt-7
                inline-flex
                rounded-full
                bg-slate-900
                px-5
                py-2
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-cyan-600
                "

              >

                View Repository →

              </a>




            </div>



          ))}


        </div>





        {/* Empty state */}


        {
          !loading && repos.length === 0 && (

            <div
              className="
              mt-10
              text-center
              text-slate-500
              "
            >

              No public repositories found.

            </div>

          )
        }





      </div>


    </section>

  );

}