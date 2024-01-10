import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function VideoCard({
  marca,
  modelo,
  fabricante,
  memoria,
  stock,
  img,
  precio,
}) {
  return (
    <Card
      className="card"
      sx={{
        boxShadow: 5,
        borderRadius: "1rem",
        display: "flex",
        width: 280,
        my: "0.5rem",
        px: "1rem",
        height: 250,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          my: "1rem",
          fontSize: "12px",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" sx={{ fontSize: "1.3rem", fontWeight: 'bold' }}>
            {modelo}
          </Typography>
          <Typography
            color="text.primary"
            component="div"
            sx={{ fontSize: "1rem" }}
          >
            {marca}
          </Typography>
          <Typography color="text.secondary" component="div">
            {fabricante}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            VRAM: {memoria}
          </Typography>
          <Typography color="text.secondary" component="div">
            U$S: {precio}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardMedia
          component="img"
          sx={{
            width: 150,
            height: 130,
            justifyContent: "center",
            display: { xs: "none", sm: "block" },
            my: "1rem",
          }}
          image={img}
          alt="Video card image"
        />
        <Typography
          variant="subtitle1"
          color="text.primary"
          component="div"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            my: "1rem",
            justifyContent: "center",
            borderBottom: "2px solid #d0368a",
          }}
        >
          Stock: {stock}
        </Typography>
      </Box>
    </Card>
  );
}
