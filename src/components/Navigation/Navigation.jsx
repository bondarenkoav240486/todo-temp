import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={css.sidenav}>
            <ul className={css.list}>
                <li className={css.list__item}>Home</li>
                <li className={css.list__item}>My work</li>
                <li className={css.list__item}>Important</li>
                <li className={css.list__item}>Notification</li>
            </ul>
        </div>
    );
}

export default Navigation;