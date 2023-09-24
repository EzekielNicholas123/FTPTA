import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
      }}
    >
      {/* Top section */}
      <Box
        sx={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/home.jpg)",
          backgroundSize: "cover",
          height: "350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 30%",
          gap: "2em",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
          }}
        >
          Generate outfit ideas with Fashion Trend Prediction
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/clothes");
          }}
        >
          Get Started
        </Button>
      </Box>
      {/* Bottom section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "2em",
          maxWidth: "xl",
        }}
      >
        <Typography variant="h4">About</Typography>
        <Divider sx={{ mb: "1em" }} />
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          placeat magni amet! Totam facere eveniet voluptatibus, consequatur eos
          optio, distinctio esse fugiat excepturi, praesentium quas tempore
          corporis assumenda cupiditate. Iure beatae quis perferendis sunt ipsam
          dolor, repellendus assumenda excepturi ullam, quos non nostrum
          accusantium! Quas at tempore porro iure voluptas. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Adipisci rerum ipsa illo
          quibusdam quam unde eveniet nisi facere tempore debitis eaque cumque
          architecto aliquam sapiente voluptate ad, tenetur facilis dolorum.
          Nemo, quaerat eaque. Ea consequuntur placeat voluptatibus pariatur
          eius atque consectetur harum vero delectus doloribus ipsa nostrum,
          minus aliquam ipsum laborum! A dolore nesciunt magnam modi, doloremque
          expedita corrupti, laborum quam fugit velit accusamus. Asperiores
          cumque fuga deleniti dicta dignissimos incidunt, a sequi possimus
          debitis ipsam perspiciatis excepturi repellendus quis ea labore soluta
          culpa iure minus dolorum? Nobis quae unde ullam consequatur, maxime
          provident reprehenderit quas illo fuga nemo quisquam.
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardPage;
