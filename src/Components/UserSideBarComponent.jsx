import React from 'react'
//Icon
import logo from '/techwave-logo-2.jpg'
import settingicon from '/settings.png'
import dashboardicon from '/dashboard.png'
import notification from '/notification.png'
import admin from '/admin.png'
//React Router Dom
import { Link } from 'react-router-dom'

function UserSideBarComponent() {
    const sidebar = [
        [
            {
                name: "Dashboard",
                icon: dashboardicon,
                href: "/home/dashboard"
            },
            {
                name: "Setting",
                icon: settingicon,
                href: "/home/setting"
            },
            {
                name: "Notification",
                icon: notification,
                href: "/home/setting"
            }
        ]
    ]
  return (
    <aside className="py-6 px-10 place-items-center w-64 border-r border-gray-200">
        {/* Logo */}
        <Link to="/home">
            <img src={logo} className="h-36 w-auto rounded-3xl" />
        </Link>
            {/* {sidebar.map((group, index) => (
                <ul key={index} className="flex flex-col gap-y-6 pt-10">
                    {group.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-blue-600 group"
                            >
                                <span className="absolute w-1.5 h-8 bg-blue-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                                <img src={item.icon} className="w-6 h-6 fill-current" alt="" />
                                <span className='font-kanit font-medium text-gray-500'>{item.name}</span>
                            </a>
                        </li>
                    ))
                </ul>
            ))} */}
            <ul className="flex flex-col gap-y-6 pt-10">
                <li>
                    <a 
                        href="/home/dashboard"
                        className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-blue-600 group"
                    >
                        <span className="absolute w-1.5 h-8 bg-blue-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                        <img src={admin} className="w-6 h-6 fill-current" alt="" />
                        <span className='font-kanit font-medium text-gray-500'>Admin Menu</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="/home/dashboard"
                        className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-blue-600 group"
                    >
                        <span className="absolute w-1.5 h-8 bg-blue-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                        <img src={dashboardicon} className="w-6 h-6 fill-current" alt="" />
                        <span className='font-kanit font-medium text-gray-500'>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="/home/setting"
                        className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-blue-600 group"
                    >
                        <span className="absolute w-1.5 h-8 bg-blue-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                        <img src={notification} className="w-6 h-6 fill-current" alt="" />
                        <span className='font-kanit font-medium text-gray-500'>Notification</span>
                    </a>
                </li>
                <li>
                    <a 
                        href="/home/setting"
                        className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-blue-600 group"
                    >
                        <span className="absolute w-1.5 h-8 bg-blue-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                        <img src={settingicon} className="w-6 h-6 fill-current" alt="" />
                        <span className='font-kanit font-medium text-gray-500'>Setting</span>
                    </a>
                </li>
            </ul>
    </aside>
  )
}

export default UserSideBarComponent