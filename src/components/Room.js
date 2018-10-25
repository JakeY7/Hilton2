import React, { Component } from 'react'
import Select from '../containers/Select'


const floatDiv={

    float:'left',
    width:'200px',
    height:'200px',
    background:'red',
    marginRight:'5px',
}
export default class Room extends Component {
    constructor(props){

            super(props)
        console.log('this.props.disable',this.props.disable)
        this.state={checked:!this.props.disable}
        this.onCheck=this.props.onCheck.bind(this)
    }
 handleChange(id,disable){
       // this.setState(()=>({checked:!this.state.checked}))
     console.log('Room',id,disable)

     this.setState(()=>({checked:!disable}),()=>{
         const {checked}=this.state
         const type=checked?'UNCHECK':'CHECK'
         this.onCheck(type,id)

     })



 }



  render() {
    // let checkbox;
    // let checked='';
    // const {index,onCheck,rooms}=this.props
    // if(!index==0){
    //   if(rooms[index])
    //     checked='checked'
    //   checkbox=<input onChange={()=>onCheck(index)} type='checkbox' checked={checked} ></input>
    // }
      const {id,adultsAgeRange,adultsRange,
          childrenAgeRange,childrenRange,disable,
          adultsDefault,childrenDefault}
          =this.props

      console.log('disable',disable)
      const {checked}=this.state
    return (

        <div  style={floatDiv} className={!disable?'active':'passive'}>

            <p>Room {id} {id!=1&&(<input type='checkbox' onChange={()=>{this.handleChange(id,disable)}}  checked={!disable} />)}</p>

            <Select id={id} type="ADULTS" ageRange={adultsAgeRange} disable={disable} defaultOption={adultsDefault}options={adultsRange} />
            <Select id={id} type="CHILDREN" ageRange={childrenAgeRange} disable={disable}
                    defaultOption={childrenDefault}

                    options={childrenRange} />
        </div>
    )
  }
}
