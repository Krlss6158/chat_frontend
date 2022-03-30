import { Input } from '../components';
import Logo from '../assets/images/logo.png';
import { useState } from 'react';

const Login = () => {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div className='w-full flex items-center justify-center max-w-xl m-auto h-screen'>
            <div className='bg-white w-full rounded-md shadow-md p-5 space-y-3'>
                <div className='flex items-center justify-center' >
                    <a href='/'><img src={Logo} width={75} className='rounded-full mb-5' /></a>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <Input label name='user' focus placeholder='Usuario o correo electrónico' onChange={(e) => setUser(e.target.value)} value={user} />
                    <Input label name='password' placeholder='Contraseña' type={show} icon onClick={() => setShow(!show)} onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <small className='text-gray-600 flex justify-end'>
                    ¿No tienes una cuenta aún? <a href='/signup' className='text-blue-600 cursor-pointer'> registrate</a>
                </small>
                <button className='font-bold'>Iniciar sesión</button>
            </div>
        </div>
    );
}

export default Login;