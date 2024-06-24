import React from 'react';
import { heroimg } from '../assets/images';
import Buttons2 from './Buttons2';
import Buttons from './Buttons';

const Hero = () => {
    return (
        <div className='w-full flex flex-row max-[700px]:flex-col gap-6 mt-14 max-lg:mt-2 items-center'>
            <div className='w-full'>
                <p className=' text-[50px] font-extrabold text-bluee max-lg:text-[40px] max-[600px]:text-[32px] '>
                    Cultivate Tech Brilliance:
                </p>
                <p className=' text-[45px] leading-relaxed font-extrabold max-lg:text-[40px] max-[700px]:text-[35px] max-[600px]:text-[28px] '>
                    Shape Tomorrow's Tech Landscape Today, Innovate for a Brighter Future
                </p>
                <div className='flex flex-row gap-12 mt-6  max-[500px]:justify-center'>
                    <Buttons2 text='Login' />
                    <Buttons text='Signup' />
                </div>
            </div>
            <div className='w-full'>
                <img src={heroimg} alt='heroimage' />
            </div>
        </div>
    );
}

export default Hero;
