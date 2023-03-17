import { useDispatch } from "react-redux";
import { deleteTask } from "redux/tasks/operations";
import css from './Task.module.css';

const Task = () => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(id));
    }

    return (
        <div>
            <div className={css.wrapper}>
                <p className={css.text}>{text}</p>
                <button type="button" className={css.button} onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default Task;