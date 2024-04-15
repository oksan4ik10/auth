import { useAppDispatch } from "../../store/store";
import { removeToken } from "../../store/reducers/userReducer";


function HomePages() {
    const dispatch = useAppDispatch();

    const signOut = () => {
        dispatch(removeToken())
    }

    return (
        <div>
            <h1>HomePages</h1>
            <button className="btn" onClick={signOut}>Sign out</button>
        </div>
    );
}

export default HomePages;