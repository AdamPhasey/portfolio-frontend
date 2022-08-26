import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages";
import MuiCarousel from "../Components/Subpages/MuiCarousel";
import { useState } from "react";
import { ButtonGroup } from "@mui/material";

export default function Backpack() {
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
        <h1 className="font-Montserrat-Alternates text-red-600">
          Backpack - skill tracking app
        </h1>
      </div>
      <br />
      <ButtonGroup className="flex justify-center">
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          color="primary"
          href={"https://github.com/SchoolOfCode/w9_frontend-project-team-js"}
          target="_blank"
          rel="noreferrer"
        >
          Frontend
        </Button>
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          color="primary"
          href={"https://github.com/SchoolOfCode/w9_backend-project-team-js"}
          target="_blank"
          rel="noreferrer"
        >
          Backend
        </Button>
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          color="primary"
          href={"https://backpack-frontend.vercel.app/"}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </Button>
      </ButtonGroup>
      <br />

      <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
        A bit about the project
      </h1>
      <div className="flex flex-row justify-center">
        <MuiCarousel
          images={[
            {
              label: "Our wireframes",
              imgPath: "/backpack-wireframes.png",
            },
            {
              label: "Disney ideation",
              imgPath: "/backpack-disney.png",
            },
            {
              label: "User profiles",
              imgPath: "/backpack-user.png",
            },
            {
              label: "Trello tickets",
              imgPath: "/backpack-trello.png",
            },
            {
              label: "Team management",
              imgPath: "/backpack-scrum.png",
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
                    <td className="border border-slate-700">REACT.JS</td>
                    <td className="border border-slate-700 ...">
                      We used Create React App (CRA) to initialise our React
                      project. We were instructed to use CRA as it is a great
                      way to learn REACT fundamentals and provides a fast way to
                      render and manipulate data.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">CSS3</td>
                    <td className="border border-slate-700 ...">
                      We used CSS3 as a way to style our components. We did not
                      call on component libraries or CSS frameworks. This was
                      largely due to exercising a stronger grip on CSS
                      fundamentals.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">
                      NPMJS HAMBURGER MENU
                    </td>
                    <td className="border border-slate-700 ...">
                      As a group, we decided to look for a hamburger menu
                      available on NPMJS so as to reduce build time as we were
                      given 1 week to build our MVP. We found the package to be
                      challenging to modify to our needs so in hindsight we
                      would have likely created this on our own.
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
                      as we were considering having different tables for users
                      for their goals and skills that would require our data to
                      be structured for our frontend schema we made. PostgreSQL
                      allowed us to implement our schema and normalise our data
                      by being capable, free and open-source.
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          <br/>
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            How we set up
          </h1>

          <p className="flex justify-center">
            During my time at the School of Code, I was grouped with 3 other
            students to create an MVP in 1 week. Our brief was simple: create an
            app that solves a problem.
          </p>
          <br />
          <p>
            We decided as a group on what we would include in our MVP and what
            would be deemed as stretch goals. We knew from our brief that our
            app had to be full-stack with a database. At this stage in our
            learning we were not taught about authentication and so we excluded
            this from our MVP due to learning and time available.
          </p>
        </div>
      </div>
      <br/>
    </>
  );
}
