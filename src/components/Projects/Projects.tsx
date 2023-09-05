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

export default function Projects() {
  return (
    <Grid id="projects" container spacing={5} justifyContent="center">
      <Grid
        item
        lg={12}
        xs={12}
        sx={{
          mt: 15,
          textAlign: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        <Typography variant="h3">Projects</Typography>
      </Grid>

      {PROJECTS.map((project) => (
        <Grid item lg={4} xs={6} key={project.name}>
          <Card
            key={project.name}
            sx={{
              margin: "0 auto",
              padding: "10px",
              backgroundColor: "#1f2747",
            }}
          >
            <CardActionArea onClick={() => window.open(project.url, "_blank")}>
              <CardMedia
                component="img"
                image={project.image}
                height="140"
                alt={project.name}
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  textAlign="center"
                >
                  {project.name}
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{ margin: "0 auto" }}
                variant="contained"
                onClick={() => window.open(project.repo, "_blank")}
              >
                View code
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
