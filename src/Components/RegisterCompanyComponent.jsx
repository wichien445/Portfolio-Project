import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
//MUI
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
}

const names = [
    'FullStack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer',
    'DevOps Engineer',
    'UX/UI Designer',
    'Others'
]

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    }
}

function RegisterCompanyComponent() {
  const theme = useTheme()
  const [personName, setPersonName] = useState([])

  const handleChange = (event) => {
    const {
        target: { value },
    } = event
    setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    )
  }
  const navigate = useNavigate()
    const [state, setState] = useState({
        country:'',
        phone:'',
        email:'',
        company:'',
        companysize:'',
        interest:'',
        password:'',
        confirmpassword:''
    })
    const { country, phone, email, company, companysize, interest, password, confirmpassword} = state
    const inputValue = name => event => {
      setState({...state,[name]:event.target.value})
      console.log(state)
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
      <div className='bg-white rounded-3xl p-5 w-fit flex justify-center'>
        <div className="mx-5 sm:w-full sm:max-w-sm">          
          <form onSubmit={submitForm}>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              {/* <div>
                <label for="first_name" className="block mb-2 text-sm font-kanit font-medium text-gray-900">First name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required/>
              </div>
              <div>
                <label for="last_name" className="block mb-2 text-sm font-kanit font-medium text-gray-900">Last name</label>
                <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required/>
              </div> */}
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                <input 
                  type="text"
                  id="company"
                  value={company}
                  onChange={inputValue('company')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Flowbite" required/>
              </div>  
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone number</label>
                <input 
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={inputValue('phone')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="012-345-6789" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" required/>
              </div>
              <div>
                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Company Size</label>
                <input 
                  type="text" 
                  id="companysize"
                  value={companysize}
                  onChange={inputValue('companysize')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company Size" required/>
              </div>
              <div>
                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                <input 
                  type="text" 
                  id="country"
                  value={country}
                  onChange={inputValue('country')} 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Thailand" required/>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Position interest</label>
              <FormControl sx={{ width: '100%' }}>
                {/* <InputLabel id="demo-multiple-name-label">Interest</InputLabel> */}
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  sx={{borderRadius: '6px'}}
                  style={{ height: '40px' }}
                  multiple
                  value={personName}
                  onChange={handleChange}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                <input 
                  type="email"
                  id="email"
                  value={email}
                  onChange={inputValue('email')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com" required/>
            </div> 
            <div className="mb-6">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input 
                  type="password"
                  id="password"
                  value={password}
                  onChange={inputValue('password')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required/>
            </div> 
            <div className="mb-6">
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                <input 
                  type="password"
                  id="confirm_password"
                  value={confirmpassword}
                  onChange={inputValue('confirmpassword')}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="•••••••••" required/>
            </div> 
            <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
                </div>
                <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
            </div>
            <button type="submit" className="font-kanit text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">สมัครสมาชิก</button>
          </form>
          <p className="font-kanit mt-3  text-center text-sm text-gray-500">
            ถ้ามีบัญชีแล้ว?
            <Link
              to='/'
              className="font-kanit font-bold leading-6 text-blue-600 hover:text-blue-700"
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

export default RegisterCompanyComponent