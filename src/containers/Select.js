import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectAction} from '../actions/index'
import App from "../components/App";
//
// export const selectAction=(type,id,value)=>({
//     type:type,
//     id,
//     value
// })

  class Select extends Component {
      constructor(props) {
          super(props);
          this.changeSelect=this.props.changeSelect.bind(this)
      }


      handleChange(e,id,type){
        console.log('select',e.target.value,id)

        this.changeSelect(type,id,e.target.value)

    }
  render() {
      console.log('select')

      let opt=[]
    const{disable ,options,ageRange,type,id,defaultOption}=this.props
    for (var i=options.min;i<=options.max;i++){
        opt.push(<option  key={i} value={i}>{i}</option>)
    }


    return (


            <div style={{width:'100px',float:'left'}}>
                <p>{ageRange.title}</p>
                <p>{ageRange.range}</p>

            <select disabled={disable} value={defaultOption}


                onChange={(e)=>{this.handleChange(e,id,type)}}
           >
                {opt}
            </select>

            </div>

    )
  }
}

function mapDispatchToProps(dispatch){
    return{
        changeSelect:(type,id,value)=>dispatch(selectAction(type,id,value)),

    }
}
export default connect(null,mapDispatchToProps)(Select)



            


