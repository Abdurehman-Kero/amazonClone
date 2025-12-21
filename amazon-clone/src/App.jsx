import { useContext, useEffect, useState } from 'react' 
import './App.css' 
import Routing from './Router'
import { DataContext } from './Components/Context/DataProvider'
import { auth } from './utils/firebase'
import { Type } from './utils/action.type' 

function App() { 
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    // check the auth state change from sign in to sign out vice versa and if the user signed in userInfo will be populated with the user data if not userInfo becomes null
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return (
    <>
        <Routing/>
    </>
  )
}

export default App
