import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FaAngleDown } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mainBanner from '../assets/img/main-banner.jpg'; 

library.add(fas);




const Home = () => {
  const [ward, setWard] = useState()
  return (
   <>   
      <div className='flex flex-col w-[1200px] mx-auto'>
        {/* Title */}
        <div className='p-10 text-2xl font-bold text-center'>
          <span>Danh sách ưu đãi</span>
        </div>
        {/* Ward and result  */}
        <div className='flex justify-between p-1 cursor-pointer'>
          <div className='flex flex-col items-center'>
            <span className='text-gray-500'>Khu vực</span>
            <FaAngleDown className='' />
          </div>
          <div>
            <span className='p-2'>1088 Kết quả</span>
            <select name="" id="" className='bg-white p-1 w-[150px] rounded-md text-black'>
              <option value="Tất cả" disabled selected>Tất cả</option>
              <option value="Giảm nhiều nhất">Giảm nhiều nhất</option>
              <option value="Mới nhất">Mới nhất</option>
              <option value="Sắp hết hạn">Sắp hết hạn</option>
              <option value="Không phí dịch vụ">Không phí dịch vụ</option>
              <option value="Gần tôi">Gần tôi</option>
            </select>
          </div>
        </div>
        <div className='w-[1200px] h-[1px] bg-gray-500'></div>
        {/* List menu */}
        <div className='grid grid-cols-5 gap-4 px-10 p-10'>
          <div className='w-[200px] h-[200px] bg-white flex flex-col rounded-[5px] hover:shadow-xl/30'>
            <div className='w-[200px] h-[100px] rounded-[5px] '>
              <img src="src\assets\img\food\image_food.jfif" alt="" className='rounded-t-[5px]'/>
            </div>
            <div className='mt-3 flex gap-1 items-center p-2'>
              <FaShieldHalved  className='text-4xl text-amber-300' />
              <span className='truncate'>Lu Yu Tea - Trà Sữa Olong Đặc Sản - Thạch Lam</span>
            </div>
          </div>
          <div className='w-[200px] h-[200px] bg-white'>2</div>
          <div className='w-[200px] h-[200px] bg-white'>3</div>
          <div className='w-[200px] h-[200px] bg-white'>4</div>
          <div className='w-[200px] h-[200px] bg-white'>5</div>
        </div>
      </div>
   </>
  )
}

export default Home