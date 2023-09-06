import { Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        bgcolor: "#1f2747",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Created by 'Mechanical' Michael H.
        </Typography>

        <Typography variant="body2">
          Copyright © Michael Hahmigery {new Date().getFullYear()}.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
