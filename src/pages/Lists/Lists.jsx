import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading } from "redux/lists/selector";
import ListEditor from "components/ListsComp/ListEditor/ListEditor";
import { getLists } from "redux/lists/operations";
import { useEffect } from "react";

const Lists = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);
    
    useEffect(() => {
        dispatch(getLists());
    }, [dispatch]);

    return (
        <div>
            <Helmet>
                <title>My Lists</title>
            </Helmet>

            <ListEditor>
                <div>{isLoading && 'Request in progress...'}</div>
            </ListEditor>
        </div>
    );
}

export default Lists;