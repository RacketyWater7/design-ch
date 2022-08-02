import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddCommentOutlinedIcon from "@mui/icons-material/AddCommentOutlined";
import GpsNotFixedOutlinedIcon from "@mui/icons-material/GpsNotFixedOutlined";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";

import { Button } from "@mui/material";

const drawerWidth = 440;

export default function App() {
  const [img1, setImg1] = React.useState(false);
  const [img2, setImg2] = React.useState(false);
  const [img3, setImg3] = React.useState(false);
  const [img4, setImg4] = React.useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar color="primary">
          {/* <IconButton
            onClick={toggleDrawer(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          ></Typography>
          {/* add AddCommentOutlined button */}
          <span>
            {" "}
            <IconButton aria-label="add comment" color="inherit" sx={{ ml: 2 }}>
              <AddCommentOutlinedIcon />
            </IconButton>{" "}
            ADD NOTATION{" "}
          </span>
          <span>
            {" "}
            <IconButton aria-label="add comment" color="inherit" sx={{ ml: 2 }}>
              <GpsNotFixedOutlinedIcon />
            </IconButton>{" "}
            RETAKE SCAN{" "}
          </span>
        </Toolbar>
      </AppBar>
      <Drawer
        className="drawer"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ bgcolor: "#333333" }}>
          <Typography
            variant="h6"
            // noWrap
            // component="div"
            sx={{
              color: "white",
              display: {
                xs: "none",
                sm: "block",
                alignSelf: "center",
                // marginBottom: "1rem",
              },
            }}
          >
            DUST ANALYSIS
          </Typography>
        </Toolbar>
        <Box
          sx={{
            bgcolor: "#333333",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              paddingTop: "1rem",
            }}
          >
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
                onClick={() => setImg1(!img1)}
              >
                <span
                  style={{ cursor: "pointer", color: img1 ? "white" : "gray" }}
                >
                  {" "}
                  Matching Markers{" "}
                </span>
                <IconButton>
                  <DiamondOutlinedIcon
                    sx={{ color: img1 ? "white" : "gray" }}
                  />
                </IconButton>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
                onClick={() => setImg2(!img2)}
              >
                <span
                  style={{ cursor: "pointer", color: img2 ? "white" : "gray" }}
                >
                  {" "}
                  Missing Markers{" "}
                </span>
                <IconButton>
                  <DiamondOutlinedIcon
                    sx={{ color: img2 ? "white" : "gray" }}
                  />
                </IconButton>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
                onClick={() => setImg3(!img3)}
              >
                <span
                  style={{ cursor: "pointer", color: img3 ? "white" : "gray" }}
                >
                  {" "}
                  Modified Markers{" "}
                </span>
                <IconButton>
                  <DiamondOutlinedIcon
                    sx={{ color: img3 ? "white" : "gray" }}
                  />
                </IconButton>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "2rem",
                  marginRight: "2rem",
                }}
                onClick={() => setImg4(!img4)}
              >
                <span
                  style={{ cursor: "pointer", color: img4 ? "white" : "gray" }}
                >
                  {" "}
                  Background{" "}
                </span>
                <IconButton>
                  <DiamondOutlinedIcon
                    sx={{ color: img4 ? "white" : "gray" }}
                  />
                </IconButton>
              </Typography>
            </Box>
          </Box>
          <Typography
            variant="h6"
            color={"gray"}
            sx={{ marginLeft: "2rem", marginBottom: "1rem" }}
          >
            User Confirmation
          </Typography>
          <TextField
            id="outlined-select-currency"
            select
            label="Select Observed Result"
            sx={{
              width: "370px",
              alignSelf: "center",
              marginBottom: "1rem",
              color: "white",
              border: "1px solid gray",
              borderRadius: "0.3rem",
            }}
          >
            {/* {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))} */}
          </TextField>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Comments"
            style={{
              width: 370,
              height: 150,
              backgroundColor: "#333333",
              resize: "none",
              borderRadius: "0.3rem",
              border: "1px solid gray",
              alignSelf: "center",
              marginBottom: "1rem",
              color: "white",
              padding: "0.8rem",
            }}
          />
          <Box
            sx={{
              alignSelf: "end",
              height: "100px",
              bgcolor: "#515151",
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Button
              size="large"
              sx={{
                height: "40px",
                bgcolor: "#666666",
                color: "white",
                px: {
                  xs: 2,
                  sm: 2,
                  md: 5,
                },
                "&:hover": {
                  bgcolor: "#666666",
                },
                marginLeft: "2rem",
              }}
            >
              CANCEL
            </Button>
            <Button
              size="large"
              sx={{
                bgcolor: "#3C6595",
                height: "40px",
                color: "white",
                px: {
                  xs: 2,
                  sm: 2,
                  md: 5,
                },
                "&:hover": {
                  bgcolor: "#3C6595",
                },
              }}
            >
              SAVE ANALYSIS
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "black",
          height: "100vh",
          p: 3,
          position: "relative",
          zIndex: 1,
        }}
      >
        <Toolbar />
        <div
          style={{
            position: "absolute",
            top: "80px",
            height: "600px",
            width: "600px",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              visibility: img1 ? "visible" : "hidden",
            }}
            src="/flower1.png"
            alt="flower1"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            height: "600px",
            width: "600px",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              visibility: img2 ? "visible" : "hidden",
            }}
            src="/flower2.png"
            alt="flower2"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            height: "600px",
            width: "600px",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              visibility: img3 ? "visible" : "hidden",
            }}
            src="/clouds.png"
            alt="clouds"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            height: "600px",
            width: "600px",
          }}
        >
          <img
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              visibility: img4 ? "visible" : "hidden",
            }}
            src="/butterfly.png"
            alt="butterfly"
          />
        </div>
      </Box>
    </Box>
  );
}
