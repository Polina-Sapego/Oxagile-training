import React, {useEffect, useState} from 'react';
import SettingsDisabled from '@images/settings-disabled.png';
import Settings from '@images/settings.png';
import Main from '@images/main.png';
import Search from '@images/search.png';
import MainDisabled from '@images/main-disabled.png';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:885px)');
  const profileList = useSelector((state: RootState) => state.newUser.users);
  const selectedProfile = profileList.find((profile) => profile.selected);
  const menu = [
    {
      path: '/', imgActive: Main, imgInactive: MainDisabled, label: 'Home',
    },
    {
      path: '/search', imgActive: Search, imgInactive: Search, label: 'Search',
    },
    {
      path: '/settings', imgActive: Settings, imgInactive: SettingsDisabled, label: 'Settings',
    },
  ];

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const drawerList = (
    <Box className="drawer-list" role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {menu.map((item) => (
          <ListItemButton
            sx={{ pl: 3 }}
            key={item.path}
            component={NavLink}
            to={item.path}
            selected={window.location.pathname === item.path}
          >
            <ListItemIcon>
              <img
                src={window.location.pathname === item.path ? item.imgActive : item.imgInactive}
                alt={item.label}
                width={24}
                height={24}
              />
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
        <ListItemButton
          component={NavLink}
          to="/userprofile"
          selected={window.location.pathname === '/userprofile'}
        >
          <ListItemIcon>
            <div className="profile-container-navigation">
              <div className="profile-image-container-navigation">
                <div className={`profile-image-navigation ${selectedProfile?.color}`} />
                <span className="profile-initial-navigation">
                  {selectedProfile?.name[0]?.toUpperCase()}
                </span>
              </div>
            </div>
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    </Box>
  );

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  return (
    <>
      {isMobile && (
        <Box className="mobile-menu-button">
          <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Box>
      )}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            bgcolor: '#2C3E50',
            paddingTop: '4%',
            paddingRight: '9%',
            height: '20%',
            borderRadius: '0 8px 8px 0',
          },
        }}
      >
        {drawerList}
      </Drawer>
      {!isMobile && (
        <nav className="navigation">
          {menu.map((item) => (
            <NavLink key={item.path} to={item.path} className="navigation-setting">
              {({ isActive }) => (
                <img src={isActive ? item.imgActive : item.imgInactive} alt={item.label} />
              )}
            </NavLink>
          ))}
          <NavLink to="/userprofile" className="navigation-profile">
            <div className="profile-container-navigation">
              <div className="profile-image-container-navigation">
                <div className={`profile-image-navigation ${selectedProfile?.color}`} />
                <span className="profile-initial-navigation">
                  {selectedProfile?.name[0]?.toUpperCase()}
                </span>
              </div>
            </div>
          </NavLink>
        </nav>
      )}
    </>
  );
}
