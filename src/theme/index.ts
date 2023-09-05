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

    MuiCard: {
      styleOverrides: {
        root: {
          transform: "scale(1)",
          transition: "transform 0.15s ease-in-out",
          ":hover": {
            transform: "scale(1.05)",
          },
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
  textDecoration: "underline",
  textDecorationColor: "#fb027f",
  textUnderlineOffset: "10px",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.17rem",
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
};

theme.typography.overline = {
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
  },
};

export default theme;
