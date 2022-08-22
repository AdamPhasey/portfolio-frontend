import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Badge,
  Button,
  CardActionArea,
  CardActions,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import Link from "next/link";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiMaterialui,
  SiAuth0,
  SiNextdotjs,
  SiChakraui,
  SiJava,
  SiNpm,
  SiCss3,
} from "react-icons/si";

export default function Cards() {
  return (
    <>
      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="/spacecoinfront.png"
            alt="npm package"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPACE COIN
            </Typography>
            <Stack spacing={2} direction="row">
              <Badge>
                <SiTypescript />
              </Badge>
              <Badge>
                <SiNextdotjs />
              </Badge>
              <Badge>
                <SiNodedotjs />
              </Badge>
              <Badge>
                <SiPostgresql />
              </Badge>
              <Badge>
                <SiTailwindcss />
              </Badge>
              <Badge>
                <SiExpress />
              </Badge>
              <Badge>
                <SiMaterialui />
              </Badge>
              <Badge>
                <SiAuth0 />
              </Badge>
            </Stack>
            <Typography className="text-sm">
              I made a full stack application using auth0 and TypeScript. The
              app is designed to give users a view of the health of their
              fictitious spacecoin currency.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="text-white">
          <Button size="small"
              href={"https://github.com/AdamPhasey/space-coin-front"}
              target="_blank"
              rel="noreferrer"
            >
              Github - Frontend
          </Button>
          <Button size="small"
              href={"https://github.com/AdamPhasey/space-coin-backend"}
              target="_blank"
              rel="noreferrer"
            >
              Github - Backend
          </Button>
          <Button size="small"
              href={"https://spacecoin.vercel.app"}
              target="_blank"
              rel="noreferrer"
            >
              Live
          </Button>
        </CardActions>
      </Card>

      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            className="p-10"
            image="/npm.svg"
            alt="npm package"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              INFINITESIMAL
            </Typography>
            <Stack spacing={2} direction="row">
              <Badge>
                <SiNpm />
              </Badge>
              <Badge>
                <SiNodedotjs />
              </Badge>
            </Stack>
            <Typography className="text-sm" color="text.secondary">
              I made my first npmjs package which serves to help developers to
              remove blank spaces between strings. This is particularly useful
              with database submissions. In my first week of publication I had
              over 300 downloads!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary"
              href={"https://github.com/AdamPhasey/Infinitesimal"}
              target="_blank"
              rel="noreferrer"
            >
              Github
          </Button>
          <Button size="small" color="primary"
              href={"https://www.npmjs.com/package/infinitesimal"}
              target="_blank"
              rel="noreferrer"
            >
              Live
          </Button>
        </CardActions>
      </Card>

      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea>
          <CardMedia component="img" image="/Chews.png" alt="npm package" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              CHEWS MEAL PLANNER
            </Typography>
            <Stack spacing={2} direction="row">
              <Badge>
                <SiJavascript />
              </Badge>
              <Badge>
                <SiNextdotjs />
              </Badge>
              <Badge>
                <SiNodedotjs />
              </Badge>
              <Badge>
                <SiPostgresql />
              </Badge>
              <Badge>
                <SiTailwindcss />
              </Badge>
              <Badge>
                <SiExpress />
              </Badge>
              <Badge>
                <SiChakraui />
              </Badge>
              <Badge>
                <SiAuth0 />
              </Badge>
            </Stack>
            <Typography className="text-sm" color="text.secondary">
              I made my first npmjs package which serves to help developers to
              remove blank spaces between strings. This is particularly useful
              with database submissions. In my first week of publication I had
              over 300 downloads!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={
              "https://github.com/simonpartridge86/baristacrats-frontend-final-project"
            }
            target="_blank"
            rel="noreferrer"
          >
            Github - Frontend
          </Button>
          <Button
            size="small"
            color="primary"
            href={
              "https://github.com/AdamPhasey/baristacrats-backend-repo/tree/d2b628bdab8b4831c9311f701933afec084060ea"
            }
            target="_blank"
            rel="noreferrer"
          >
            Github - Backend
          </Button>
          <Button
            size="small"
            color="primary"
            href={"https://chews-dev.vercel.app/"}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </Button>
        </CardActions>
      </Card>

      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image="/Backpack.png"
            alt="Backpack app screenshot"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              BACKPACK
            </Typography>
            <Stack spacing={2} direction="row">
              <Badge>
                <SiJavascript />
              </Badge>
              <Badge>
                <SiReact />
              </Badge>
              <Badge>
                <SiNodedotjs />
              </Badge>
              <Badge>
                <SiPostgresql />
              </Badge>
              <Badge>
                <SiCss3 />
              </Badge>
              <Badge>
                <SiExpress />
              </Badge>
            </Stack>
            <Typography className="text-sm" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={"https://github.com/SchoolOfCode/w9_frontend-project-team-js"}
            target="_blank"
            rel="noreferrer"
          >
            Github - Frontend
          </Button>
          <Button
            size="small"
            color="primary"
            href={"https://github.com/SchoolOfCode/w9_frontend-project-team-js"}
            target="_blank"
            rel="noreferrer"
          >
            Github - Backend
          </Button>


          <Button
            size="small"
            color="primary"
            href={"https://backpack-frontend.vercel.app/"}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
