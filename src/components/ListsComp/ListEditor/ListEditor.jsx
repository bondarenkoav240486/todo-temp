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
        <form className={css.form} onSubmit={handleSubmit}>
            <input name="listName" className={css.input} />
            <button type="submit" className={css.button}>
                Add list
            </button>
        </form>
    );
}
export default ListEditor;