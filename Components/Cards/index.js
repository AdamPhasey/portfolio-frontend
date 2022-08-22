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
          <Button size="small">
            <Link href={"https://github.com/AdamPhasey/space-coin-front"}>
              Github
            </Link>
          </Button>
          <Button size="small">
            <Link href={"https://spacecoin.vercel.app"}>Live</Link>
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
          <Button size="small" color="primary">
            <Link href={"https://github.com/AdamPhasey/Infinitesimal"}>
              Github
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link href={"https://www.npmjs.com/package/infinitesimal"}>
              Live
            </Link>
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
          <Button size="small" color="primary">
            Github
          </Button>
          <Button size="small" color="primary">
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
              BACKPACK
            </Typography>
            <Typography className="text-sm" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Github
          </Button>
          <Button size="small" color="primary">
            Live
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
