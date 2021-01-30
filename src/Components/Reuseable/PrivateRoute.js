import { connect } from 'react-redux';
import {Redirect, Route,} from 'react-router-dom';
import propTypes from 'prop-types';


const PrivateRoute=({component:Component,user,...rest})=>(
    <Route
        {...rest}
        render={props=>
            user.isAuthenticate===true?(
                <Component {...props} ></Component>
            ):
            (
                <Redirect to='/login' ></Redirect>
            )
        }

    />
)

PrivateRoute.propTypes={
    user:propTypes.object.isRequired
}


const mapStateToProps=state=>({
    user:state.user,
})

export default connect(mapStateToProps)(PrivateRoute)