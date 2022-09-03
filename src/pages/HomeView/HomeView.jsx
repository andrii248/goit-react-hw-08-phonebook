import { Link, Outlet } from 'react-router-dom';
import HomeImg from '../../images/homeImg.png';
import css from './HomeView.module.css';

export default function HomeView() {
  return (
    <div>
      <Outlet />
      <h1 className={css.title}>Phonebook</h1>
      <p className={css.text}>
        Save your contacts <Link to={'/contacts'}>here</Link>
      </p>
      <div className={css.image}>
        <img src={HomeImg} alt="phonebook" width={300} />
      </div>
    </div>
  );
}
