import './css/login.scss'
import {useState} from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <section className='login-container'>
            <div className='login-wrapper'>
                <h1 className='fw-bold'>Login</h1>
                <input  className='m-3 rounded-5' type="text"  
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />
                <input className='m-3 rounded-5' type="password" 
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                <button className='m-3 p-2 btn btn-danger rounded-5' type="">Ingresar</button>
            </div>
        </section>

    )
}

export default Login