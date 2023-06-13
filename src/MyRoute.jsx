import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
//Components
import App from './App'
import ForgotPasswordComponent from './Components/ForgotPasswordComponent'
import ForgotPasswordPhoneComponents from './Components/ForgotPasswordPhoneComponents'
//User Component
import UserSettingComponent from './Components/UserSettingComponent'
import UserHomeComponent from './Components/UserHomeComponent'
import UserDashboardComponent from './Components/UserDashboardComponent'
//Register Component
import RegisterComponent from './Components/RegisterComponent'
import RegisterCompanyComponent from './Components/RegisterCompanyComponent'
import RegisterFreelanceComponent from './Components/RegisterFreelanceComponent'

function MyRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact Component={App}/>
            <Route path='/signup/employee' exact Component={RegisterComponent}/>
            <Route path='/signup/company' exact Component={RegisterCompanyComponent}/>
            <Route path='/signup/freelance' exact Component={RegisterFreelanceComponent}/>
            <Route path='/forgot' exact Component={ForgotPasswordPhoneComponents}/>
            <Route path='/forgot/otp' exact Component={ForgotPasswordComponent}/>
            <Route path='/home' exact Component={UserHomeComponent}/>
            <Route path='/home/setting' exact Component={UserSettingComponent}/>
            <Route path='/home/dashboard' exact Component={UserDashboardComponent}/>
        </Routes>
    </BrowserRouter>
  )
}

export default MyRoute