import { useSelector } from "react-redux";
import { selectAllLists } from "redux/lists/selector";
import List from "../List/List";
import css from './ListOfLists.module.css';

const ListOfLists = () => {
    const lists = useSelector(selectAllLists);

    return (
        <ul className={css.list}>
            {lists.map(({ id, listName }) => (
                <li key={id}>
                    <List id={id} listName={listName} />
                </li>
            ))}
        </ul>
    );
}


export default ListOfLists;