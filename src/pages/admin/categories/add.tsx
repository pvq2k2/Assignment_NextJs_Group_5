import Link from 'next/link'
import React from 'react'
import AdminLayout from '../../../components/Layout/admin'

type Props = {}

const CategoriesAdd = (props: Props) => {
    return (
        <div>
            <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between">
      <h1 className="text-3xl font-bold text-gray-900">
        Category Add
      </h1>
      <Link href="/admin/categories" className="sm:ml-3">
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg className="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Close
        </button>
      </Link>
    </div>
  </header>
            <div className="m-auto max-w-7xl pb-36 mt-5">
            <div className="mt-5 md:mt-0 md:col-span-2">
                <form action="#" id="form-add-product" method="POST" >
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                        <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input type="text" id="name-add-product" className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Name..." />
                                </div>
                            </div>
                           
                            <div>
                                <label htmlFor="imgpreview" className="block text-sm font-medium text-gray-700">
                                    Image Preview
                                </label>
                                <div className="mt-2">
                                    <img width={50} src="" />

                                    <img src="https://cdn.ssstutter.com/products/nCRHI1bpbr1ZIsxG/032022/1647313881009.jpeg" className="w-[20%] rounded-[10px]"/>
                                </div>

                                <div>
                                <label htmlFor="name" className="mt-6 block text-sm font-medium text-gray-700">
                                    Image
                                </label>
                                <div className="mt-2">
                                    <input type="file" id="name-add-product" className="shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md p-2" placeholder="Name..." />
                                </div>
                            </div>

                            </div>
                            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    <svg className="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div></div>
        </div>

    )
}
CategoriesAdd.Layout = AdminLayout
export default CategoriesAdd