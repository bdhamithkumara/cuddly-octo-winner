import Image from 'next/image'
import React from 'react'
import Medicines from '../public/images/1.svg'
import DineEase from '../public/images/2.svg'
import FindCars from '../public/images/3.svg'
import Electronics from '../public/images/4.svg'

const Hero = () => {
  return (
    <div className="mt-12">
        <div className="flex justify-center">
            <h1 className="font-bold xl:text-[48px] text-[36px] text-[#00203f] text-center w-[1058px]">Medicines, Cars, Dining, Electronics 
            Your All-in-One Solution!</h1>
        </div>
        <div className='flex justify-center flex-col items-center mt-10 pb-10'>
            <div className='xl:flex gap-10 flex-row'>
                <div className='bgColorMedicines px-4 pt-4 pb-8 rounded-[14px] text-center'>
                    <div className='flex justify-center mb-[8px]'><Image src={Medicines} alt='Medicines_Image'/></div>
                    <span className='font-bold text-[28px]  text-[#00588a] '>Medicines</span>
                    <p className='text-[#233e60] w-[285px] text-[13px] mt-[8px]'>Welcome to Heal Hub, where wellness meets convenience on your terms...</p>
                    <button className='btnMedicines rounded-[41px] px-8 py-2 text-[#ffff] mt-[8px]'>Visit Page</button>
                </div>

                <div className='bgColorDineEase  px-4 pt-4 pb-8 rounded-[14px] text-center xl:mt-0 mt-[40px]'>
                    <div className='flex justify-center mb-[8px]'><Image src={DineEase} alt='Dine Ease_Image'/></div>
                    <span className='font-bold text-[28px] textColor '>Dine Ease</span>
                    <p className='text-[#742d06] w-[285px] text-[13px] mt-[8px]'>Dine Ease, ultimate and best destination, Ease brings you your favorite flavors...</p>
                    <button className='btnDineEase rounded-[41px] px-8 py-2 text-[#ffff] mt-[8px]'>Visit Page</button>
                </div>
            </div>
            <div className='xl:flex gap-10 flex-row mt-[40px]'>
                <div className='bgColorFindCars  px-4 pt-4 pb-8 rounded-[14px] text-center'>
                    <div className='flex justify-center mb-[8px]'><Image src={FindCars} alt='FindCars_Image'/></div>
                    <span className='font-bold text-[28px]  textColor '>Find Cars</span>
                    <p className='text-[#742d06] w-[285px] text-[13px] mt-[8px]'>AutoCrafters, where is Care. We take pride in delivering smooth care for your vehicle...</p>
                    <button className='btnFindCars rounded-[41px] px-8 py-2 text-[#ffff] mt-[8px]'>Visit Page</button>
                </div>
                
                <div className='bgColorElectronics  px-4 pt-4 pb-8 rounded-[14px] text-center xl:mt-0 mt-[40px]'>
                    <div className='flex justify-center mb-[8px]'><Image src={Electronics} alt='Electronics_Image'/></div>
                    <span className='font-bold text-[28px]  textColor '>Electronics</span>
                    <p className='text-[#742d06] w-[285px] text-[13px] mt-[8px]'>Welcome to Heal Hub, where wellness meets convenience on your terms...</p>
                    <button className='btnElectronics rounded-[41px] px-8 py-2 text-[#ffff] mt-[8px]'>Visit Page</button>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Hero