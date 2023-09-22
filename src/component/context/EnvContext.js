import { createContext, useReducer } from "react";
import Reducer, { INITSTATE } from "./EnvReducer";
import Logger from "../Logger";


export const EnvContext = createContext(INITSTATE)


export const EnvContextProvider =({children})=>{
    const [state,envDispatch] = useReducer(Reducer, INITSTATE);
    return(
        <EnvContext.Provider value={{
            status:state.status,
            button:state.button,
            envDispatch
        }}
        >
             {children}
        </EnvContext.Provider>
       
    )
} 