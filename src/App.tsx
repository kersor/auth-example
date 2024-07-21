import React from 'react'
import Auth from './components/auth/Auth'

const App = () => {
  return (
    <div className='flex'>
      <div className="max-w-[1000px] w-full mt-[5px] ml-[5px] relative rounded-[10px]">
          <img className="-z-[1] absolute top-0 left-0 h-[calc(100vh-10px)] w-full rounded-[10px] object-cover" src="/images/back.png" alt="" />
          <div className="-z-[1] absolute h-[calc(100vh-10px)] w-full bg-[rgba(0,0,0,0.4)] rounded-[10px]"></div>
          <div className='flex flex-col justify-between mt-[40px] h-[calc(100vh-100px)]'>
            <div>
              <img className='w-[92px] block mx-auto' src="/images/logo.svg" alt="" />
              <div className='pt-[24px] text-center leading-[82px] font-[NotoSerif] text-white text-[96px] -tracking-[0.05em] mx-auto max-w-[623px]'>Explore Near Nature Spots</div>
            </div>
            <div className='max-w-[573px] mx-auto text-center text-white text-[14px] px-[20px]'>Lorem ipsum dolor sit amet consectetur. Lorem posuere at odio nullam pulvinar enim consequat at vitae. Elit ullamcorper ultrices magna malesuada erat.</div>
          </div>
      </div>
      <Auth />
    </div>
  )
}

export default App