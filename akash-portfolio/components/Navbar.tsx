"use client";

import { useState } from "react";


export default function Navbar() {


  const [open, setOpen] = useState(false);



  const links = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Research",
      href: "#research",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Publications",
      href: "#publications",
    },
    {
      name: "Experience",
      href: "#experience",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];



  return (


    <nav
      className="
      fixed
      top-0
      z-50
      w-full
      border-b
      border-slate-200
      bg-white/80
      backdrop-blur-lg
      "
    >



      <div
        className="
        mx-auto
        flex
        max-w-6xl
        items-center
        justify-between
        px-6
        py-4
        "
      >



        {/* Logo */}


        <a
          href="#"
          className="
          text-xl
          font-bold
          bg-gradient-to-r
          from-slate-900
          to-cyan-600
          bg-clip-text
          text-transparent
          "
        >

          Md. Akash Miya

        </a>





        {/* Desktop Menu */}


        <div
          className="
          hidden
          items-center
          gap-7
          md:flex
          "
        >


          {
            links.map((link)=>(


              <a

                key={link.name}

                href={link.href}

                className="
                text-sm
                font-medium
                text-slate-600
                transition
                hover:text-cyan-600
                "

              >

                {link.name}

              </a>


            ))
          }



          {/* CV Button */}


          <a

            href="/Md_Akash_Miya_CV.pdf"

            download

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

            Download CV

          </a>



        </div>







        {/* Mobile Button */}



        <button

          onClick={() => setOpen(!open)}

          className="
          text-2xl
          text-slate-700
          md:hidden
          "

        >

          ☰

        </button>



      </div>






      {/* Mobile Menu */}



      {
        open && (


          <div
            className="
            border-t
            border-slate-200
            bg-white
            px-6
            py-5
            md:hidden
            "
          >


            <div
              className="
              flex
              flex-col
              gap-5
              "
            >


            {
              links.map((link)=>(


                <a

                  key={link.name}

                  href={link.href}

                  onClick={()=>setOpen(false)}

                  className="
                  text-slate-700
                  hover:text-cyan-600
                  "

                >

                  {link.name}

                </a>


              ))
            }



            <a

              href="/Md_Akash_Miya_CV.pdf"

              download

              className="
              rounded-full
              bg-cyan-500
              px-5
              py-2
              text-center
              font-semibold
              text-white
              "

            >

              Download CV

            </a>


            </div>


          </div>


        )
      }



    </nav>


  );
}