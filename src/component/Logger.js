function Logger(Reducer){
    return (prevState,action)=>{
        console.group(action.type)
        const newSate = Reducer(prevState,action)
        console.log("state",newSate)
        console.groupEnd()
        return newSate
    }

}


export default Logger;