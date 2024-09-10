import React from 'react';

function CourseTable({ course }) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {course.name}
            </th>
            <td className="px-6 py-4">
                {course.description}
            </td>
            <td className="px-6 py-4">
                {course.userName}
            </td>
            <td className="px-6 py-4">
                {course.rating}
            </td>
            <td>
                {course.status == '0' ? (
                    <p className='text-9xl text-red-700 pb-10'>.</p>
                ) : (
                    <p className='text-9xl text-green-500 pb-10'>.</p>
                )}
            </td>
            <td className="flex gap-10">
                <img src="./edit.png" width={30} height={30} className="mt-16" />
                <p className="text-red-500 mt-16 text-3xl font-bold">X</p>
            </td>
        </tr>
    );
}

export default CourseTable;
