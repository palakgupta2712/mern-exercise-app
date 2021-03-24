import React, { Component } from 'react'

class CreateUser extends Component{

    constructor(props){
        super(props)
        this.state ={
            userName : '',
            age : '',
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e){
        this.setState({
            userName : e.target.value
        })
    }

    onChangeAge(e){
        this.setState({
            age : e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault();
        const newUser = {
            userName : this.state.userName,
            age : this.state.age
        }
        console.log(newUser);
        this.setState({
            userName : '',
            age : '',
        })
    }

    render(){
        return(
            <div className="container">
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Username: </label>
                    <input  type="text"
                            required
                            placeholder="Enter User Name"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                        />
                    </div> 
                    <div className="form-group"> 
                    <label>Age: </label>
                    <input  type="text"
                            required
                            className="form-control"
                            value={this.state.age}
                            onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div> 
        )
    }
}
export default CreateUser
