import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import logo from '/techwave-logo-2.jpg'
//Toastif
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { authenticate } from '../Services/auth'
//MUI
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '20px'
}

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [state, setState] = useState({
    phone:"",
    password:""
  })
  const {phone, password} = state
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //set value state
  const inputValue = name => event =>{
    setState({...state,[name]:event.target.value})
  }

  const submitForm=(e)=>{
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_APP_API}/login`,{phone, password})
    .then(response=>{
      if(response.data.login === true){
        console.log(response)
        toast.success('เข้าสู่ระบบสำเร็จ', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000
        })
        dispatch({
          type: 'LOGIN',
          payload: {
            token: response.data.token,
            user_name: response.data.result[0].user_name
          }
        })
        authenticate(response)
        //Time Out
        function TimeOut() {
          navigate('/home')
        }
        setTimeout(TimeOut, 3000)
      }else {
        toast.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      })
      }
    })
    .catch(err=>{
      console.log(err)
      toast.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง โปรดลองอีกครั้ง!', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000
      })
    })
  }

  const forgotPassword = () => {
    navigate('/forgot')
  }

  return (
    <div className="bg-home bg-cover min-h-screen min-w-full flex flex-col md:flex-row justify-center items-center">
      <div className='bg-white rounded-3xl p-10 w-1/2 flex justify-center'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm py-10">
            <img
              className="mx-auto h-44 w-44 rounded-full"
              src={logo}
            />
            <h2 className="font-kanit font-bold mt-10 text-center text-2xl leading-9 tracking-tight text-gray-900">
              TechWave
            </h2>
            <h2 className="font-kanit font-bold text-center text-2xl leading-9 tracking-tight text-gray-900">
              International Co.,Ltd.
            </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className='font-kanit font-medium text-center text-3xl text-blue-600'>เข้าสู่ระบบ</h1>
          <form className="space-y-6">
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
                  placeholder='+66'
                  required
                  value={phone}
                  onChange={inputValue("phone")}
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
                  placeholder='Password'
                  required
                  value={password} 
                  onChange={inputValue("password")}
                  className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={submitForm}
                disabled={!phone || !password}
                className="font-kanit font-bold flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-gray-400 disabled:cursor-no-drop"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
          <button
            onClick={forgotPassword}
            className="font-kanit font-bold text-blue-600 hover:text-blue-500 mt-5 justify-self-end"
          >
            ลืมรหัสผ่าน?
          </button>
          <p className="font-kanit mt-10 text-center text-sm text-gray-500">
            ไม่มีบัญชีงั้นหรอ?
            {/* <Link
              to='/signup/employee'
              className="font-kanit font-bold leading-6 text-blue-600 hover:text-blue-500"
            >
              สมัครสมาชิกได้ที่นี้เลย
            </Link> */}
            <Button onClick={handleOpen}>สมัครสมาชิกได้ที่นี้เลย</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  คุณคือใคร
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  กรุณาเลือกการสมัครสมาชิกตามหมวดหมู่ข้างล่าง
                </Typography>
                <Card sx={{ mt:2, maxWidth: 345 }}>
                  <CardActionArea component={Link} to="/signup/company">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Company
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        คุณคือ Company ที่กำลังมองหา Freelance
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                
                <Card sx={{ mt: 2, maxWidth: 345 }}>
                  <CardActionArea component={Link} to="/signup/freelance">  
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Freelance
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        คุณคือ Freelance ที่กำลังมองหางาน
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card sx={{ mt: 2, maxWidth: 345 }}>
                  <CardActionArea component={Link} to="/signup/employee">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Employee
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        คุณคือ พนักงานบริษัท
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Modal>
          </p>          
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default App
