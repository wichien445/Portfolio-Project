import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
//MUI
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

function RegisterFreelanceComponent() {
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
    console.log(state)
  return (
    <div className='bg-home bg-cover min-h-screen flex flex-col md:flex-row justify-center items-center'>
        <div className='bg-white rounded-3xl p-5 w-1/2 flex justify-center'>
            <div className="mx-5 my-3 w-full">
                <form>
                    <div className="grid gap-6 mb-6 grid-cols-3">
                        <div>
                            <label htmlFor="fullname" className="block mb-2 text-sm font-kanit font-medium text-gray-900">Full Name</label>
                            <input 
                                type="text" 
                                id="fullname"
                                value={fullname}
                                onChange={inputValue('fullname')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Stone" required/>
                        </div>
                        <div>
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                            <input 
                                type="text"
                                id="company"
                                value={company}
                                onChange={inputValue('company')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                placeholder="TechWave"
                            />
                        </div>  
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                            <input 
                                type="tel"
                                id="phone"
                                value={phone}
                                onChange={inputValue('phone')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="012-345-6789" 
                                pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="thaiId" className="block mb-2 text-sm font-medium text-gray-900">Thai identification card</label>
                            <input 
                                type="text" 
                                id="thaiId"
                                value={thaiId}
                                onChange={inputValue('thaiId')}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Company Size" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                            <input 
                                type="text" 
                                id="country"
                                value={country}
                                onChange={inputValue('country')} 
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                placeholder="Thailand" 
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Position interest</label>
                            <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth>    
                                    <Select
                                        sx={{borderRadius: '6px'}}
                                        style={{ height: '42px' }}
                                        value={interest}
                                        onChange={inputValue('interest')}
                                        displayEmpty
                                    >
                                        <MenuItem value=''>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value='FullStack Developer'>FullStack Developer</MenuItem>
                                        <MenuItem value='Frontend Developer'>Frontend Developer</MenuItem>
                                        <MenuItem value='Backend Developer'>Backend Developer</MenuItem>
                                        <MenuItem value='Mobile Developer'>Mobile Developer</MenuItem>
                                        <MenuItem value='DevOps Engineer'>DevOps Engineer</MenuItem>
                                        <MenuItem value='UX/UI Designer'>UX/UI Designer</MenuItem>
                                        <MenuItem value='Others'>Others</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input 
                            type="email"
                            id="email"
                            value={email}
                            onChange={inputValue('email')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="tech.wave@techwave.com"
                            required
                        />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input 
                            type="password"
                            id="password"
                            value={password}
                            onChange={inputValue('password')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                            placeholder="•••••••••"
                            required
                        />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                        <input 
                            type="password"
                            id="confirm_password"
                            value={confirmpassword}
                            onChange={inputValue('confirmpassword')}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="•••••••••"
                            required
                        />
                    </div> 
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button type="submit" className="font-kanit text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">สมัครสมาชิก</button>
                </form>
                {/* <form className="space-y-6 mt-5">
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
                </form> */}
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
  )
}

export default RegisterFreelanceComponent