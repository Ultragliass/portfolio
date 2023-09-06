import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid
      id="about"
      container
      direction="row-reverse"
      sx={{
        textAlign: {
          xs: "center",
          lg: "left",
        },
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component="img"
          src="/portrait.png"
          sx={{ borderRadius: "50% 50% 50% 50%", width: "70%" }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant="h3" gutterBottom>
          &apos;Mechanical&apos; Michael H.
        </Typography>

        <Typography variant="h4" fontWeight="bold">
          Fullstack Developer
        </Typography>

        <Typography variant="overline">
          A full stack developer with over two and a half years of experience
          with full stack development. Passionate about technology and
          programming, being a hobby before a career. Always striving for
          improvement, innovation, success, and excellence.
        </Typography>
      </Grid>
    </Grid>
  );
}
