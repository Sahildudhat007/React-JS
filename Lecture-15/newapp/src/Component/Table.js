import React, { useState } from 'react';
import '../Component/Table.css';
import Data from './TableData'

const Table = () => {

    const [TableData, setTableData] = useState(Data);
    console.log(Data, setTableData);

  return (
    <div className='table w-[90%] m-auto '>
        <caption className='my-2 text-2xl font-bold text-white'>User Data</caption>
        <table className='table-auto w-full'>
            <thead className=''>
                <tr className=''>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody className=''>
                {TableData.map((cvalue, ind, arr) => {
                    return <>
                    <tr className=''>
                        <td>{cvalue.id}</td>
                        <td>{cvalue.name}</td>
                        <td>{cvalue.email}</td>
                        <td>{cvalue.address.city}</td>
                        <td>{cvalue.phone}</td>
                    </tr>
                    </>
                })}
                
                {/* <tr>
                    <td>02</td>
                    <td>Sahil Dudhat</td>
                    <td>sahil123@gmail.com</td>
                    <td>Surat</td>
                    <td>123456890</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td>Sahil Dudhat</td>
                    <td>sahil123@gmail.com</td>
                    <td>Surat</td>
                    <td>123456890</td>
                </tr>
                <tr>
                    <td>04</td>
                    <td>Sahil Dudhat</td>
                    <td>sahil123@gmail.com</td>
                    <td>Surat</td>
                    <td>123456890</td>
                </tr>
                <tr>
                    <td>05</td>
                    <td>Sahil Dudhat</td>
                    <td>sahil123@gmail.com</td>
                    <td>Surat</td>
                    <td>123456890</td>
                </tr> */}
            </tbody>
        </table>
    </div>
  )
}

export default Table