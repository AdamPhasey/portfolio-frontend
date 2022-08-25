import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages";
import MuiCarousel from "../Components/Subpages/MuiCarousel";
import { useState } from "react";

export default function Chews() {
  const router = useRouter();

  const toggle = { showGoal: false, showSkills: true };
  const [show, setShow] = useState(toggle);
  function toggleClick() {
    const copy = {
      ...show,
      showGoal: !show.showGoal,
      showSkills: !show.showSkills,
    };
    setShow(copy);
  }

  return (
    <>
      <NavbarForSubPages />
      <div className="flex flex-row justify-center text-[3.5vmax] md:text-[4vmax] text-white w-full">
        <h1 className="font-permanent-marker text-red-600">
          Chews - Recipe Directory App
        </h1>
      </div>
      <h1 className="flex flex-row justify-center text-white text-[3vmax] md:text-[2vmax] mb-10">
        Our group presentation
      </h1>
      <div className="flex flex-row justify-center mb-10">
        <iframe
          className="p-5 md:p-0"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/aXnJCW1pesY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
        A bit about the project
      </h1>
      <div className="flex flex-row justify-center">
        <MuiCarousel
          images={[
            {
              label: "Our wireframes",
              imgPath: "/chews-wireframes.png",
            },
            {
              label: "Manifesto",
              imgPath:
                "/manifesto.png",
            },
            {
              label: "Disney ideation",
              imgPath:
                "/disney-chews.png",
            },
            {
              label: "Interface",
              imgPath:
                "/chews-user-story.png",
            },
            {
              label: "Questionnaire Responses",
              imgPath:
                "/chews-research.png",
            },
          ]}
        />
      </div>
      <div className="flex flex-row justify-center">
        <div className="md:w-1/2 p-4 md:p-0 flex flex-col items-center justify-center text-white text-[2vmax] md:text-[1vmax]">
          
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            The tech we used and why
          </h1>

          <br />
          <Button
            variant="outlined"
            onClick={toggleClick}
            className="text-[1.5vmax] md:text-[0.75vmax] text-white bg-blue-400"
          >
            TOGGLE BETWEEN FRONTEND AND BACKEND
          </Button>
          <br />
          {show.showSkills ? (
            <>
              <p className="text-green-400">FRONTEND</p>
              <table className="w-full border-separate border-spacing-2 border border-slate-500 ...">
                <thead>
                  <tr>
                    <th className="border border-slate-600 text-blue-400">
                      TECHNOLOGY
                    </th>
                    <th className="border border-slate-600 text-blue-400">
                      REASONING
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700">NEXT.JS</td>
                    <td className="border border-slate-700 ...">
                      We used Next.js to reduce latency and increase
                      performance. Next.js allows server-side rendering which
                      allowed us to store data ready for our components before
                      tha app was rendered.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">TAILWINDCSS</td>
                    <td className="border border-slate-700 ...">
                      TailwindCSS has quickly become a popular choice amongst
                      developers. We wanted to use a technology that allows us
                      to reduce repetitive CSS declarations that can quickly
                      become time-consuming. TailwindCSS took much of that
                      difficulty away by allowing us to declare{" "}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">
                      CHAKRA UI LIBRARY
                    </td>
                    <td className="border border-slate-700 ...">
                      Using a component library to implement our wire-frames
                      gave our app a professional look. Working in a team of 6
                      meant there was a lot of diversity in design thought, so
                      relying on a library like Chakra meant we all agreed with
                      the results of a professional library.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">
                      CHAKRA UI LIBRARY
                    </td>
                    <td className="border border-slate-700 ...">
                      Using a component library to implement our wire-frames
                      gave our app a professional look. Working in a team of 6
                      meant there was a lot of diversity in design thought, so
                      relying on a library like Chakra meant we all agreed with
                      the results of a professional library.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">AUTH0</td>
                    <td className="border border-slate-700 ...">
                      In order to securely and safely store user data, we
                      implemented Auth0 to allow users to login and save filters
                      or recipes to their account. Auth0 being a reputable
                      choice gave us confidence in using their solution.
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          ) : (
            <>
              <p className="text-green-400">BACKEND</p>
              <table className="w-full border-separate border-spacing-2 border border-slate-500 ...">
                <thead>
                  <tr>
                    <th className="border border-slate-600 text-blue-400">
                      TECHNOLOGY
                    </th>
                    <th className="border border-slate-600 text-blue-400">
                      REASONING
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700">NODE.JS</td>
                    <td className="border border-slate-700 ...">
                      Using Node.js was something we had a lot of practice on
                      during the course. We felt comfortable using this and
                      although there was discussion of using a new technology,
                      we decided with our limited time-frame to use what we
                      knew.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">EXPRESS.JS</td>
                    <td className="border border-slate-700 ...">
                      Express.js is a framework that is typically used with
                      Node.js. As it is open-source and supports many other
                      libraries that we needed, it made sense to implement this.
                      Furthermore, we had experience with Express.js in
                      connecting to databases.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">POSTGRESQL</td>
                    <td className="border border-slate-700 ...">
                      For our use case, using a relational database made sense
                      as we were considering having different tables that would
                      require our data to be structured for our frontend schema
                      we made. PostgreSQL allowed us to implement our schema and
                      normalise our data by being capable, free and open-source.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">NODE-FETCH</td>
                    <td className="border border-slate-700 ...">
                      We chose to use node-fetch as it allowed us to resolve
                      several promises at once when necessary. As we were
                      calling a third-party API, our fetch requests became more
                      complex. The node-fetch module was something already
                      introduced into our version of Node.js so we did not have
                      to rely on other unfamiliar calling solutions. This saved
                      us much important time.
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            How we set up
          </h1>

          <p className="flex justify-center">
            During my time at the School of Code, I was grouped with 5 other
            students to create a final project. Our brief was simple: create an
            app that solves a problem. We had in total 4 weeks to create our
            full-stack application utilising everything we had learnt.
          </p>
          <br />
          <p>
            Before we decided on what to build or how to build our app, we came
            together as a team and agreed on some main principles and values
            that would ensure psychological safety and a clear guide on how to
            act as a team. This was written up as our Manifesto. Our Manifesto
            gave us something to lean on when needed. This allowed us to be
            Agile.
          </p>
          <br />
          <p>
            We began the process of deciding what we would build by utilising
            the Disney ideation process. Once we had voted on an idea we all
            agreed on, we began to research our idea using tools such as User
            Journeys, User Personas and questionnaires that we sent out to get
            feedback on the strengths and weaknesses of our idea.
          </p>
          <br />
          <p>
            Initially, our idea proved to have areas in need of clarification
            and improvement. Practicing Agile, our group decided to accept the
            feedback and modify our idea to better serve the problem we were
            solving. We finally had a robust version of our initial idea: a meal
            directory that solves decision fatigue by offering a user a
            selection of recipes either at random or by optional filters.
          </p>
          <br />
          <p>
            From the idea phase to our final presentation of our fully built
            app, we continued to use our Manifesto to our advantage. We
            regrouped for stand-ups and retros daily and addressed any concerns
            that came our way.
          </p>
        </div>
        
      </div>
    </>
  );
}
