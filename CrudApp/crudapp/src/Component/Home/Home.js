import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

export default function Home() {

    const [data, setData] = useState([]);
    const [searchTerm, setSerchTerm] = useState('');
    // Pagination
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(3);
    const dataPerPage = itemsPerPage;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / dataPerPage);

    // Pagination handlers
    const handlePrevious = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNext = () => {
        setPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePageClick = (pageNumber) => {
        setPage(pageNumber);
    };

    // const handleItemsPerPageChange = (event) => {
    //     const value = parseInt(event.target.value);
    //     setItemsPerPage(value);
    //     setPage(1);
    // };

    const indexOfLastItem = page * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const people = data.slice(indexOfFirstItem, indexOfLastItem);

    // Load users
    const loadUser = async () => {
        const res = await axios.get('http://localhost:3001/people');
        console.log(res.data, "res");
        setData(res.data);
    };

    // second way

    // const loadUser = () => {
    //   axios.get('http://localhost:3001/users')
    //     .then((response) => {
    //       setData(response.data,"Response");
    //     })
    //     .catch((err) => {
    //       console.log(err,'eeeeeeeeeee');
    //     });
    // };

    useEffect(() => {
        loadUser();
    }, []);

    const onDelete = (id) => {
        axios.delete(`http://localhost:3001/people/${id}`)
            .then((response) => {
                loadUser();
            })
            .catch((error) => {
                console.log(error, 'error');
            });
    };

    const filterData = data.filter(user => user.Firstname.toLowerCase().includes(searchTerm.toLowerCase())
        ||
        user.Lastname.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // console.log(filterData)

    return (
        <>
            <section className="mx-auto w-full max-w-7xl px-4 py-4">
                <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold">Employees</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all Student. You can add new Student, edit or delete existing
                            ones.
                        </p>
                    </div>
                    <div className="flex grow justify-end mr-3">
                        <input
                            className="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Serach"
                            onChange={(e) => setSerchTerm(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <Link to="/create">
                            <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Add new Student
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                <span>Firstname</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                Lastname
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                Gender
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                Age
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-md font-semibold text-gray-700"
                                            >
                                                City
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        {(searchTerm === "" ? people : filterData).map((person, index) => (
                                            <tr key={person.id}>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="flex items-center">
                                                        <div className="">
                                                            <div className="text-sm font-medium text-gray-900">{person.Firstname}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="text-sm text-gray-900 ">{person.Lastname}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <div className="text-sm text-gray-900 ">{person.Gender}</div>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4">
                                                    <span className="inline-flex rounded-full bg-green-100 px-4 text-xs font-semibold leading-5 text-green-800">
                                                        {person.Age}
                                                    </span>
                                                </td>
                                                <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                                                    {person.City}
                                                </td>
                                                <td className="whitespace-nowrap flex items-center pl-1 py-4 text-right font-medium">
                                                    <Link to={`/edit/${person.id}`} className="text-gray-600 mr-3 text-xl">
                                                        <FiEdit />
                                                    </Link>
                                                    <Link onClick={() => onDelete(person.id)} to="" className="text-gray-600 text-2xl">
                                                        <MdOutlineDelete />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center pt-6">
                    <button
                        className="mx-2 text-sm font-semibold text-gray-900"
                        onClick={handlePrevious}
                    // disabled={page === 1}
                    >
                        <span className="hidden lg:block">&larr; Previous</span>
                        <span className="block lg:hidden">&larr;</span>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageClick(index + 1)}
                            className={`inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 mr-2 ${page === index + 1 ? 'active-link' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        className="mx-2 text-sm font-semibold text-gray-900"
                    >
                        <span className="hidden lg:block">Next &rarr;</span>
                        <span className="block lg:hidden">&rarr;</span>
                    </button>
                </div>
            </section>
        </>
    );
}