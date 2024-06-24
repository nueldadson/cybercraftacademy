import React from 'react';

const Buttons = ({text}) => {
  return <button className='w-[80px] cursor-pointer bg-orangee rounded-[0.64rem] p-[0.56rem] h-full  text-[0.95rem] flex justify-center items-center text-[white]'>
    {text}
  </button>;
};

export default Buttons;
