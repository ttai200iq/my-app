import { createContext, useReducer } from "react";
import Reducer, { INITSTATE } from "./EnvReducer";

export const EnvContext = createContext(INITSTATE)


export const EnvContextProvider =({children})=>{
    const [state,envDispatch] = useReducer(Reducer, INITSTATE);
    return(
        <EnvContext.Provider value={{
            status:state.status,
            button:state.button,
            bardata: state.bardata,
            type: state.type,
            envDispatch
        }}
        >
             {children}
        </EnvContext.Provider>
       
    )
} 