import React, { FC, useState } from 'react'
import { IInputSelect } from '../Types/Types'

const InputSelect: FC<IInputSelect> = ({type, styles}) => {
    // хук отвечающий за состоянием пароля, виден ли он или нет
    const [activePassword, setActivePassord] = useState(true)

  return (
    <div className=''>
        <div className='text-[14px]'>{type === 'Email' ? 'Email' : 'Password'}</div>
        <div className={`flex w-full px-[16px] py-[14px] border border-[#EDEDED] text-[14px] rounded-[4px] mb-[8px] ${!styles ? '' : styles}`}>
            <input 
                className={`w-full border-[0] outline-none`} 
                placeholder={`Enter your ${type === 'Email' ? 'Email' : 'Password'}`} 
                type={(type == 'Password' && activePassword ? 'Password' : 'Email')  } 
            />
            {
                type === 'Password' && <button onClick={() => setActivePassord(prev => !prev)} className='pl-[10px]'><img src='/images/eye.png' /></button>
            }
        </div>
    </div>
  )
}

export default InputSelect