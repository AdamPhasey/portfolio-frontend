import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages";
import MuiCarousel from "../Components/Subpages/MuiCarousel";
import { useState } from "react";
import { ButtonGroup } from "@mui/material";
import Head from "next/head";

export default function Spacecoin() {
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
      <Head>
        <title>Spacecoin</title>
      </Head>
      <div className="flex flex-row justify-center text-[3.5vmax] md:text-[4vmax] text-white w-full">
        <h1 className="font-Montserrat-Alternates text-red-600">
          Spacecoin - fintech app
        </h1>
      </div>
      <br />
      <ButtonGroup className="flex justify-center">
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          href={"https://github.com/AdamPhasey/space-coin-front"}
          target="_blank"
          rel="noreferrer"
        >
          Frontend
        </Button>
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          href={"https://github.com/AdamPhasey/space-coin-backend"}
          target="_blank"
          rel="noreferrer"
        >
          Backend
        </Button>
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          href={"https://spacecoin.vercel.app"}
          target="_blank"
          rel="noreferrer"
        >
          Live
        </Button>
      </ButtonGroup>
      <br />

      <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
        A bit about my project
      </h1>
      <div className="flex flex-row justify-center">
        <MuiCarousel
          images={[
            {
              label: "Landing page",
              imgPath: "/spacecoin-landing.png",
            },
            {
              label: "Auth0",
              imgPath: "/spacecoin-login.png",
            },
            {
              label: "My use of Recharts",
              imgPath: "/spacecoin-charts.png",
            },
          ]}
        />
      </div>
      <div className="flex flex-row justify-center">
        <div className="md:w-1/2 p-4 md:p-0 flex flex-col items-center justify-center text-white text-[2vmax] md:text-[1vmax]">
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            The tech I used and why
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
                    <td className="border border-slate-700">TypeScript</td>
                    <td className="border border-slate-700 ...">
                      Using TypeScript (TS) to define data types and modify data
                      structures proved really useful in my application. When
                      handling data, having the ability to recognise type
                      differences was important for my fintech application. I
                      also wanted practice using TS.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">NEXT.JS</td>
                    <td className="border border-slate-700 ...">
                      I used Next.js (React framework) to reduce latency and
                      increase performance. Since fintech relies heavily on data
                      transfer, I found the server-side rendering and dynamic
                      routing features of Next.js to be vital to my application.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">AUTH0</td>
                    <td className="border border-slate-700 ...">
                      In order to securely and safely store the data, I
                      implemented Auth0 to allow users to login and view live
                      currency figures. Being able to scope results also
                      conforms to the design I have for my project.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700">RECHARTS</td>
                    <td className="border border-slate-700 ...">
                      I used Recharts for my data visualisation. I wanted to
                      capture the incoming data from the backend with precision
                      led visuals. Recharts was useful in producing the result I
                      wanted and was also a way of stretching my knowledge.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">MATERIAL UI</td>
                    <td className="border border-slate-700 ...">
                      I wanted to use a strong component library that is known
                      for strong UX/UI design. UX/UI is important in fintech
                      applications as it is often the decider for a lot of
                      clients/investors.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">TAILWINDCSS</td>
                    <td className="border border-slate-700 ...">
                      Although using MUI is the main way I styled my portfolio,
                      there are adjustments I have made that were only possible
                      by using TailwindCSS. Using TailwindCSS allows me to be
                      flexible on my design and placement of MUI components.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">ANIME.JS</td>
                    <td className="border border-slate-700 ...">
                      I used Anime.js to animate my logo by creating an outline
                      that shapes the word SPACECOIN. I found Anime.js to be
                      user friendly and the styling I used was subtle enough to
                      be clean and not overdone.
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
                      Using Node.js combined with my TS
                      frontend, I managed the data configuration more
                      effectively.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">EXPRESS.JS</td>
                    <td className="border border-slate-700 ...">
                      Express.js is a framework that is typically used with
                      Node.js. As it is open-source and supports many other
                      libraries that I needed, it made sense to implement this.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-700 ...">POSTGRESQL</td>
                    <td className="border border-slate-700 ...">
                      For my use case, using a relational database made sense as
                      I the data I have been feeding the charts on the frontend
                      have to be normalised to meet the schema I designed.
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )}
          <br />
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            Some thoughts on Spacecoin
          </h1>

          <p className="flex justify-center">
            I built Spacecoin to give me an insight into fintech. The idea is to
            replicate the experience a user would have when viewing the status
            of their crypto wallet. I practiced my knowledge of TypeScript (TS)
            to ensure data was not mishandled and stretched my knowledge of TS
            by using it with Next.js.
          </p>
          <br />
          <p>
            I enjoyed building data structures that the frontend would need by
            drafting a schema. I found using TypeScript to be rewarding once I
            discovered the correct way to use it. To ensure the data I handed in
            would be valid, much like industry standard, I used useEffect to
            refetch every set interval I applied to it.
          </p>
        </div>
      </div>
      <br />
    </>
  );
}
