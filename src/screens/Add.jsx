import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'

function Add() {
    const [couseName,setCouseName]=useState('');
    console.log(couseName)
  return (
    <div className='' >
         <h1 className='text-center mt-10 mb-10'>Add courses</h1>

         <div className='flex justify-center'>
         <CustomInput type='text' name='Course Name' value={couseName} onChange={(e)=>setCouseName(e.target.value)} placeholder='Enter Your CourseName'  />
         </div>
    </div>
  )
}

export default Add