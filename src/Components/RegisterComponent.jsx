import React from 'react'
import logo from '/techwave-logo-2.jpg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
//MUI
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function RegisterComponent() {
    const navigate = useNavigate()
    const [state, setState] = useState({
        fullname:'',
        employee:'',
        phone:'',
        email:'',
        password:'',
        confirmpassword:'',
        company:''
    })
    const {fullname, employee, phone, email, password, confirmpassword, company} = state
    const inputValue = name => event => {
        setState({...state,[name]:event.target.value})
    }
    const submitForm=(e)=>{
        e.preventDefault();
        if(password !== confirmpassword){
            toast.error('รหัสผ่านไม่ตรงกัน โปรดลองอีกครั้ง!', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000
            })
        }else{
            axios.post(`${import.meta.env.VITE_APP_API}/register`,{email, password})
            .then(response=>{
                toast.success('ลงทะเบียนสำเร็จ', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000
                })
                //Time Out
                function TimeOut() {
                    navigate('/')
                }
                setTimeout(TimeOut, 3000)
                console.log(response)
            })
            .catch(err=>{
                toast.error('ลงทะเบียนไม่สำเร็จ โปรดลองอีกครั้ง!', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000
                })
            })
        }
    }
    return (
        <div className="bg-home bg-cover min-h-screen flex flex-col md:flex-row justify-center items-center">
            <div className='bg-white rounded-3xl p-10 w-1/2 flex justify-center'>
                <div className="mx-5 sm:w-full sm:max-w-sm">
                    <form className="space-y-6 mt-5" onSubmit={submitForm}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-kanit leading-6 text-gray-900"
                            >
                                First Name and Last Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    required
                                    value={fullname}
                                    onChange={inputValue('fullname')}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-kanit leading-6 text-gray-900"
                            >
                                Employee ID
                            </label>
                            <div className="mt-2">
                                <input
                                    id="employee"
                                    name="employee"
                                    type="text"
                                    required
                                    value={employee}
                                    onChange={inputValue('employee')}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-kanit leading-6 text-gray-900"
                            >
                                Phone
                            </label>
                            <div className="mt-2">
                                <input
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    required
                                    value={phone}
                                    onChange={inputValue('phone')}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-kanit leading-6 text-gray-900"
                            >
                                Company Name
                            </label>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>
                                    
                                    <Select
                                        className='mt-2'
                                        sx={{borderRadius: '6px'}}
                                        style={{ height: '38px' }}
                                        id="demo-simple-select"
                                        value={company}
                                        onChange={inputValue('company')}

                                    >
                                        <MenuItem value={'Tanas'}>Tanas</MenuItem>
                                        <MenuItem value={'Black Phoenix'}>Black Phoenix</MenuItem>
                                        <MenuItem value={'TechWave'}>TechWave</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </form>
                </div>

                <div className='mx-5 sm:w-full sm:max-w-sm'>
                    <form className="space-y-6 mt-5" onSubmit={submitForm}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-kanit leading-6 text-gray-900"
                            >
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={inputValue('email')}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-kanit leading-6 text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={inputValue('password')}
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm font-kanit leading-6 text-gray-900"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={confirmpassword}
                                    onChange={inputValue('confirmpassword')} 
                                    className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={password.length < 8 || confirmpassword.length < 8}
                                className="font-kanit font-bold flex w-full justify-center rounded-md bg-blue-600 mt-14 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-no-drop"
                            >
                                สมัครสมาชิก
                            </button>
                        </div>
                    </form>
                    <p className="font-kanit mt-10 text-center text-sm text-gray-500">
                        ถ้ามีบัญชีแล้ว?
                        <Link
                            to='/'
                            className="font-kanit font-bold leading-6 text-blue-600 hover:text-blue-500"
                        >
                            เข้าสู่ระบบได้ที่นี้เลย
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer/>
        </div>
    )
}

export default RegisterComponent