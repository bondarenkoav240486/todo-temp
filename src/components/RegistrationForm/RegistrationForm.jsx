import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import css from './RegistrationForm.module.css';

const RegistrationForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.elements.name;
        const email = form.elements.email;
        const password = form.elements.password;

        const newUser = {
            name: name.value,
            email: email.value,
            password: password.value,
        }

        dispatch(register(newUser));
        form.reset();
    }

    return (
        <div className={css.reg__form}>
            <h2 className={css.title}>Registration</h2>
            <form className={css.form} onSubmit={handleSubmit}>
                <label className={css.labele}>
                    <input className={css.input} type="text" name="name" placeholder="Name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                </label>

                <label className={css.labele}>
                    <input className={css.input} type="email" name="email" placeholder="Email"
                        title="Email must consist of your personal info,@ symbol and domain. Example, personal_info@domain"
                        required />
                </label>

                <label className={css.labele}>
                    <input className={css.input} type="password" name="password" placeholder="Password" required />
                </label>
                <button type="submit" className={css.button}>Sing up</button>

            </form>
            <p>If you have an account <Link to='/login'>Log in</Link></p>
        </div>
    );
}

export default RegistrationForm;
