import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';

function Add() {
    const [courseName, setCourseName] = useState(''); 
    console.log(courseName);
    
    return (
        <div className=''>
            <h1 className='text-center mt-10 mb-10'>Add courses</h1>
            <div className='flex justify-center'>
                <CustomInput 
                    type='text' 
                    name='Course Name' 
                    value={courseName} 
                    onChange={(e) => setCourseName(e.target.value)} 
                    placeholder='Enter Your Course Name'  
                />
            </div>
        </div>
    );
}

export default Add;
