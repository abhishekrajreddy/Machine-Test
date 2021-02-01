import axios from 'axios'

export const onFetchingTask=()=>{
    return(dispatch)=>{
        dispatch(Fetching())
       return axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(res=>{
            dispatch(FetchingSuccess(res.data))
            return res.data
        }).catch(err=>{
            console.log(err)
        })
}
}
export const onAddingTask=(data,history)=>{
    return(dispatch)=>{
        dispatch(onAddingSuccess(data))
    }
}

export const onLogin=(newData,history)=>{
return(dispatch)=>{
    const data=localStorage.getItem("user")
    const dataUpdate=JSON.parse(localStorage.getItem("user"))
    if(data === null){
        const token=JSON.stringify(newData)
        localStorage.setItem('user',token)
        const data=JSON.parse(localStorage.getItem("user"))
                if(newData.password === data.password){
                    dispatch(onLoginSuccess(newData))
                    history.push('/')
                    console.log(`Welcome ${newData.username}`)
                }
    }else if(newData.password === dataUpdate.password){
        dispatch(onLoginSuccess(newData))
        history.push('/')
        console.log(`Welcome ${newData.username}`)
        }   
}
}

export const onSavePassword=(newData,history)=>{
    return(dispatch)=>{
        if(newData){
            localStorage.setItem("user", JSON.stringify(newData));
            dispatch(onSavePasswordSuccess(newData))
            history.push('/')
        }else{
            console.log('Cannot Change Password')
        }
    }
    }

export const onLogout=(history)=>{
    return(dispatch)=>{
        dispatch(onLogoutSuccess());
        history.push('/login')
}
}


export const Fetching=()=>{
    return{
        type:'FETCHING'
    }
}


export const FetchingSuccess=(data)=>{
    return{
        type:'FETCHING_SUCCESS',
        payload:data
    }
}

export const onAddingSuccess=(data)=>{
    return{
        type:'ADDING_SUCCESS',
        payload:data,
    }
}
export const onLoginSuccess=(user)=>{
    return{
        type:'ON_LOGIN_SUCCESS',
        payload:user,
    }
}
export const onSavePasswordSuccess=(user)=>{
    return{
        type:'ON_SAVE_PASSWORD_SUCCESS',
        payload:user,
    }
}
export const onLogoutSuccess=()=>{
    return{
        type:'ON_LOGOUT_SUCCESS',
    }
}