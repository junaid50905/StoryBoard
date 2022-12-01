import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AllStory from '../../pages/all story/AllStory';
import Signup from '../../components/signup/Signup';
import Signin from '../../components/signin/Signin';
function AllRouters() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AllStory/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </>
  )
}

export default AllRouters
