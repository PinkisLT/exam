import {useState as state, useEffect} from 'react';

import http from "../plugins/Fetch";
import UsersProfile from "../components/UsersProfile";

function UsersAccount({  }) {
    const [users, setUsers] = state([])

    useEffect(() => {
        http.get('/users').then(res => {
            setUsers(res.users);
        })
    }, [])

    return (
        <div className="flex-wrap">
            {users.map((item, index) =>
                <UsersProfile key={index} user={item}/>
            )}
        </div>
    );
}

export default UsersAccount;