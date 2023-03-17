import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
    return (
        <div className={css.box}>
            <Helmet>
                <title>Daily Organizer</title>
            </Helmet>
            <h1 className={css.title}>Daily Organizer</h1>

            <h3>My lists</h3>
        </div>
    );
}

export default Home;