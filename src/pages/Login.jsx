import React, { use, useState } from 'react'
import useFormValidator from '../hooks/useFormValidator'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPhoneVolume, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' })

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errors, validate] = useFormValidator();

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate({email, password});
        if(isValid) {
            console.log("Đăng nhập thành công");
        } else {
            console.log("Đăng nhập thất bại");
        }
    }
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center gap-1 mx-auto md:h-screen lg:py-0 w-[500px]">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        ĐĂNG NHẬP
                    </h1>
                    <form className="space-y-2 md:space-y-2 flex flex-col gap-0" action="#" onSubmit={handleSubmit}>
                        <div className='bg-green-600 rounded-lg p-2 flex justify-center cursor-pointer items-center gap-2'>
                            <div className=' '>
                                <FontAwesomeIcon icon={faPhoneVolume} className='text-white text-xl' />
                            </div>
                            <div>
                                <a href="" className='text-white'>Số điện thoại</a>
                            </div>
                        </div>
                        <div className='bg-red-500 rounded-lg p-2 flex justify-center items-center gap-2'>
                            <div className=' '>
                                <FontAwesomeIcon icon={faGoogle} className="text-white text-xl" />
                            </div>
                            <div>
                                <a href="" className='text-white'>Google</a>
                            </div>
                        </div>
                        <div className=' flex flex-col'>
                            <div className='relative'>
                                <span className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                                    <FontAwesomeIcon icon={faGoogle} className="text-gray-400" />
                                </span>
                                <input name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-10" placeholder="Tên đăng nhập hoặc email"  value={email} onChange={(e) => setEmail(e.target.value)} /> 
                            </div>
                                {errors.email && <p className='text-red-500'>{errors.email}</p>}
                        </div>
                        <div className=' flex flex-col'>
                            <div className='relative flex'>
                                <span className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
                                    <FontAwesomeIcon icon={faLock} className="text-gray-400" />
                                </span>
                                <input type={visible ? "text" : "password"} name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pl-10" placeholder="Mật khẩu" required="" onChange={(e) => setPassword(e.target.value)} value={password} />
                                <button
                                    onClick={() => setVisible(!visible)}
                                    className="absolute right-0 flex items-center h-full px-3 text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
                                    type='button'
                                    >
                                    <FontAwesomeIcon icon={visible ? faEyeSlash : faEye} className="text-xl" />
                                </button>
                            </div>
                            <div className='my-1 min-h-[20px]'>
                                {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:outline-none" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="remember" className="text-gray-500 dark:text-gray-300 cursor-pointer hover:font-bold hover:text-black">Lưu thông tin đăng nhập</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:text-blue-700 dark:text-primary-500">Quên mật khẩu?</a>
                        </div>
                        <div className='flex justify-center items-center bg-blue-500 p-2 rounded-lg hover:bg-blue-800 cursor-pointer hover:text-white'>
                            <button className='text-1xl font-bold cursor-pointer' type='submit'>Đăng nhập</button>
                        </div>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Bạn chưa có tài khoản <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Đăng ký</a>
                        </p>
                    </form>
                </div>
            </div>
    </div>
    )
}

export default Login