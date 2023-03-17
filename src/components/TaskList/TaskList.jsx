import { useSelector } from "react-redux";
import { selectAllTasks } from "redux/tasks/selector";
import Task from "components/Task/Task";
import css from './TaskList.module.css';

const TaskList = () => {
    const tasks = useSelector(selectAllTasks);

    return (
        <ul className={css.list}>
            {tasks.map(({ id, text }) => (
                <li key={id}>
                    <Task id={id} text={text} />
                </li>
            ))}
        </ul>
    );
}

export default TaskList;