import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { PROJECTS } from "../../config";
import { gsap } from "gsap";
import { Lock } from "@mui/icons-material";

export default function Projects() {
  const shakeElement = (id: string) => {
    const element = document.querySelector(`#${id}`);

    gsap.to(element, {
      duration: 0.1,
      x: 10,
      repeat: 3,
      yoyo: true,
    });
  };

  return (
    <Grid id="projects" container spacing={5} justifyContent="center">
      <Grid
        item
        lg={12}
        xs={12}
        sx={{
          textAlign: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        <Typography variant="h3">Projects and Packages</Typography>
      </Grid>

      {PROJECTS.map((project) => (
        <Grid
          item
          lg={4}
          xs={6}
          key={project.name}
          id={project.name.replace(/ /g, "")}
        >
          <Card
            key={project.name}
            sx={{
              margin: "0 auto",
              padding: "10px",
              backgroundColor: "#1f2747",
            }}
          >
            <CardActionArea
              onClick={() => {
                project.url
                  ? window.open(project.url, "_blank")
                  : shakeElement(project.name.replace(/ /g, ""));
              }}
            >
              <CardMedia
                component="img"
                image={project.image}
                height="140"
                alt={project.name}
              />

              <CardContent sx={{ paddingX: 0 }}>
                <Typography gutterBottom variant="h5" textAlign="center" mb={3}>
                  {project.name}
                </Typography>

                <Typography gutterBottom variant="body1" textAlign="center">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{ margin: "0 auto", minHeight: "32px" }}
                variant="contained"
                onClick={() => {
                  project.repo
                    ? window.open(project.repo, "_blank")
                    : shakeElement(project.name.replace(/ /g, ""));
                }}
              >
                {project.repo ? "View code" : <Lock />}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
