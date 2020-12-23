import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateActivity() {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])

    useEffect(() => {
        Axios.get('https://activitytrackerbyaman.herokuapp.com/users/')
        .then(res=>{
            if(res.data.length >0){
                setUsers(res.data.map(item=> item.username))
                setUsername(res.data[0].username)
            }
           })
        Axios.get('https://activitytrackerbyaman.herokuapp.com/activities')
        .then(res=>{
            console.log(res.data)
        })
          
  }, [])

   

    function onChangeUsername(e){
        setUsername(e.target.value)
    }

    function onChangeDate(date){
        setDate(date)
    }

    function onChangeDescription(e){
        setDescription(e.target.value)
    }

    function onSubmit(e){

        e.preventDefault();

        const activity = {
            username: username,
            description: description,
            date: date
            
        }
        Axios.post('https://activitytrackerbyaman.herokuapp.com/activities/add',activity)
        .then(res=> console.log(res.data))
        
        setUsername('')
       
        setDate(new Date())
        setDescription('')
        window.location ='/'
    }


    return (
        <div>
              <h3>Create New Activity</h3>
             <form onSubmit={onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select useref="userInput"
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}>
              {
                users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>Activity: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={onChangeDescription}
              />
        </div>
       
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={date}
              
              onChange={onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Activity Log" className="btn btn-primary" />
        </div>
      </form>
        </div>
    )
}

export default CreateActivity
