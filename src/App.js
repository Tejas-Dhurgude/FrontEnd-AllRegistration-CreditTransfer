import React from 'react'
import { InstituteRegister,StudentRegister } from './Pages'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import InstituteLogin from './Pages/InstituteLogin';
import StudentLogin from './Pages/StudentLogin';
import Universitylist from './Pages/University_list';
import StudentList from './Pages/StudentList';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InstituteRegister />,
    },
    {
      path:"/student",
      element:<StudentRegister/>
    },
    {
      path:'/institutelogin',
      element:<InstituteLogin/>
    },
    {
      path:'/studentlogin',
      element:<StudentLogin/>
    },
    {
      path:'/universitylist',
      element:<Universitylist/>
    },
    {
      path:'/studentlist',
      element:<StudentList/>
    },
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
