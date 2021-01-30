import { connect } from 'react-redux';
import {Redirect, Route,} from 'react-router-dom';
import propTypes from 'prop-types';


const PublicRoute=({component:Component,user,...rest})=>(
    <Route
        {...rest}
        render={props=>
            user.isAuthenticate===false?(
                <Component {...props} ></Component>
            ):
            (
                <Redirect to='/' ></Redirect>
            )
        }

    />
)

PublicRoute.propTypes={
    user:propTypes.object.isRequired
}


const mapStateToProps=state=>({
    user:state.user,
})

export default connect(mapStateToProps)(PublicRoute)