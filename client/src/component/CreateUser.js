import React, { useState } from 'react'
import Axios from 'axios'

function CreateUser() {
    const [username, setUsername] = useState('')



    function onChangeUsername(e){
        setUsername(e.target.value)
    }


    function onSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
           }
           console.log(username)
      Axios.post('https://activitytrackerbyaman.herokuapp.com/users/add',user)
      setUsername('')
      window.location = '/'
    }
 

   
    return (
        <div>
         <h3>Create New User</h3>
         <form onSubmit={onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input type="text"
                required
                className="form-control"
                value={username}
                onChange={onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
        </div>
    )
}

export default CreateUser
