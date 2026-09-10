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


  useEffect(() => {

    fetch(
      "https://api.github.com/users/mdakash210627/repos"
    )
      .then((response) => response.json())
      .then((data) => {

        const selected = data
          .filter((repo: Repo) => repo.name !== "mdakash210627")
          .slice(0, 6);

        setRepos(selected);

      });

  }, []);



  return (

    <section
      id="github"
      className="bg-slate-950 px-6 py-20 text-white"
    >

      <div className="mx-auto max-w-6xl">


        <h2 className="text-center text-4xl font-bold">
          GitHub Projects
        </h2>


        <div className="mt-12 grid gap-6 md:grid-cols-3">


          {repos.map((repo) => (

            <div
              key={repo.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-cyan-400 transition"
            >

              <h3 className="text-xl font-semibold text-cyan-400">
                {repo.name}
              </h3>


              <p className="mt-3 text-gray-300">
                {repo.description ||
                  "Machine learning and software development project."}
              </p>


              <div className="mt-4 text-sm text-gray-400">

                {repo.language && (
                  <p>
                    Language: {repo.language}
                  </p>
                )}

                <p>
                  ⭐ {repo.stargazers_count}
                </p>

              </div>


              <a
                href={repo.html_url}
                target="_blank"
                className="mt-5 inline-block rounded-full border border-gray-500 px-4 py-2 text-sm hover:bg-white hover:text-black"
              >
                View Repository
              </a>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}