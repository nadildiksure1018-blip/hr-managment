import React from 'react'
import logoIcon from '../../assets/logo-icon.svg'
import logoText from '../../assets/logo-text.svg'
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, colors, Divider, Drawer, List, ListItemButton, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, Outlet } from "react-router-dom";


function Nav() {

  const [open, setOpen] = React.useState(true);
  const drawerOpenWidth = 240;
  const drawerClosedWidth = 64;

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path:'/dashboard' },
    { text: 'Payroll', icon: <DashboardIcon />, path:'/payroll/overview'},
    { text: 'Leave', icon: <DashboardIcon />, path:'/leave/request'},
  ];
  
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const Logo = () => {
    return (
      <>
      <Box
        sx={{
          height: 64,
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {open && <Stack direction="row" alignItems="center" spacing={1}>
          <Box
            component="img"
            src={logoIcon}
            alt="Logo"
            sx={{ width: 38, height: 38, objectFit: "contain" }}
          />
          <Box
            component="img"
            src={logoText}
            alt="Logo Text"
            sx={{ width: 112, height: 33 }}
          />
        </Stack>  }                     
      </Box>
      <Divider />
      </>
    );
};
  return (
    <>
    <Box sx={{ backgroundColor:'primary.main', height: 64, width: '100%', mb: 0 }}>  //header
      <Typography variant="h2" 
      sx={{ 
        position: 'absolute',
        left: open ? drawerOpenWidth + 60 : drawerClosedWidth + 60,
        top: 13,
        color: colors.common.white,
        mb: 0
        }}>
        HR Management System
      </Typography>
    </Box>

    <Drawer variant="permanent" sx={{
      width: open ? drawerOpenWidth : drawerClosedWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
      width: open ? drawerOpenWidth : drawerClosedWidth,
      boxSizing: 'border-box',
      overflowX: 'hidden',
      transition: 'width 0.3s',
      },
      }} >
      <Logo />

      <List sx={{ display: 'flex', flexDirection: 'column', width: "fit-content", mx: 'auto', pt: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton 
          key={item.text}
          component={NavLink}
          to={item.path}
          >
            <Box
            sx={{ display: 'flex', alignItems: 'center', p: open ? 1 : 0, pb: 1 }}
            >
            <Box sx={{ mr: 1 }}>{item.icon && React.cloneElement(item.icon, {
              sx: {
              fontSize: open ? 24 : 28,
              color: "text.primary"
              },
              })}
            </Box>
            {open && (<Typography variant="body1" color="text.primary" sx={{fontWeight:500}}> {item.text} </Typography>)}
            </Box>
          </ListItemButton>
          
        ))}
      </List>
    </Drawer>

    <Button 
    onClick={toggleDrawer}
    sx={{
    position: 'absolute',
    left: open ? drawerOpenWidth + 2 : drawerClosedWidth+2,
    pl: 0,
    top: 12,
    transition: 'left 0.3s',
    
    '&:hover': {
    backgroundColor: 'transparent',
    },
    }}
    >
      <MenuIcon sx={{ color: '#ffffff' }} />
    </Button>

    <main
        style={{
          marginLeft: open ? drawerOpenWidth : drawerClosedWidth,
          transition: "margin-left 0.3s ease",
          padding: 10,
        }}
      >
        <Outlet />
      </main>

    </>
  )
}

export default Nav