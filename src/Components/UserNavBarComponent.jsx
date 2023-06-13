import React from 'react'
import {
    Bars3Icon,
    MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
//Service
import { getUser } from '../../Services/auth'


function UserNavBarComponent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userData, setUserdata] = useState('')
  useEffect(() => {
    const data = localStorage.getItem('user_name')
    if (data) {
      setUserdata(data)
    }
  }, [])

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null
    })
    navigate('/')
  }
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        {/* Banner */}
        <p className="flex h-10 items-center justify-center bg-blue-500 px-4 text-base font-medium text-white sm:px-6 lg:px-8">
          Admin Systems
        </p>

        {/* Navbar */}
        <nav aria-label="Top" className="max-w-7xlpx-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              <div className='ml-4 flex lg:ml-0 w-1/2'>
                <form className='w-full'>   
                    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="search" class="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-white" placeholder="Search" required />
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
              </div>

              <div className="ml-auto flex items-center">
                <div div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  { getUser() && (
                    <p>{userData}</p>
                  )}
                  { getUser() && (
                    <img
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    />
                  )}
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  { getUser() && (
                      <button onClick={logout}>Log Out</button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default UserNavBarComponent