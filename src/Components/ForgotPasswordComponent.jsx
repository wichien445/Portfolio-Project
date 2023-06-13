import React from 'react'
import { useState } from 'react'

function ForgotPasswordComponent() {
    const [state, setState] = useState({
        otp1:'',
        otp2:'',
        otp3:'',
        otp4:''
    })

    const {otp1, otp2, otp3, otp4} = state
    const otp = otp1 + otp2 + otp3 + otp4
    console.log(otp)

    const inputValue = name => event => {
        console.log({...state,[name]:event.target.value})
        setState({...state,[name]:event.target.value})
    }
  return (
    <div className="bg-home bg-cover min-h-screen flex flex-col md:flex-row justify-center items-center">
        <div className='bg-white rounded-3xl p-5 w-1/2 flex justify-center'>
            <div class="relative flex flex-col justify-center overflow-hidden py-12">
                <div class="relative px-6 pt-10 pb-9  mx-auto w-full max-w-lg rounded-2xl">
                    <div class="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div class="flex flex-col items-center justify-center text-center space-y-2">
                            <div class="font-semibold text-3xl">
                                <p className='font-kanit'>กรอกรหัสยืนยันตัวตน OTP</p>
                            </div>
                            <div class="flex flex-row text-sm font-medium text-gray-400">
                                <p className='font-kanit'>รหัสยืนยันตัวตนจะถูกส่งไปทาง SMS ที่ (+66) 63 721 3589</p>
                            </div>
                        </div>

                        <div>
                            <form action="" method="post">
                            <div class="flex flex-col space-y-16">
                                <div class="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    <div class="w-16 h-16">
                                        <input 
                                            class="w-16 h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" 
                                            type="text" 
                                            name="" 
                                            id=""
                                            maxLength={1}
                                            value={otp1}
                                            onChange={inputValue("otp1")}
                                        />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input 
                                            class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" 
                                            type="text" 
                                            name="" 
                                            id=""
                                            maxLength={1}
                                            value={otp2}
                                            onChange={inputValue("otp2")}
                                        />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input 
                                            class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" 
                                            type="text" 
                                            name="" 
                                            id=""
                                            maxLength={1}
                                            value={otp3}
                                            onChange={inputValue("otp3")}
                                        />
                                    </div>
                                    <div class="w-16 h-16 ">
                                        <input 
                                            class="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" 
                                            type="text" 
                                            name="" 
                                            id=""
                                            maxLength={1}
                                            value={otp4}
                                            onChange={inputValue("otp4")}
                                        />
                                    </div>
                                </div>

                                <div class="flex flex-col space-y-5">
                                    <div>
                                        <button class="font-kanit flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                            ยืนยัน
                                        </button>
                                    </div>

                                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p className='font-kanit'>ไม่ได้รับรหัส?</p> 
                                        <a class="font-kanit flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">ส่งอีกครั้ง</a>
                                    </div>

                                    <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                        <p className='font-kanit'>รหัสอ้างอิง : </p> 
                                        <a class="font-kanit flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">D4FER</a>
                                    </div>
                                </div>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgotPasswordComponent