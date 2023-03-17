import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={css.auth_nav__box}>
            <NavLink className={css.link} to="/register">
                Sing up
            </NavLink>
            <NavLink className={css.link} to="/login">
                Log In
            </NavLink>
        </div>
    );
};

export default AuthNav;