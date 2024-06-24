// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import { logo, logotext } from '../assets/images';
import Buttons from './Buttons';
import Buttons2 from './Buttons2';
import Search from './Search';
import { FaBars, FaSearch } from 'react-icons/fa';

const Layout = ({ children }) => {
  return (
    <div>
      <nav className=' bg-white flex flex-row gap-6 px-4 py-4 items-center w-full justify-between'>
          <FaSearch size={22}  className='text-orangee hidden max-[500px]:block' />
          <Link to='/' className='flex flex-row items-center w-fit'>
            <div className='min-h-[35px] min-w-[35px] max-h-[35px] max-w-[35px] flex items-center'>
              <img src={logo} className='w-full h-full' alt='CyberCraft Academy Logo' />
            </div>
            <div className='max-h-[40px] w-[200px] mt-1 ml-3 flex items-center justify-center max-md:hidden'>
              <img src={logotext} className='w-full' alt='CyberCraft Academy Logo Text' />
            </div>
          </Link>
        <div className='hidden max-lg:block xl:block max-lg:w-full xl:w-[300px] max-[500px]:hidden'>
          <Search />
        </div>
        <div>
          <FaBars size={22} className='text-orangee hidden max-lg:block'/>
        </div>
        <ul className='flex-row flex gap-4 ml-auto text-gray-500 font-bold max-lg:hidden'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <span className='font-medium'>|</span>
          <li>
            <Link to="/about">About</Link>
          </li>
          <span className='font-medium'>|</span>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <span className='font-medium'>|</span>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <span className='font-medium'>|</span>
          <li>
            <Link to="/events">FAQs</Link>
          </li>
          <span className='font-medium'>|</span>
          <li>
            <Link to="/events">Contact</Link>
          </li>
        </ul>
        <div className='flex flex-row gap-4 items-center max-lg:hidden'>
          <Link to='login'><Buttons2 text='Login' /></Link>
          <Link to='login'><Buttons text='Signup' /></Link>
        </div>
      </nav>
           {/* <Drawer className='hidden'>
            <div className='w-[100vw] xsm:w-[60vw]  p-6'>
                <div onClick={()=>setMenuOpen(false)} className='text-[#E50914] cursor-pointer text-[3rem] flex'>
                    <CloseIcon className='!w-[2.1rem] !h-[2.1rem]'/>
                </div>
                <div className='flex flex-col gap-0 mt-[2.2rem] items-center '>
                     <Link className='hover:text-black text-gray-500 font-semibold' href={DASHBOARD_ROUTES.DASHBOARD}>Admin</Link>
                    <Link className='w-full p-3 ' href='/login'>
                        <Button isOutlined content='Login'  />
                    </Link>
                    <Link className=' w-full p-3 mt-[-0.9rem] ' href='/signup'>
                        <Button  content='Signup'  />
                    </Link>
                </div>

            </div>
       </Drawer> */}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
