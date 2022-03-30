import { Input } from '../components';
import Logo from '../assets/images/logo.png';
import default_avatar from '../assets/images/default_avatar.png';
import { useState } from 'react';

const Signup = () => {

    const [show, setShow] = useState(false);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');


    //img
    const [image, setImage] = useState(null);
    const [uploadingImg, setUploadingImg] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);

    const validateIMG = (e) => {
        const file = e.target.files[0];
        if (file.size >= 104857) return alert('El tamaño máximo permitido es 1mb')
        else {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    }

    return (
        <div className='w-full flex items-center justify-center max-w-xl m-auto h-screen'>
            <div className='bg-white w-full rounded-md shadow-md p-5'>
                <div className='flex flex-col items-center justify-center space-y-3' >
                    <label className='text-2xl font-bold text-gray-600'>Crear una cuenta</label>
                    <div className='relative'>
                        <label htmlFor='profile' className='px-2 bg-green-700 font-bold hover:bg-green-600 rounded-full text-white absolute bottom-0 right-0 cursor-pointer shadow'>+</label>
                        <input id='profile' name='profile' type='file' src='' accept='image/*' className='hidden' onChange={validateIMG} />
                        <img src={imagePreview || default_avatar} width={75} className='rounded-full min-w-full' />
                    </div>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <Input label name='fullname' focus placeholder='Nombre completo' onChange={(e) => setFullname(e.target.value)} value={fullname} />
                    <Input label name='user' placeholder='Usuario' onChange={(e) => setUser(e.target.value)} value={user} />
                    <Input label name='email' placeholder='Correo electrónico' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Input label name='password' placeholder='Contraseña' type={show} icon onClick={() => setShow(!show)} onChange={(e) => setPassword(e.target.value)} value={password} />
                </div>
                <small className='text-gray-600 flex justify-end my-3'>
                    ¿Ya tienes una cuenta? <a href='/login' className='text-blue-600 cursor-pointer'> Inicia sesión</a>
                </small>
                <button className='font-bold'>Crear cuenta</button>
            </div>
        </div>
    );
}

export default Signup;