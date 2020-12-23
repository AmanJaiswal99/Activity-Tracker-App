import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import ActivityList from './component/ActivityList'
import CreateActivity from './component/CreateActivity'
import CreateUser from './component/CreateUser'
import EditActivity from './component/EditActivity'
import About from './component/About'

function App() {
  return (
    <Router>
    <Navbar/>
    <div className='app'>
    <Route path='/' exact component={ActivityList}/>
    <Route path='/create' exact component={CreateActivity}/>
    <Route path='/user' exact component={CreateUser}/>
    <Route path='/edit/:id' exact component={EditActivity}/>
    <Route path='/about' exact component={About}/>
    </div>
    
    </Router>
    
  );
}

export default App;
