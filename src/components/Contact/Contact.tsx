import { Card, CardMedia, Grid, Tooltip, Typography } from "@mui/material";
import { CONTACT } from "../../constants";

function Contact() {
  return (
    <Grid id="contact" container spacing={5} justifyContent="center">
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
        <Typography variant="h3">Contact</Typography>
      </Grid>

      {CONTACT.map((contact) => (
        <Grid item lg={4} xs={6} key={contact.name}>
          <Tooltip title={contact.display}>
            <Card
              sx={{
                width: "150px",
                margin: "0 auto",
                padding: "10px",
                backgroundColor: "#fff",
                border: "10px solid #1f2747",
              }}
              onClick={() =>
                contact.name === "gmail"
                  ? (window.location.href = contact.url)
                  : window.open(contact.url, "_blank")
              }
            >
              <CardMedia
                component="img"
                alt={contact.name}
                image={`/logos/${contact.name}.svg`}
              />
            </Card>
          </Tooltip>
        </Grid>
      ))}
    </Grid>
  );
}

export default Contact;
