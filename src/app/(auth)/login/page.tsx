import Image from 'next/image'
import React from 'react'
import LoginForm from './_components/login-form'
const LoginPage = () => {
    return (
        <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0'>
            <div className='hidden md:col-span-1 md:block'>
                <Image src="/assets/images/auth_sidebar.png" alt="Auth Image" width={1000} height={1000} className='object-cover w-full h-[400px] md:h-screen' />
            </div>
            <div className='flex min-h-screen w-full self-stretch items-center justify-center px-0 py-6 sm:px-4 sm:py-8 md:col-span-1 md:px-6'>
                <LoginForm />
            </div>
        </div>)
}
export default LoginPage
