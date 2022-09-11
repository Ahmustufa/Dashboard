import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ArticleIcon from "@mui/icons-material/Article";
import GridViewIcon from "@mui/icons-material/GridView";
import ChatIcon from "@mui/icons-material/Chat";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window, mainTitle } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const pathLocations = [
    {
      text: "Dashboard",
      path: "/",
      icon: <DashboardIcon />,
    },
    {
      text: "Products",
      path: "/People",
      icon: <GroupIcon />,
    },
    {
      text: "Statistics",
      path: "/Statistics",
      icon: <SignalCellularAltIcon />,
    },
    {
      text: "Documents",
      path: "/Documents",
      icon: <ArticleIcon />,
    },
  ];
  const pathLocations1 = [
    {
      text: "Chat",
      path: "/Chat",
      icon: <ChatIcon />,
    },
    {
      text: "Support",
      path: "/Support",
      icon: <HelpCenterIcon />,
    },
    {
      text: "Calendar",
      path: "/Calendar",
      icon: <CalendarTodayIcon />,
    },
  ];
  const drawer = (
    <div>
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          margin: "0rem",
          padding: "0rem",
          height: "4rem",
          justifyContent: "center",
        }}
      >
        <Button startIcon={<GridViewIcon />} size="large">
          MDash
        </Button>
      </div>
      <Divider />
      <List>
        {pathLocations.map((item, index) => (
          <Link to={item.path} style={{ textDecoration: "none" }}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "black", mb: "1rem" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ mb: "1rem" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {pathLocations1.map((item, index) => (
          <Link to={item.path} style={{ textDecoration: "none" }}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ mb: "1rem" }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} sx={{ mb: "1rem" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ backgroundColor: "white" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "#000" }}
          >
            {/* {mainTitle} */} Dashboard
          </Typography>
        </Toolbar>
        <Divider sx={{ backgroundColor: "white" }} />
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
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
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
