import Friends from '../assets/images/friends.jpg';
import Logo from '../assets/images/logo.png';
import { Icon } from '@iconify/react';

const Home = () => {
    return (
        <div className="md:grid md:grid-cols-2 grid-cols-1 flex justify-center items-center h-screen relative">
            <div className='flex flex-col justify-center items-center text-center'>
                <div className='font-bold text-2xl text-gray-900'>Comparte el mundo con tus amigos</div>
                <div className='font-semibold'>Conectate con tus amigos</div>
                <a href='/login' className='a_home px-4 py-3 mt-5 rounded-md font-semibold text-white flex items-center' >
                    Empezar ahora <Icon icon="entypo:chat" className='ml-2' />
                </a>
            </div>
            <div className='w-full h-full md:block hidden'>
                <img className='h-screen object-cover' src={Friends} />
            </div>
            <a href='/'>
                <img className='absolute bottom-5 right-5 rounded-full' width={70} src={Logo} />
            </a>
        </div>
    );
}

export default Home;