import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { NAV_ITEMS } from "../../config";

export default function Navbar(props: { isSplashEnd: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const scrollToElement = (elementID: string) => {
    const element = document.querySelector(`#${elementID}`);

    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AppBar
        sx={{
          opacity: props.isSplashEnd ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
          position: "sticky",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, position: "absolute" }}
          >
            <Menu />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: { xs: "center", sm: "left" }, mt: 1 }}
          >
            <Box
              component="img"
              src="/android-chrome-192x192.png"
              sx={{ textAlign: { xs: "center", sm: "left", height: 50 } }}
            />
          </Typography>

          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
                minWidth: 400,
                justifyContent: "space-between",
              },
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Button key={item} onClick={() => scrollToElement(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              bgcolor: "#1f2747",
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
              Where to?
            </Typography>

            <Divider />

            <List>
              {NAV_ITEMS.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    sx={{ textAlign: "center" }}
                    onClick={() => scrollToElement(item)}
                  >
                    <ListItemText primary={item.toUpperCase()} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
}
