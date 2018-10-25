import React, { Component } from 'react';
import Room from '../components/Room'




//{
//     enableRoom:1,
//     addultAgeRange:'18+',
//     childAgeRange:'0-17',
//     adults:{min:1,max:2},
//     childrenRange:{min:0,max:2},
//     rooms: {1:{id:1,...initRoom},2:{id:2,...initRoom},3:{id:3,...initRoom},4:{id:4,...initRoom},}
// }
class App extends Component {


    render() {

        const {rooms,s,onSubmit,onCheck}=this.props
        console.log('rooms',rooms,s)
        const roomList=Object.keys(rooms).map(roomId=>{

            const disable=(roomId>s.enableRoom)////
            return <Room  disable={disable}  key={roomId} id={roomId}
                          adultsAgeRange={s.adultsAgeRange} adultsRange={s.adultsRange}
                          childrenAgeRange={s.childrenAgeRange} childrenRange={s.childrenRange}
                          adultsDefault={rooms[roomId].adults} childrenDefault={rooms[roomId].children}
                          onCheck={onCheck}

            />


        })
            return (<div>{roomList}
            <button style={{clear:'both'}} onClick={onSubmit}>submit</button>
            </div>)
    }

}

export default App;
