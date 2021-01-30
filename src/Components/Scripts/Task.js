import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {onFetchingTask,onAddingTask} from '../Redux/Action'

class Task extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[],
            id:201,
            title:'',
            completed:null,
            visible:true,
        }
        this.FetchData()
    }

    FetchData=async()=>{
        const res =await this.props.onFetchingTask()
        this.setState({data:res})
    }

    onDelete=(id)=>{
        console.log(id)
        // return id!==this.props.data.data.id
        const del = this.state.data.filter(e => e.id !== id);
           this.setState({data: del});
    }
    addTask=()=>{
        this.setState({visible:false})
    }
    onHandleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    onAddTask=()=>{
        const {data,id,title,completed} =this.state
        this.setState({id:id+1})
        const d=this.setState({data:[...data,{id,title,completed}]})
    //    const newdata= data.push(d)
        // console.log(d)
        this.props.onAddingTask(d,this.props.history)
    }


    render() {
        const {data,id,title,completed,visible}=this.state
        return (
            <div className='container'>
                <h1 className='text-center my-3'>Task</h1>
                {visible?
                (
                <button className='btn btn-primary my-2' onClick={this.addTask} >Add Task</button> 
                )
            :   (
                <div className='my-3 row'>
                    <div className='col-md-4 '>
                        <input type='text' placeholder='Title' className='form-control' name='title' value={title}  onChange={this.onHandleChange} />
                    </div>
                    <div className='col-md-4 '>
                        <input type='text' placeholder='Completed' className='form-control' name='completed' value={completed}  onChange={this.onHandleChange} />
                    </div>
                    <div className='col-md-4 '>
                        <button className='btn btn-primary form-control' onClick={this.onAddTask}>Add</button>
                    </div>
                </div>
                )}
                <table className=' table table-bordered '>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e,i)=>(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.title}</td>
                                {e.completed?<td>True</td>:<td>False</td>}
                                <td><button className='btn btn-danger' onClick={()=>this.onDelete(e.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    task:state.task,
    user:state.user
})

export default connect(mapStateToProps,{onFetchingTask,onAddingTask})(withRouter(Task))