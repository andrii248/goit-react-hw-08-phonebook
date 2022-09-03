import { useSelector } from 'react-redux';
import { useLogOutMutation } from 'redux/auth/authApi';
import { authSelectors } from 'redux/auth';
import { Button } from '@mui/material';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const [logOut] = useLogOutMutation();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={css.menu}>
      <span className={css.name}>Welcome, {name}</span>
      <Button
        variant="outlined"
        type="button"
        sx={{ fontWeight: 600, color: '#2000b9' }}
        onClick={() => logOut()}
      >
        Sign out
      </Button>
    </div>
  );
}
