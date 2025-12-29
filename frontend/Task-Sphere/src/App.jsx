import React from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Dashboard from './pages/user/UserDashboard';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import ManageTasks from './pages/Admin/Managetasks';
import CreateTask from './pages/Admin/Createtask';
import ManageUsers from './pages/Admin/ManageUsers';
import UserDashboard from './pages/user/UserDashboard';
import ViewTaskDetails from './pages/user/ViewTaskDetails';
import MyTasks from './pages/user/MyTasks';
import PrivateRoute from './routes/PrivateRoute';

const App  = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signUp' element={<Signup />} />
          {/* Admin Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}  >
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/tasks' element={<ManageTasks />} />
          <Route path='/admin/create-task' element={<CreateTask />} />
          <Route path='/admin/Users' element={<ManageUsers />} />
          </Route>
          
          {/* User Routes */}
          <Route element={<PrivateRoute allowedRoles={["admin"]}/>}  >
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/tasks' element={<MyTasks />} />
          <Route path='/user/task-details/:id' element={<ViewTaskDetails/>} />

          </Route>


        </Routes>
      </Router>


        
      
    </div>

  )
    
  
}

export default App