import React, {useState} from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword]=useState('');

    const loginSubmit = async ()=>{
        console.log('login Sumbit run')
        if (!email && !password) {
            toast.error('Empty Fields login')
        }else{
            const loginResponse = await axios.post('http://172.16.0.103:3001/login', {email, password}, {withCredentials: true});
            if (loginResponse.status === 200) {
                toast.success('Login Successfuly')
                console.log(loginResponse.data);
            }    
        }
    }
    return (
        <div>
            <h2>Login Page</h2>
            <input type='text' placeholder='email' onChange={e=>setEmail(e.target.value)} />
            <input type='text' placeholder='password' onChange={e=>setPassword(e.target.value)} />
            <button onClick={loginSubmit}>Login</button>
        </div>
    )
}

export default Login;
