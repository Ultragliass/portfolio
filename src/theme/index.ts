import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#14192f",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },

    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1f2747",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.5rem",
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.17rem",
  },
};

theme.typography.overline = {
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
};

export default theme;
