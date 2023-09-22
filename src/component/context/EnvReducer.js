export const INITSTATE ={
        status:false,
        button:{color:"red", type:"Inching",bgon:"#ff0000"},
}



const EnvReducer = (state,action)=>{
        switch(action.type){

            case "SET_BTN":
                return{
                    ...state,
                    button: action.payload
                }
            case "SET_STATUS":
                return{
                    ...state,
                    status: action.payload
                }
         
            default: throw new Error("type no valid")
        }
}


export default EnvReducer;