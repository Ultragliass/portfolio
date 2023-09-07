import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid
      id="about"
      spacing={3}
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
          sx={{
            borderRadius: "50%",
            width: "70%",
            position: "relative",
          }}
        />

        <Box
          id="atom"
          sx={(theme) => ({
            [theme.breakpoints.up("xl")]: {
              transform: "scale(2)",
            },
            [theme.breakpoints.down("xl")]: {
              transform: "scale(2)",
            },
            [theme.breakpoints.only("md")]: {
              transform: "scale(2.5)",
            },
            [theme.breakpoints.down("sm")]: {
              transform: "scale(1.2)",
            },
          })}
        >
          <Box className="center" />
          <Box className="orbit">
            <Box className="electron" />
          </Box>
          <Box className="orbit">
            <Box className="electron" />
          </Box>
          <Box className="orbit">
            <Box className="electron" />
          </Box>
        </Box>
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
