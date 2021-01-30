import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {onSavePassword,onLogout} from '../Redux/Action'

class User extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            visible:true,
        }
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    ChangePassword=()=>{
        this.setState({visible:false, username:this.props.user.user.username, password:''})
    }
    SavePassword=()=>{
        const {username,password}=this.state
        const newData={username,password}
        this.props.onSavePassword(newData,this.props.history)
        console.log('Password Changed Succesfully')
    }
    onLogout=()=>{
        this.setState({username:'',password:''})
        this.props.onLogout(this.props.history)
    }
    render() {
        return (
            <div className=' px-5 mt-5'>
                <div className=''>
                    <div className='form-group'>
                    <label>Username: {this.props.user.user.username}</label>
                    </div>
                    {this.state.visible ?(
                        <div className='form-group'>
                        <label>Password: </label>
                        <input type='password' className='mx-2 '  value={this.props.user.user.password} onChange={this.onHandleChange} readOnly />
                        </div>
                    ):(
                        <div>
                        <label>New Password:  </label> 
                       <input type='password' name='password' className='mx-2' value={this.state.password} placeholder='Enter New Password' onChange={this.onHandleChange} /> 
                       </div>
                    )}
                </div>
                <div className=''>
                    {this.state.visible?(
                        <div>
                        <button className='btn btn-outline-secondary' onClick={()=>this.ChangePassword()}>Change Password</button>
                        <button className='btn btn-outline-danger ml-5' onClick={this.onLogout}>Logout</button>
                        </div>
                    )
                    :(
                        <div>
                        <button className='btn btn-outline-secondary' onClick={()=>this.SavePassword()}>Save Password</button>
                        <button className='btn btn-outline-danger ml-5' onClick={this.onLogout}>Logout</button>
                        </div>
                    )}
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    task:state.task,
    user:state.user
})

export default connect(mapStateToProps,{onSavePassword,onLogout})(withRouter(User))