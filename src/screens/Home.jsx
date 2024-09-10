import React from 'react'
import { useEffect, useState } from 'react';
import { getAllCourses } from '../api/getCourses';
import CourseTable from '../components/CourseTable';
import { useNavigate } from 'react-router-dom';


function Home() {

    const [courses, setCourses] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        getAllCourses().then(courses => setCourses(courses.courseReviews)).finally(console.log(courses.courseReviews))
    }, [])

    return (
        <div className='mt-28'>

            <div className='flex justify-center gap-20'>
                <h1 className='text-center text-4xl pb-20 font-bold'> Courses</h1>
                <button onClick={()=>navigate('/add')}  type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 h-10">Add</button>

            </div>

            <div class="relative overflow-x-auto m-10">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Course name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Author
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Rating
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {
                        courses.map(course => (
                            <CourseTable course={course} />
                        ))
                    }

                </table>
            </div>

        </div>)
}

export default Home