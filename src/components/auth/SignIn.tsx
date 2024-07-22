import React, { Dispatch, FC, SetStateAction } from 'react'
import InputSelect from '../../UI/InputSelect'
import { ISign } from '../../Types/Types'

interface IVisibleSign {
  activeSign: ISign,
  setActiveSign: Dispatch<SetStateAction<ISign>>
}


const SignIn: FC<IVisibleSign> = ({activeSign, setActiveSign}) => {


  return (
    <div className='flex flex-col justify-center items-center w-full '>
        <div className='text-center'>
            <div className='text-[#121212] font-[NotoSerif] font-bold text-[42px] max-600px:text-[22px]'>Welcome Back</div>
            <div className='text-[#3D3D3D] text-[14px] mt-[10px] max-600px:mt-[0px] max-600px:text-[12px]' >Enter your email and password to access your account</div>
        </div>
        <div className='mt-[56px] max-w-[448px] w-full'>
            <InputSelect styles='mb-[24px]' type="Email" />
            <InputSelect type="Password" />
            <div className='mt-[14px] text-right text-[#3E3E3E] text-[14px] max-600px:text-[12px]'>Forgot password? <span className='text-[#121212] font-medium'>Change now</span></div>
            <button className='max-600px:mt-[20px] max-600px:text-[14px] bg-black text-white w-full py-[12px] rounded-[4px] mt-[40px]'>Sign In</button> 
            <button 
              className='max-600px:mt-[14px] mt-[24px] text-center w-full text-[14px] text-[#3E3E3E]' 
              onClick={() => setActiveSign(prev => ({ ...prev, activeSignIn: false, activeSignUp: true }))}>
                Don’t have an account? 
              <span className='text-[#121212] font-medium'> Sign Up</span>
            </button>
        </div>
    </div>
  )
}

export default SignIn