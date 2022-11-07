import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="py-8 px-6 lg:py-10 lg:px-24 bg-slate-100 space-y-12">
        <div className="bg-white p-14 w-full bg-base-100 shadow-xl">
          <div className="lg:px-24">
            <div className="text-center space-y-2 mb-4">
              <h1 className="text-3xl font-medium">
                Name : Ishtiyak Ali Rifat
              </h1>
              <h3 className="text-xl font-normal">
                Email : rifatishtiyak@gmail.com
              </h3>
            </div>
            <div className="my-10">
              <p>
                I am a self-motivated and focused web developer. I have
                graduated from AIUB in Computer Science & Engineering.
                Throughout my academic life, I have enhanced my web development
                and programming knowledge. I am a competent and capable problem
                solver who specializes in, prioritizing and managing projects.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-2">
                Educational Background:
                <div className="divider my-0"></div>
              </h3>
              <div className="space-y-1">
                <h4 className="text-xl">
                  American International University - Bangladesh (AIUB)
                </h4>
                <h4 className="text-md">
                  Bachelor of Science in Computer Science & Engineering
                </h4>
                <h4 className="text-md">April, 2018 - May, 2022</h4>
                <h4 className="text-md">Dhaka, Bangladesh</h4>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-2">
                My Skills:
                <div className="divider my-0"></div>
              </h3>
              <div>
                <li>
                  <span className="font-medium">Expertise :</span> HTML5, CSS,
                  JavaScript (ES6), React JS, Bootstrap, Tailwind, Express JS,
                  Node JS, MySql, MongoDB.
                </li>
                <li>
                  <span className="font-medium">Familiar :</span> PHP, Laravel,
                  Java, C, C++, C#, TensorFlow.
                </li>
                <li>
                  <span className="font-medium">Design Skills :</span> Adobe
                  Illustrator, Figma, InDesign.
                </li>
                <li>
                  <span className="font-medium">Tools & Software :</span>
                  Tools & Software : Git, GitHub, Firebase, VS Code, Trello,
                  Heroku, Netlify, Kaggle.
                </li>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-medium mb-2">
                My Projects:
                <div className="divider my-0"></div>
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl">Furniture House</h4>
                  <h4 className="text-md">
                    Live Link :{" "}
                    <a
                      className="text-blue-500"
                      href="https://furniture-house-a6e5b.web.app/"
                    >
                      https://furniture-house-a6e5b.web.app
                    </a>
                  </h4>
                </div>

                <div>
                  <h4 className="text-xl">To-Do App</h4>
                  <h4 className="text-md">
                    Live Link :{" "}
                    <a
                      className="text-blue-500"
                      href="https://to-do-54ee9.web.app/"
                    >
                      https://to-do-54ee9.web.app
                    </a>
                  </h4>
                </div>

                <div>
                  <h4 className="text-xl">Tooth Care</h4>
                  <h4 className="text-md">
                    Live Link :{" "}
                    <a
                      className="text-blue-500"
                      href="https://toothcare-216a3.web.app/"
                    >
                      https://toothcare-216a3.web.app
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
