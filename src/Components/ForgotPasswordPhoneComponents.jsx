import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ForgotPasswordPhoneComponents() {
    const [state, setState] = useState({
        phone:''
    })
    const { phone } = state
    const inputValue = name => event => {
        console.log({...state,[name]:event.target.value})
        setState({...state,[name]:event.target.value})
    }
  return (
    <div className="bg-home bg-cover min-h-screen flex flex-col md:flex-row justify-center items-center">
        <div className='bg-white rounded-3xl p-5 w-1/2 flex justify-center'>
            <div className="relative flex flex-col justify-center overflow-hidden py-12">
                <div className="relative px-6 pt-10 pb-9  mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p className='font-kanit'>ลืมรหัสผ่าน</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p className='font-kanit'>รหัสยืนยันตัวตนจะถูกส่งไปทาง SMS ที่เบอร์ของคุณ</p>
                            </div>
                        </div>

                        <div>
                            <form method="post">
                                <div className="flex flex-col space-y-16">
                                    <div className="flex flex-row items-center justify-between mx-auto">
                                        <div>
                                            <input 
                                                className="h-16 flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700" 
                                                type="text"
                                                placeholder='+66 000-000-0000'
                                                maxLength={10}
                                                value={phone}
                                                onChange={inputValue("phone")}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-5">
                                        <div>
                                            <button className="font-kanit font-medium flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                                ต่อไป
                                            </button>
                                        </div>

                                        <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p className='font-kanit'>ถ้ามีบัญชีแล้ว?</p> 
                                            <Link className="font-kanit flex flex-row items-center text-blue-600" to='/'>เข้าสู่ระบบได้ที่นี้เลย</Link>
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

export default ForgotPasswordPhoneComponents