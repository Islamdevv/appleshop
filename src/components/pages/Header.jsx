import { Box, Typography } from "@mui/material";
import React from "react";
import logo from "../../image/logo.png";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <Box id="header">
      <Box className="container">
        <Box className="header">
          <img src={logo} alt="MUI" />
          <Box className="nav">
            <Typography>Home</Typography>
            <Typography>ProductList</Typography>
            <Typography>CreateProduct</Typography>
            <AdminPanelSettingsIcon onClick={() => navigate("/register")} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
