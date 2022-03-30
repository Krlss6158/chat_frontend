import { Icon } from '@iconify/react';

const Input = ({
    type = 'text',
    placeholder = 'input placeholder',
    focus = false,
    icon = false,
    onClick,
    onChange,
    value,
    name,
    label
}) => {
    return (
        <>
            {icon ?
                <div className='relative w-full'>
                    {label && <label htmlFor={name} className='text-gray-500 font-medium cursor-pointer text-sm'>{placeholder}</label>}
                    <input name={name} id={name} onChange={onChange} value={value} autoFocus={focus} type={type ? 'text' : 'password'} placeholder={placeholder} className='px-4 py-2 border focus:outline-none w-full rounded-sm' />
                    <div className={`absolute right-3 text-gray-600 cursor-pointer ${label ? 'top-9' : 'top-3'}`}>
                        {
                            type ? <Icon icon="el:eye-open" width={18} onClick={onClick} /> : <Icon icon="el:eye-close" width={18} onClick={onClick} />
                        }
                    </div>
                </div>
                :
                <div className='w-full'>
                    {label && <label htmlFor={name} className='text-gray-500 font-medium cursor-pointer text-sm'>{placeholder}</label>}
                    <input name={name} id={name} onChange={onChange} value={value} autoFocus={focus} type={type} placeholder={placeholder} className='px-4 py-2 border focus:outline-none w-full rounded-sm' />
                </div>

            }
        </>
    );
}

export default Input;