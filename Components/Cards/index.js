import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {useEffect, useRef} from 'react'

export default function Cards() {
const ref = useRef(null);

  useEffect(() => {
let el = ref.current
    console.log(el)
    let xPos = 0;
    let yPos = 0;
    el.addEventListener('mousedown', dragMouseDown);
    function dragMouseDown(event) {
      event.preventDefault();
      document.addEventListener('mouseup', closeDragElement);
      document.addEventListener('mousemove', elementDrag);
    }
    function elementDrag(event) {
      event.preventDefault();
      xPos += event.movementX;
      yPos += event.movementY;
      el.style.transform = `translate(${xPos}px, ${yPos}px)`;
    }
    function closeDragElement() {
      document.removeEventListener('mouseup', closeDragElement);
      document.removeEventListener('mousemove', elementDrag);
    }
      }, []);


  return (
    <>
      <Card ref={ref} sx={{ maxWidth: 400, maxHeight: 400 }}>
        <CardActionArea>
        <CardMedia component="img" className="p-10" image="/npm.svg" alt="npm package" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPACE COIN
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

      <Card ref={ref} sx={{ maxWidth: 400, maxHeight: 400 }}>
        <CardActionArea>
          <CardMedia component="img" className="p-10" image="/npm.svg" alt="npm package" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              INFINITESIMAL
            </Typography>
            <Typography className="text-sm" color="text.secondary">
              I made my first npmjs package which serves to help developers to remove blank spaces between strings.
              This is particularly useful with database submissions. In my first week of publication I had over 300 downloads!
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

      <Card ref={ref} sx={{ maxWidth: 400, maxHeight: 400 }}>
        <CardActionArea>
        <CardMedia component="img" className="p-10" image="/npm.svg" alt="npm package" />
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

      <Card ref={ref} sx={{ maxWidth: 400, maxHeight: 400 }}>
        <CardActionArea>
        <CardMedia component="img" className="p-10" image="/npm.svg" alt="npm package" />
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
