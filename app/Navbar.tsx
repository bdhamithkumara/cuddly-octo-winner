import React from 'react'

const Navbar = () => {
  return (
    <div className='xl:mx-36 mx-10'>
        <div className='justify-between flex pt-8'>
            <div className='my-auto'><span className='font-normal text-[16px] text-[#310e0e]'>LOGO</span></div>
            <div className='font-normal text-[16px] text-[#310e0e] sm:flex gap-10 my-auto hidden '>
                <span>Home</span>
                <span>About Us</span>
                <span>Contact Us</span>
            </div>
            <div>
                <button className='border-[2px] border-[#828282] rounded-[100px] px-10 py-2'>
                    <span className='text-[16px] font-medium '>Login</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar