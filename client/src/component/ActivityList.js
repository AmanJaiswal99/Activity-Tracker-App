import React,{useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'


function ActivityList() {
    const [activities, setActivities] = useState([])

    useEffect(() => {
        Axios.get("https://activitytrackerbyaman.herokuapp.com/activities/")
        .then(res=>{
            const newActivity = res.data
            newActivity.reverse()
         
            setActivities(newActivity)
        })
        }, [])

        function Td(props){
            return(
                <tr>
                    <td>{props.activity.username}</td>
                    <td>{props.activity.description}</td>
                   
                    <td>{props.activity.date.substring(0,10)}</td>
                    <td>
              <Link to={"/edit/"+props.activity._id}>edit</Link> | <a href="#" onClick={() => { deleteActivity(props.activity._id) }}>delete</a>
            </td>
                </tr>
            )
        }

        function deleteActivity(id) {
            Axios.delete(`https://activitytrackerbyaman.herokuapp.com/activities/`+id)
              .then(response => { console.log(response.data)});
                
              setActivities(activities.filter(el => el._id !== id))
            
          }

    function putActivity(){
    
        return activities.map(item => {
              return <Td activity={item}/>
             })
     }


    return (
        <div>
                <h3>Logged Activities</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {putActivity()}
         </tbody>
        </table>
        </div>
    )
}

export default ActivityList
