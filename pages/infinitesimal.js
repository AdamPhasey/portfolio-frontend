import { useRouter } from "next/router";
import NavbarForSubPages from "../Components/Subpages/NavbarForSubPages";
import MuiCarousel from "../Components/Subpages/MuiCarousel";
import { Button, ButtonGroup } from "@mui/material";

export default function Infinitesimal() {
  const router = useRouter();

  return (
    <>
      <NavbarForSubPages />
      <div className="flex flex-row justify-center text-[3.5vmax] md:text-[4vmax] text-white w-full">
        <h1 className="font-Montserrat-Alternates text-red-600">
          Infinitesimal - my npm package
        </h1>
      </div>
      <br />
      <ButtonGroup className="flex justify-center">
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          href={"https://github.com/AdamPhasey/Infinitesimal"}
          target="_blank"
          rel="noreferrer"
        >
          Github
        </Button>
        <Button
          className="bg-red-400"
          variant="contained"
          size="small"
          href={"https://www.npmjs.com/package/infinitesimal"}
          target="_blank"
          rel="noreferrer"
        >
          NPMJS
        </Button>
      </ButtonGroup>
      <br />
      <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
        A bit about Infinitesimal
      </h1>
      <div className="flex flex-row justify-center">
        <MuiCarousel
          images={[
            {
              label: "My npm package",
              imgPath: "/npmjs.png",
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
            <p className="text-green-400">NPM Structure</p>
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
                  <td className="border border-slate-700">JavaScript</td>
                  <td className="border border-slate-700 ...">
                    I used JavaScript for my npm package as it is the language
                    NPMJS uses and it is the language I have experience with.
                  </td>
                </tr>
              </tbody>
            </table>
          </>
          <br />
          <h1 className="flex justify-center text-[3vmax] md:text-[2vmax] text-red-400 font-Montserrat-Alternates">
            How I determined my package
          </h1>

          <p className="flex justify-center">
            Making my first npm was quite daunting to begin with. I wanted to
            create this as it was something I have not made or used before. I
            found several online resources explaining how to create a npm
            package and decided to try it myself.
          </p>
          <br/>
          <p className="flex justify-center">
            My package is designed to help developers sanitise string
            submissions should they contain blank spaces. I used CommonJS as it
            was what most tutorials taught. I will be releasing an ES6 version
            shortly.
          </p>
        </div>
      </div>
      <br />
    </>
  );
}
