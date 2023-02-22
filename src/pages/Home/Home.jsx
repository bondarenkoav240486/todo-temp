import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.box}>
            <Helmet>
                <title>To Do List</title>
            </Helmet>
            <h1 className={css.title}>Welcome to To Do List</h1>
            <p className={css.discr}>If you are register just <Link className={css.link} to="/login">
                log In
            </Link>,
                but if you don't have account yet <Link className={css.link} to="/register">
                    registraion.
                </Link></p>
        </div>
    );
}

export default Home;