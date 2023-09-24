import { useEffect, useState } from 'react'
import './App.css'
import UserLanding from './UserLanding';
import { checkIfLoggedIn, deleteLoginCookie } from './javascript/api';

function App() {
  useEffect(() => {
    async function fetchData() {

    }
  })
  return (
    <>
      <UserLanding />
      <LoginLogoutButton />

    </>
  )
}

function LoginLogoutButton() {
  if (checkIfLoggedIn()) {
    return <button onClick={deleteLoginCookie()}>Logout</button>;
  }
  else {
    return <label>You are logged out!</label>
  }
}

export default App
