import React from 'react'
import { Link } from 'react-router-dom'
//Components
import UserNavBarComponent from './UserNavBarComponent'
import UserSideBarComponent from './UserSideBarComponent'
//State
import { useState, useEffect } from 'react'
//Service
import { getUser } from '../../Services/auth'
//MUI
//MUI
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

function UserSettingComponent() {
    const status = [
        { name: "บัญชีผู้ใช้งาน", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png"},
        { name: "รหัสผ่าน", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png" },
    ]
    const [userData, setUserdata] = useState('')
    useEffect(() => {
        const data = localStorage.getItem('email')
        if (data) {
            setUserdata(data)
        }
    }, [])
    const [state, setState] = useState({
        fullname:'',
        phone:'',
        thaiId:'',
        country:'',
        company:'',
        interest:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const {fullname, phone, thaiId, country, company, interest, email, password, confirmpassword} = state

    const inputValue = name => event => {
        setState({...state,[name]:event.target.value})
    }
  return (
    <div className='w-full min-h-screen font-kanit text-gray-900 bg-gray-50 flex'>
        <UserSideBarComponent />
        <main className='flex-1 pb-8'>
            <UserNavBarComponent/>
            <div className="flex items-center justify-left py-7 px-10">
                <img
                    className="inline-block h-1/6 w-1/6 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
                <div>
                    <h1 className="mx-10 text-2xl font-semibold leading-relaxed text-gray-800">Setting</h1>
                    <p className="text-sm font-medium text-gray-500">
                        { getUser() && (
                            <p>{userData}</p>
                        )}
                    </p>
                </div>
            </div>

            <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
                {status.map((item, index) => (
                    <li key={index}>
                        <button className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-blue-600 relative group">
                        <img src={item.icon} className="w-6 h-6 fill-current" alt="" />
                        <span className="font-kanit font-medium">{item.name}</span>
                        <span className="absolute w-full h-0.5 left-3 bg-blue-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out" />
                        </button>
                    </li>
                ))}
            </ul>
            
            <div className='bg-gray-50 bg-cover min-h-screen flex flex-col md:flex-row justify-center items-center'>
        <div className='bg-white rounded-3xl p-10 w-3/4 flex justify-center'>
            <div className="mx-5 sm:w-full sm:max-w-sm">
                <form className="space-y-6 mt-5">
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
                            Thai ID Card or Passport ID
                        </label>
                        <div className="mt-2">
                            <input
                                id="thaiId"
                                name="thaiId"
                                type="text"
                                required
                                value={thaiId}
                                onChange={inputValue('thaiId')}
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
                        <div className="mt-2">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                required
                                value={company}
                                onChange={inputValue('company')}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-kanit leading-6 text-gray-900"
                        >
                            Country
                        </label>
                        <div className="mt-2">
                            <input
                                id="country"
                                name="country"
                                type="text"
                                required
                                value={country}
                                onChange={inputValue('country')}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </form>
            </div>

            <div className="mx-5 sm:w-full sm:max-w-sm">
                <form className="space-y-6 mt-5">
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
                                required
                                value={email}
                                onChange={inputValue('email')}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-kanit leading-6 text-gray-900"
                        >
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                value={password}
                                onChange={inputValue('password')}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-kanit leading-6 text-gray-900"
                        >
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="confirmpassword"
                                name="confirmpassword"
                                type="confirmpassword"
                                required
                                value={confirmpassword}
                                onChange={inputValue('confirmpassword')}
                                className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-kanit leading-6 text-gray-900"
                        >
                            Position Interest
                        </label>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>    
                            <Select
                                className='mt-2'
                                sx={{borderRadius: '6px'}}
                                style={{ height: '38px' }}
                                id="demo-simple-select"
                                value={interest}
                                onChange={inputValue('interest')}
                            >
                                <MenuItem value={'FullStack Developer'}>FullStack Developer</MenuItem>
                                <MenuItem value={'Frontend Developer'}>Frontend Developer</MenuItem>
                                <MenuItem value={'Backend Developer'}>Backend Developer</MenuItem>
                                <MenuItem value={'Mobile Developer'}>Mobile Developer</MenuItem>
                                <MenuItem value={'DevOps Engineer'}>DevOps Engineer</MenuItem>
                                <MenuItem value={'UX/UI Designer'}>UX/UI Designer</MenuItem>
                                <MenuItem value={'Others'}>Others</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
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
    </div>
        </main>
    </div>
  )
}

export default UserSettingComponent