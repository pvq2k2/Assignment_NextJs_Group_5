/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import AdminLayout from '../../../components/Layout/admin';

const UserManager = () => {
    return (
        <div>
            <table
                className='min-w-full divide-y divide-gray-200'
                id='cate__list-table'
            >
                <thead className='bg-gray-50'>
                    <tr>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                            STT
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                            User
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                            Vai trò
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                            Ngày tạo
                        </th>
                        <th
                            scope='col'
                            className='px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    <tr>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                            1
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                            <div className='flex items-center'>
                                <div className='flex-shrink-0 h-10 w-10'>
                                    <div className='w-10 h-10 relative rounded-full object-cover'>
                                        <img src="https://res.cloudinary.com/assignment22/image/upload/v1656862542/front-end-developers-openings_680x428_f5hyez.gif" alt="" />
                                    </div>
                                </div>
                                <div className='ml-4'>
                                    <div className='text-sm font-medium text-gray-900'>đào ngọc linh</div>
                                    <div className='text-sm text-gray-500'>daongoclinh22@gmail.com</div>
                                </div>
                            </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                            Admin (User)
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-blue-500'>
                            8/7/2022
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                            <Link href={`/`}>
                                <span className='h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                    Edit
                                </span>
                            </Link>
                            <button className='h-8 inline-flex items-center px-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-3'>
                                Delete
                            </button>
                        </td>
                    </tr>

                    
                    
                </tbody>
            </table>
        </div>
    );
};
UserManager.Layout = AdminLayout;
export default UserManager;
