import  { useContext, useEffect, useState } from 'react'
import Login from './components/Login'
import EmployeeDashboard from './components/EmployeeDashboard'
import AdminPanel from './components/AdminPanel'
import { dataContext } from './Data/DataProvider'

const App  =  ()  => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(dataContext)

  useEffect(() => {
    const loggedInUser =  localStorage.getItem('loggedIn')

    if (loggedInUser) {
      const temp = JSON.parse(loggedInUser)
      setUser(temp.role)
      setLoggedInUserData(temp.role === 'admin' ? {name: 'Raj Poswal', email: ''} : temp.data)
    }
  }, [user])


  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password == '123') {
      setUser('admin')
      localStorage.setItem('loggedIn', JSON.stringify({ role: 'admin' }))
      setLoggedInUserData({name: 'Raj Poswal', email: 'admin@me.com'})
    } else if (authData && JSON.parse(authData).some((e) => e.email === email)) {
      const employee = JSON.parse(authData).find((e) => e.email === email )
      if(employee.password === password) {
        setUser('employee') 
        setLoggedInUserData(employee)
        localStorage.setItem('loggedIn', JSON.stringify({ role: 'employee' , data:employee })
)}else {
        alert('Incorrect Password')
      }
    } else {
      alert('invalid credentials')
    }
  }
  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminPanel set_user = {setUser} loggedInUserData = {loggedInUserData}/>}
      {user === 'employee' && <EmployeeDashboard  set_user = {setUser} loggedInUserData = {loggedInUserData} />}
    </div>
  )
}

export default App
