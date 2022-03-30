import monster_cry from '../assets/images/404_cry_monster.png';

const NotMatch = () => {
    return (
        <div className='container_404'>
            <img src={monster_cry} width={150} />
            <p>Página no encontrada</p>
        </div>
    );
}

export default NotMatch;