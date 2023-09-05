import { Box, Grid, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1, mt: "5%" }}>
      <Grid container spacing={3} direction="row-reverse">
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
            id="about"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h3" gutterBottom>
            &quot;Mechanical&quot; Michael H.
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
    </Box>
  );
}
