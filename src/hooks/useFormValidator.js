import { useState } from "react";

const useFormValidator = () => {
    const [errors, setErrors] = useState({})

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!email) {
            return 'Email không được rỗng'
        } else if (!emailRegex.test(email)) {
            return 'Email không hợp lệ'
        }
        return '';
    }

    const validatePassword = (password) => {
        if (!password) {
            return 'Password không được rỗng'
        } else if (password.length < 8) {
            return 'Mật khẩu phải có ít nhất 8 ký tự'
        } else if(!/[0-9]/.test(password)) {
            return 'Mật khẩu phải có ít nhất một chữ số'
        } else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return 'Mật khẩu phải có ít nhất một ký tự đặc biệt'
        }
        return '';
    }

    const validate = (fields) => {
        const newErrors = {}
        let isValid = true
        Object.keys(fields).forEach((field) => {
            if(field === 'email') {
                if(validateEmail(fields[field])) {
                    newErrors[field] = validateEmail(fields[field]);
                    isValid = false;
                }
            } else if(field === 'password') {
                if(validatePassword(fields[field])) {
                    newErrors[field] = validatePassword(fields[field]);
                    isValid = false;
                }
            }
        });
        setErrors(newErrors);
        return isValid;
    }
    return [errors, validate];
}
export default useFormValidator;
