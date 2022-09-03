import css from './Container.module.css';

export default function AppContainer({ children }) {
  return <div className={css.container}>{children}</div>;
}
