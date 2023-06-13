import React from 'react'
import UserSideBarComponent from './UserSideBarComponent'
import UserNavBarComponent from './UserNavBarComponent'

function UserHomeComponent() {
  const status = [
    { name: "Published", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png" },
    { name: "Draft", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png" },
    { name: "Hidden", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png" },
    { name: "Rejected", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png" },
    { name: "Under Review", icon: "https://sv1.picz.in.th/images/2023/05/20/F1xzCy.png" },
  ]
  return (
    <div className='w-full min-h-screen font-kanit text-gray-900 bg-gray-50 flex'>
        <UserSideBarComponent />

        <main className='flex-1 pb-8'>
          <UserNavBarComponent/>
          <div className="flex items-center justify-between py-7 px-10">
            <div>
              <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Home</h1>
              <p className="text-sm font-medium text-gray-500">
                Let's grow to your business! Create your product and upload here
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
        </main>
    </div>
  )
}

export default UserHomeComponent