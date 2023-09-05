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
          my: 5,
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
            <Card sx={{ width: "150px", margin: "0 auto", padding: "10px" }}>
              <CardMedia
                component="img"
                alt="test"
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
          my: 5,
          textAlign: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        <Typography variant="h3">Extras</Typography>
      </Grid>

      {EXTRAS.map((skill) => (
        <Grid item lg={3} xs={6} key={skill.name}>
          <Tooltip title={skill.display}>
            <Card sx={{ width: "150px", margin: "0 auto", padding: "10px" }}>
              <CardMedia
                component="img"
                alt="test"
                image={`/logos/${skill.name}.svg`}
              />
            </Card>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
}
