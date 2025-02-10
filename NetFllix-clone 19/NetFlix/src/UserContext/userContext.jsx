import { createContext, useState } from "react";
export let UserContext=createContext();

let UserContextProvider = ({children}) =>{
    let [user,setUser]=useState(null)
    return (
        <UserContext.Provider value={{user,setUser}} >
{children}
        </UserContext.Provider>
    )
}
export default UserContextProvider