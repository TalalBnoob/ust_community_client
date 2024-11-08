import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

function PrivateRoutes() {
  const { auth } = useContext(AuthContext)
  return auth.token ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoutes
