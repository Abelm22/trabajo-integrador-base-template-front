import {AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Container,
  Avatar,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Grid,
  Popover,
  MenuItem as MenuItemMui,
  Collapse} from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React, {useEffect, useState, useRef} from 'react';
import { Outlet, useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';

import { useSelector } from "react-redux";
import { appSelector } from '../../redux/appRedux';
import main from "../../styles/main";



 
const drawerWidth = 280; 











const DashboardLayout = ()=>{
  const pageTitle = useSelector(appSelector.pageTitle)

 const [open, setOpen]= useState(false)
  

  return (
  <Box sx={main.dashboardLayout.root}>
    
    
    <Box
    component="main"
    
    >
    <Toolbar />
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Outlet/>
    </Container>
    </Box>
  </Box>
  );
  };







  export default DashboardLayout