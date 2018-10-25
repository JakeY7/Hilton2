


const initRoom={adults:1,children:0}
const initState={
    enableRoom:1,
    adultsAgeRange:{title:'Adults',range:'18+'},
    childrenAgeRange:{title:'Children',range:'0-17'},
    adultsRange:{min:1,max:2},
    childrenRange:{min:0,max:2},
    rooms: {1:{id:1,...initRoom},2:{id:2,...initRoom},3:{id:3,...initRoom},4:{id:4,...initRoom},}
}

export default function rootReducer(state=initState,action){

    switch (action.type) {

        case'SUBMIT':
            console.log('SUBMIT',initState)
            //console.log()
            return {...initState};
        case'ADULTS':
            console.log('ADULTS',action.id)

            return {...state,rooms:{...state.rooms,[action.id]:{...state.rooms[action.id],adults:action.value}}}
        case'CHILDREN':
            console.log('CHILDREN',action.id)

            return {...state,rooms:{...state.rooms,[action.id]:{...state.rooms[action.id],children:action.value}}}

        case 'CHECK':
            return {...state,enableRoom:action.id}
        case 'UNCHECK':
            return {...state,enableRoom:action.id-1}
        default:
            return state

    }
     // return state;


}