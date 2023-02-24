import TaskEditor from "components/TaskEditor/TaskEditor";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "redux/tasks/operations";
import { selectLoading } from "redux/tasks/selector";

const Tasks = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    useEffect(() => {
        dispatch(getTasks());
    }, [dispatch]);

    return (
        <>
            <Helmet>
                <title>Your tasks</title>
            </Helmet>

            <TaskEditor>
                <div>{isLoading && 'Request in progress...'}</div>
            </TaskEditor>
        </>
    );
}

export default Tasks;