import React from 'react';
import { Button, Stack } from '@mui/material';
import css from './AuthNav.module.css';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <Stack component="div" spacing={2} direction="row">
      <Button variant="outlined">
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.inactive}`
          }
        >
          Sign up
        </NavLink>
      </Button>
      <Button variant="outlined">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? `${css.active}` : `${css.inactive}`
          }
        >
          Sign in
        </NavLink>
      </Button>
    </Stack>
  );
}
