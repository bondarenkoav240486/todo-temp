import css from './User.module.css';

const User = () => {
    return (
        <div className={css.user_box}>
            <ul className={css.user}>
                <li className={css.user_item}>IMG</li>
                <li className={css.user_item}>User name</li>
            </ul>

            <ul className={css.user_info__box}>
                <li className={css.user_info__item}>Name: User name</li>
                <li className={css.user_info__item}>Phone: +380111111</li>
                <li className={css.user_info__item}>Emil:user@gmail.com</li>
            </ul>
        </div>
    );
}

export default User;