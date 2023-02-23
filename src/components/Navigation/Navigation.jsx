import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';


const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.nav__list}>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            <NavLink className={css.link} to="/lists">
                My lists
            </NavLink>
            <NavLink className={css.link} to="/important">
                Important
            </NavLink>

            {isLoggedIn && (
                <NavLink className={css.link} to="/tasks">
                    Tasks
                </NavLink>
            )}
        </nav>
    );
}

export default Navigation;