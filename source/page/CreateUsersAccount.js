import {useHistory} from "react-router-dom";
import Https from "../plugins/Fetch";
import {useState as state} from 'react';

const CreateUsersAccount = () => {
    const [name, setName] = state('')
    const [age, setAge] = state()
    const [email, setEmail] = state('')
    const [password, setPassword] = state('')

    function upload() {
        const user = {
            name,
            age,
            email,
            password
        }
        Https.post('/addUser', user)
            .then(res => {
                if(!res.success) {
                    alert(res.message);
                } else if (res.success === true) {
                    changeRoute();
                }
            })
    }

    return <div>
        <div className="uploadingForm">
            <input onChange={(e) => setName(e.target.value)}  type="text" placeholder="Name"/>
            <input onChange={(e) => setAge(e.target.value)}  type="number" placeholder="Age"/>
            <input onChange={(e) => setEmail(e.target.value)}  type="text" placeholder="El. paštas"/>
            <input onChange={(e) => setPassword(e.target.value)}  type="password" placeholder="Slaptažodis"/>
            <button onClick={() => upload()}>Sukurti naują vartotoją</button>
        </div>
    </div>
}

export default CreateUsersAccount;