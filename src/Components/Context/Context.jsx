import React, { createContext ,useState} from 'react'

const signState = createContext()

function Context({children}) {
    const [isnewuser,setNewUser]=useState(true)
  return (
    <signState.Provider value={{isnewuser,setNewUser}}>{children}</signState.Provider>
  )
}

export {signState, Context}
