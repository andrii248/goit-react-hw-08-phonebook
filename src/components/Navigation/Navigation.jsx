import React from 'react';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Stack component="nav" spacing={2} direction="row">
      <Button variant="outlined">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.inactive}`
          }
        >
          Home
        </NavLink>
      </Button>
      {isLoggedIn && (
        <Button variant="outlined">
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive ? `${css.active}` : `${css.inactive}`
            }
          >
            Contacts
          </NavLink>
        </Button>
      )}
    </Stack>
  );
};

export default Navigation;
