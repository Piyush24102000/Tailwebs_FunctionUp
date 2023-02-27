import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import './Login.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const Login = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

  
    const [lPassword, setLoginPassword] = useState()
    const [lEmail, setLoginEmail] = useState()

    /* --------Login Account ---------- */
    const loginPassword = (e) => {
        setLoginPassword(e.target.value)
    }
    const loginEmail = (e) => {
        setLoginEmail(e.target.value)
    }
    const loginAccount = (e) => {
        e.preventDefault()

        const obj = {
            Email: lEmail,
            Password: lPassword
        }
        axios.post('http://localhost:5000/login', obj)
            .then(() => {
                toast('Login Succesfull')
                navigate('/get')
            })
            .catch((e) => {
                toast(e.response['data'],
                    { position: toast.POSITION.BOTTOM_CENTER })
            })

    }
    /* ---------Create account----- */
    const [cEmail, setCreateEmail] = useState()
    const [cPassword, setCreatePassword] = useState()
   // const [msg, setMsg] = useState()

    const createPassword = (e) => {
        setCreatePassword(e.target.value)
    }
    const createEmail = (e) => {
        setCreateEmail(e.target.value)
    }

    const createAccount = (e) => {
        e.preventDefault()
        const obj = {
            Email: cEmail,
            Password: cPassword
        }
        axios.post('http://localhost:5000/create', obj)
            .then((e) => { toast('Account Created Successfully',{position: toast.POSITION.BOTTOM_CENTER }) })
            .catch((e) => { console.log(e) })
        
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Tailwebs</h1>
            <div className="container login-container">
                <div className="row">
                    <div className="col-md-6 login-form-1">
                        <h3>Login </h3>
                        <form>
                            <div className="form-group">
                                <input type="text" onChange={loginEmail} className="form-control" placeholder="Your Email *" />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={loginPassword} className="form-control" placeholder="Password *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" onClick={loginAccount} className="btnSubmit" value="Login" />
                            </div>

                        </form>
                    </div>
                    <div className="col-md-6 login-form-2">
                        <h3>Create User</h3>
                        <form>
                            <div className="form-group">
                                <input type="text" onChange={createEmail} className="form-control" placeholder="Your Email *" value={cEmail} />
                            </div>
                            <div className="form-group">
                                <input type="password" onChange={createPassword} className="form-control" placeholder="Your Password *" value={cPassword} />
                            </div>
                            <div className="form-group">
                                <input type="submit" onClick={createAccount} className="btnSubmit" value="SignUp" />
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login