import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

const DEMO_USER = {
  email: 'admin@school.com',
  password: 'admin123',
  name: 'Admin',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('mps_user')
    if (stored) setUser(JSON.parse(stored))
    setReady(true)
  }, [])

  function login(email, password) {
    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const loggedInUser = { email, name: DEMO_USER.name }
      localStorage.setItem('mps_user', JSON.stringify(loggedInUser))
      setUser(loggedInUser)
      return true
    }
    return false
  }

  function logout() {
    localStorage.removeItem('mps_user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, ready, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
