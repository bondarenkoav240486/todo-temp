import { useDispatch } from "react-redux";
import { deleteList } from "redux/lists/operations";
import css from './List.module.css';

const List = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteList(id));
    }

    return (
        <div>
            <div className={css.wrapper}>
                <p className={css.text}>{listName}</p>
                <button type="button" className={css.button} onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default List;