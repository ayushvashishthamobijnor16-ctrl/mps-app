import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import { useAuth } from '../context/AuthContext.jsx'

export default function Layout() {
  const { user, logout } = useAuth()

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between border-b bg-white px-6 py-3">
          <h1 className="text-base font-medium text-slate-700">School Management System</h1>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span>{user?.name}</span>
            <button
              onClick={logout}
              className="rounded-md border px-3 py-1 hover:bg-slate-100"
            >
              Log out
            </button>
          </div>
        </header>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
