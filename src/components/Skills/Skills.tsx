import { Card, CardMedia, Grid, Tooltip, Typography } from "@mui/material";
import { EXTRAS, SKILLS } from "../../config";

export default function Skills() {
  return (
    <Grid id="skills" container spacing={5} justifyContent="center">
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
        <Typography variant="h3">Skills</Typography>
      </Grid>

      {SKILLS.map((skill) => (
        <Grid item lg={3} xs={6} key={skill.name}>
          <Tooltip title={skill.display}>
            <Card
              sx={{
                width: "150px",
                margin: "0 auto",
                padding: "10px",
                backgroundColor: "#fff",
                border: "10px solid #1f2747",
              }}
            >
              <CardMedia
                component="img"
                alt={skill.name}
                image={`/logos/${skill.name}.svg`}
              />
            </Card>
          </Tooltip>
        </Grid>
      ))}

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
        <Typography variant="h3">Extras</Typography>
      </Grid>

      {EXTRAS.map((extra) => (
        <Grid item lg={3} xs={6} key={extra.name}>
          <Tooltip title={extra.display}>
            <Card
              sx={{
                width: "150px",
                margin: "0 auto",
                padding: "10px",
                backgroundColor: "#fff",
                border: "10px solid #1f2747",
              }}
            >
              <CardMedia
                component="img"
                alt={extra.name}
                image={`/logos/${extra.name}.svg`}
              />
            </Card>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
}
