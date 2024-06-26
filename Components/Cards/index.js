import { useRouter } from 'next/router'
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
  SiSvg,
} from "react-icons/si";

export default function Cards() {

  const router = useRouter()

  return (
    <>
      {/* <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea
        onClick={() => router.push('/spacecoin')}        >
          <CardMedia
            component="img"
            image="/spacecoinfront.png"
            alt="npm package"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPACE COIN (Still Building!)
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
            <Typography className="text-sm mt-3 text-black">
              I made a full-stack application using auth0 and TypeScript. The
              app is designed to give users a view of the health of their
              fictitious spacecoin currency.
            </Typography>
            <Typography className="text-blue-600 underline mt-3" gutterBottom variant="subtitle2" component="div">
              CLICK FOR MORE
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="text-white">
          <Button size="small"
              href={"https://github.com/AdamPhasey/space-coin-front"}
              target="_blank"
              rel="noreferrer"
            >
              Frontend
          </Button>
          <Button size="small"
              href={"https://github.com/AdamPhasey/space-coin-backend"}
              target="_blank"
              rel="noreferrer"
            >
              Backend
          </Button>
          <Button size="small"
              href={"https://spacecoin.vercel.app"}
              target="_blank"
              rel="noreferrer"
            >
              Live
          </Button>
        </CardActions>
      </Card> */}

      <Card
        className="bg-[#f2e9e4] text-black"
        sx={{ maxWidth: 400, maxHeight: 450 }}
      >
        <CardActionArea
         onClick={() => router.push('/infinitesimal')} 
        >
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
            <Typography className="text-sm mt-3 text-black" color="text.secondary">
              I made my first npmjs package which serves to help developers to
              remove blank spaces between strings. This is particularly useful
              with database submissions.
            </Typography>
            <Typography className="text-blue-600 underline mt-3" gutterBottom variant="subtitle2" component="div">
              CLICK FOR MORE
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
        <CardActionArea
         onClick={() => router.push('/portfolio')} 
        >
          <CardMedia component="img" image="/portfolio2.png" alt="portfolio card" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PORTFOLIO
            </Typography>
            <Stack spacing={2} direction="row">
              <Badge>
                <SiJavascript />
              </Badge>
              <Badge>
                <SiReact />
              </Badge>
              <Badge>
                <SiNextdotjs />
              </Badge>
              <Badge>
                <SiTailwindcss />
              </Badge>
              <Badge>
                <SiMaterialui />
              </Badge>
              <Badge>
                <SiSvg />
              </Badge>
            </Stack>
            <Typography className="text-sm mt-3 text-black" color="text.secondary">
             Built my portfolio from scratch using MUI component library, my personal knowledge of SVG manipulation and Next.js to allow for reduced latency when routing.
            </Typography>
            <Typography className="text-blue-600 underline mt-3" gutterBottom variant="subtitle2" component="div">
              CLICK FOR MORE
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      
    </>
  );
}
