import { Helmet } from "react-helmet";
import css from './Important.module.css';

const Important = () => {
    return (
        <div className={css.imp_box}>
            <Helmet>
                <title>Important</title>
            </Helmet>

            <h1 className={css.title}>Important page</h1>
            <ul className={css.imp_list}>
                <li className={css.list_item}>Important lists</li> {/* Link to important lists */}
                <li className={css.list_item}>Important lists</li> 
            </ul>
        </div>
    );
}

export default Important;