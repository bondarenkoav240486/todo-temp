import { useDispatch } from "react-redux";
import { addList } from "redux/lists/operations";
import css from './ListEditor.module.css';

const ListEditor = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const listName = form.elements.listName.value;

        if (listName !== '') {
            dispatch(addList(listName));

            form.reset();
            return;
        }
        alert('Name is require!');
    }

    return (
        <div className={css.lists_box}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input name="listName" className={css.input_add} />
                <button type="submit" className={css.button_add}>
                    Add list
                </button>
            </form>

            <form className={css.form}>
                <input name="listName" className={css.input_filter} />
                <button type="submit" className={css.button_filter}>
                    Find list
                </button>
            </form>
        </div>
    );
}
export default ListEditor;