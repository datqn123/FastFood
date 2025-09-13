import React, { useState } from 'react'
import { FaBasketShopping } from "react-icons/fa6";
import { Link } from 'react-router';


const Navbar = () => {
  const linkItems = [
    {name: 'Đồ ăn', path:'/'},
    {name: 'Thực phẩm', path:'/fresh'},
    {name: 'Rượu bia', path:'/liquor'},
    {name: 'Hoa', path:'/flower'},
    {name: 'Thuốc', path:'/medicine'},
  ]

  const [activeLink, setActive] = useState('/');
  const [menuOpen, setMenuOpen] = useState(false)
  
  const handleLinkActive = (path) => {
    setActive(path)
    setMenuOpen(false)
  }
  return (
    <div className="fixed top-0 left-0 bg-white p-3 font-sans w-full z-50 shadow">
      <nav className="flex items-center justify-between mx-4 md:mx-20 relative">
        {/* Logo & Select */}
        <div className="flex items-center gap-4 md:gap-15">
          <div className="rounded-full w-12 h-12 overflow-hidden cursor-pointer">
            <img
              src="src/assets/img/logo.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <select className=" hidden md:block border border-gray-300 rounded-md px-2 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="" disabled selected>Chọn thành phố</option>
            <option value="hanoi">Hà Nội</option>
            <option value="hcm">TP. Hồ Chí Minh</option>
            <option value="danang">Đà Nẵng</option>
            <option value="haiphong">Hải Phòng</option>
          </select>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center ml-5">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <span className="block w-6 h-1 bg-gray-700 mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-gray-700 mb-1 rounded"></span>
            <span className="block w-6 h-1 bg-gray-700 rounded"></span>
          </button>
        </div>

        {/* Nav links */}
        <div className='flex-1 flex justify-center'>
          <div className={`absolute md:static left-0 top-full md:top-auto w-full md:w-auto bg-white md:bg-transparent shadow md:shadow-none flex-col md:flex-row gap-2 md:gap-4 flex items-center justify-center transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
            {linkItems.map((item)=> (
              <Link key={item.path} to={item.path} className={`p-4 text-1xl ${
                activeLink === item.path ? 'text-red-500 font-bold border-b-4 border-solid' : 'text-gray-700'
              } hover:text-red-500 transition-colors duration-200`} onClick={() => handleLinkActive(item.path)} >{item.name}</Link>
            ))}
          </div>
        </div>

        {/* Login */}
        <div className="ml-auto flex items-center mr-2 md:mr-10">
          <button className='bg-transparent opacity-70 border-1 p-2 border-red-500 rounded-[5px] text-red-500 hover:bg-red-400 hover:text-white cursor-pointer hover:opacity-100 hover:scale-110'>
            Đăng nhập
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar