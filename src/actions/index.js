export const checkAction=(type,id)=>({
    type:type,////check and uncheck
    id
})

export const submitAction=()=>({
    type:'SUBMIT'
    
})

export const selectAction=(type,id,value)=>({
    type:type,////children selection and adults selection
    id,
    value
})
