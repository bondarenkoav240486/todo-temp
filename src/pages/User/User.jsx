import css from './User.module.css';
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    setUserPhoneAction
} from "../../redux/auth/slice";


const User = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    console.log(user);

    const setUserPhone = (par) => ( 
        dispatch(setUserPhoneAction(par))
    );

    const enterPhoneNumber = (event,phoneNumber) => {
        if (event.code === 'Enter') {
            setUserPhone(phoneNumber);
            event.target.value = '';
        }
    }

    return (
        <div className={css.user_box}>
            <ul className={css.user}>
                <li className={css.user_item}>IMG</li>
                <li className={css.user_item}>User name</li>
                <li className={css.user_item}>User phone 
                    <input type="tel"
                         onKeyDown={(e)=>{
                                enterPhoneNumber(e,e.target.value);
                            }
                        }
                    />
                </li>
            </ul>

            <ul className={css.user_info__box}>
                <li className={css.user_info__item}>Name: {user.name}</li>
                <li className={css.user_info__item}>Phone: {user.phone}</li>
                <li className={css.user_info__item}>Emil: {user.email}</li>
            </ul>
        </div>
    );
}

export default User;