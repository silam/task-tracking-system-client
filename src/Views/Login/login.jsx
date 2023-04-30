import React , {useState} from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/authSlice";
import  './login.css';

export default function Login() {

    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({name:'', password:''})


    function inputChanged(e){
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
        })
    }

    function submit(e) {
        dispatch(signIn(formInput));
        e.preventDefault(); // prevent the page being loaded by itself
    }

    return (
        <div>
            <form className="login-page">
                <h1>Login:</h1>
                <input name='name' placeholder="name" type="text" onChange={inputChanged} value={formInput.name}/>
                <input name='password' placeholder="password" type="password" onChange={inputChanged} value={formInput.password}/>
                <button type="submit" onClick={submit}>Login</button>

            </form>
        </div>
    )
}