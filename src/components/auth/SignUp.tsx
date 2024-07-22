import React, { Dispatch, FC, SetStateAction } from 'react'
import InputSelect from '../../UI/InputSelect'
import { ISign } from '../../Types/Types';

interface IVisibleSign {
  activeSign: ISign;
  setActiveSign: Dispatch<SetStateAction<ISign>>;
}

const SignUp: FC<IVisibleSign> = ({activeSign, setActiveSign}) => {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div className='text-center'>
        <div className='text-[#121212] font-[NotoSerif] font-bold text-[42px] max-600px:text-[22px]'>Come join us</div>
        <div className='text-[#3D3D3D] text-[14px] mt-[10px] max-600px:mt-[0px] max-600px:text-[12px]'>Enter your email address and password to create your account</div>
      </div>
      <div className='mt-[56px] max-w-[448px] w-full'>
        <InputSelect styles='mb-[24px]' type="Email" />
        <InputSelect type="Password" />
        <button className='max-600px:mt-[20px] max-600px:text-[14px] bg-black text-white w-full py-[12px] rounded-[4px] mt-[40px]'>Sign Up</button>
        <button 
              className='max-600px:mt-[14px] mt-[24px] text-center w-full text-[14px] text-[#3E3E3E]' 
              onClick={() => setActiveSign(prev => ({ ...prev, activeSignIn: true, activeSignUp: false }))}>
                Do you have an account?
              <span className='text-[#121212] font-medium'> Sign In</span>
            </button>
      </div>
    </div>
  )
}

export default SignUp