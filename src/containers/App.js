import App from '../components/App'
import {connect} from 'react-redux'
import {submitAction,checkAction} from '../actions'

function mapDispatchToProps(dispatch){
    return{
        onSubmit:()=>dispatch(submitAction()),
        onCheck:(type,id)=>dispatch(checkAction(type,id)),

        
    }
}


function mapStateToProps(state){

    console.log('mapStateToProps',state)
    return{
        s:state,
        rooms:state.rooms

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)