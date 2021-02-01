import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter,Link } from 'react-router-dom'
import {onLogin} from '../Redux/Action'

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            username_error:'',
            password_error:'',
        }
    }

    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    

    validate=()=>{
        let username_error='';
        let password_error='';
        if(!this.state.username){
            username_error='Please Enter Valid Username';
        }
        if(!this.state.password){
            password_error='Please Enter Valid Password';
        }
        if(username_error || password_error ){
            this.setState({username_error,password_error})
            return false;
        }
        return true;
    }
    // componentWillMount(){
    //     this.props.onLogin()
    // }
    onSubmit=()=>{
        // console.log(this.state)
        const {username,password} =this.state;
        const newData={username,password}
        const isValid=this.validate();
        if(isValid){
            this.props.onLogin(newData,this.props.history)
        }
    }


    render() {
        const {username,password,username_error,password_error} =this.state;
        return (
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                <div className='card col-md-5 py-4'>
                <h1 className='text-center'>Login</h1>
                    <div className='form-group'>
                        <label>Username: </label>
                        <input type='text' className='form-control' name='username' value={username} onChange={this.onHandleChange}  />
                        <p className='text-danger'>{username_error}</p>
                    </div>
                    <div className='form-group'>
                        <label>Password: </label>
                        <input type='password' className='form-control' name='password' value={password} onChange={this.onHandleChange}  />
                        <p className='text-danger'>{password_error}</p>
                    </div>
                    <div className=''>
                        <button className='btn btn-primary form-control' onClick={this.onSubmit}>Login</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    user:state.user
})

export default connect(mapStateToProps,{onLogin})(withRouter(Login))