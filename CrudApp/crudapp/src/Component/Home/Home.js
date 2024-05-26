import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Home = () => {

    const [people, setPeople] = useState([]);

    const peopleData = async() => {
        const res = await axios.get("http://localhost:3001/people")
        console.log(res, "res");
        setPeople(res.data)
    }

    useEffect(()=>{
        peopleData();
    },[])

    const deleteData = (id) => {
        axios.delete(`http://localhost:3001/people/${id}`)
        .then((response) => {
            peopleData()
        })
        .catch((error)=>{
            console.log(error, "error")
        })
    }

    return (
        <div>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Student</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all studentes. You can add new studentes, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                            <Link to="/create">Add new Student</Link>
                        </button>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-100 w-full">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                                            >
                                                <span>Firstname</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-lg font-semibold text-gray-700"
                                            >
                                                Lastname
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-lg font-semibold text-gray-700"
                                            >
                                                Gender
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                                            >
                                                Age
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-lg font-semibold text-gray-700"
                                            >
                                                City
                                            </th>
                                            <th scope="cols" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {people.map((person) => (
                                            <tr key={person.id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-md font-medium text-gray-900">{person.Firstname}</div>
                                                            <div className="text-md text-gray-700">{person.Email}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-md text-gray-900 ">{person.Lastname}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-12 py-4">
                                                    <div className="text-md text-gray-900 ">{person.Gender}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                        {person.Age}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-md text-gray-700">
                                                    {person.City}
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-right text-md font-medium">
                                                    <Link  to="/edit" className="text-gray-700">
                                                        Edit /
                                                    </Link>
                                                    <a onClick={()=>deleteData(person.id)} href="#" className="text-gray-700 pl-1">
                                                        Delete
                                                    </a>
                                                </td>
                                                {/* <td className="whitespace-nowrap px-4 py-4 text-right text-md font-medium">
                                                    <a href="#" className="text-gray-700 pl-1">
                                                        Delete
                                                    </a>
                                                </td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
