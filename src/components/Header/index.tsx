import classNames from 'classnames';
import { NavLink } from 'react-router';
import styles from './index.module.scss';

const NAV_ITEMS = [
  { label: 'Home', to: '/', end: true },
  { label: 'Blog', to: '/blog', end: false },
] as const;

const Header = () => (
  <nav aria-label='主导航' className={styles.navContainer}>
    {NAV_ITEMS.map(({ label, to, end }) => (
      <NavLink
        key={to}
        to={to}
        end={end}
        className={({ isActive }) =>
          classNames(styles.navTab, 'transition-colors', {
            'bg-black text-white': isActive,
            'bg-white text-black hover:bg-gray-100': !isActive,
          })
        }
      >
        {label}
      </NavLink>
    ))}
  </nav>
);

export default Header;
