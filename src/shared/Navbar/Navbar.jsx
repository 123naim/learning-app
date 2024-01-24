import { Link } from 'react-router-dom';
import logo from '../../assets/w3Schools-logo.png'
import { MdSearch } from "react-icons/md";

const Navbar = () => {
    const navlink = <>
        <Link><img className='w-20 h-16' src={logo} alt="" /></Link>
        <Link><li className='hover:bg-[#04aa6d] hover:text-white text-[18xl] h-16 flex items-center px-5 -tracking-tighter' >Exersise </li></Link>
        <Link><li className='hover:bg-[#04aa6d] hover:text-white text-[18xl] h-16 flex items-center px-5 -tracking-tighter' >Tutorials</li></Link>
        <Link><li className='hover:bg-[#04aa6d] hover:text-white text-[18xl] h-16 flex items-center px-5 -tracking-tighter' >Certificates</li></Link>
        <Link><li className='hover:bg-[#04aa6d] hover:text-white text-[18xl] h-16 flex items-center px-5 -tracking-tighter' >Services</li></Link>
    </>
    return (
        <div>
            <div className='flex gap-3 justify-between items-center'>
                <ul className='flex'>
                    {navlink}
                </ul>
                <div className='flex items-center relative mr-3'>
                    <input className='w-48 border-2 border-gray-500 rounded-full px-3 py-1 ' type="text" placeholder='Search...' />
                    <span className='text-2xl text-gray-800 absolute right-3'><MdSearch /></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;