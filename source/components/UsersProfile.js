import { useHistory } from "react-router-dom";

function UsersProfile({ user }) {
    const history = useHistory()

    function changeRoute() {
        history.push('updateUser/'+user._id)
    }

    return (
        <div className="recipeCard" onClick={changeRoute}>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <div>{user.email}</div>
        </div>
    );
}

export default UsersProfile;