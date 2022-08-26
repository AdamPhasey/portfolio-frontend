import { useRouter } from "next/router";
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages";
import MuiCarousel from "../Components/Subpages/MuiCarousel";
import Head from "next/head";

export default function Portfolio() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <NavbarForSubPages />
      <div className="flex flex-row justify-center text-[3.5vmax] md:text-[4vmax] text-white w-full">
        <h1 className="font-Montserrat-Alternates text-red-600">
          My Portfolio
        </h1>
      </div>
      <br />
      <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
        A bit about my portfolio project
      </h1>
      <div className="flex flex-row justify-center">
        <MuiCarousel
          images={[
            {
              label: "My SVG design",
              imgPath: "/portfolio-id.png",
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
                    I used Next.js to reduce latency and increase performance.
                    Since this is my portfolio, being able to dynamically route
                    pages has given me confidence that users will face very
                    little latency.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 ...">MATERIAL UI</td>
                  <td className="border border-slate-700 ...">
                    I wanted to use a strong component library that is known for
                    strong UX/UI design. Ensuring my portfolio looks
                    professional and clean is important to me so I can attract
                    positive attention.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 ...">TAILWINDCSS</td>
                  <td className="border border-slate-700 ...">
                    Although using MUI is the main way I styled my portfolio,
                    there are adjustments I have made that were only possible by
                    using TailwindCSS. Using TailwindCSS allows me to be
                    flexible on my design and placement of MUI components.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 ...">SVG</td>
                  <td className="border border-slate-700 ...">
                    I used SVG visuals I designed myself using Adobe Illustrator
                    where possible as it gives me a way to manipulate my visuals
                    using code (see the terminal I created at the top of my home
                    page). Being vector based, I can be confident that my
                    visuals using SVG will not pixelate on any screen.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 ...">SENDGRID</td>
                  <td className="border border-slate-700 ...">
                    I built my contact form using SendGrid as it is commonly
                    used with Next.js. It was easy to establish, but I did have
                    difficulty in ensuring my email provider did not
                    automatically spam the emails being sent to me.
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-700 ...">ANIME.JS</td>
                  <td className="border border-slate-700 ...">
                    I used Anime.js to animate my logo by creating an outline
                    around my name. I found Anime.js to be user friendly and the
                    styling I used was subtle enough to be clean and not
                    overdone.
                  </td>
                </tr>
              </tbody>
            </table>
          </>
          <br />
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            How I determined my design
          </h1>

          <p className="flex justify-center">
            Building a portfolio is certainly a challenge as it requires a
            person to build an assessment of their own work so that it would be
            effective in gaining attention/employment.
          </p>
          <br />
          <p>
            To remedy this challenge, I knew from my own experience that
            candidates who keep work concise and effective perform better in
            attracting opportunities. I built the terminal at the top of my page
            to be eye catching and to demonstrate my design and code skills. I
            also built a section that touches on 5 things I want you to know
            about me. That was particularly challenging as I had to think
            carefully as to what was most important to me.
          </p>
          <br />
          <p>
            I used the MUI component library to continue this design thread I
            had: clean and responsive. I worked on ensuring my website was
            useable on other devices and factored in TailwindCSS media queries
            to ensure this. I used a trending Coolors pallette to ensure my
            colours were not conflicting.
          </p>
        </div>
      </div>
      <br />
    </>
  );
}
