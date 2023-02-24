import { Helmet } from "react-helmet";
import Tasks from "pages/Tasks/Tasks";

const Lists = () => {
    return (
        <div>
            <Helmet>
                <title>My Lists</title>
            </Helmet>
            <Tasks />
        </div>
    );
}

export default Lists;