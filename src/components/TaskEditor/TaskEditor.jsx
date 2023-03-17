import { useDispatch } from "react-redux";
import { addTasks } from "redux/tasks/operations";
import css from './TaskEditor.module.css';

const TaskEditor = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const text = form.elements.text.value;

        if (text !== '') {
            dispatch(addTasks(text));

            form.reset();
            return;
        }
        alert('Task cannot be empty. Enter some text!');
    }

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <input name="text" className={css.input} />
            <button type="submit" className={css.button}>
                Add task
            </button>
        </form>
    );
}
export default TaskEditor;