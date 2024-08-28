import React from 'react'
import data from '../records.json'

const Table = () => {

    
        const DisplayData=data.map(
            (info)=>{
                return(
                    <tr>
                        <td>{info.id}</td>
                        <td>{info.name}</td>
                        <td>{info.fullName}</td>
                    </tr>
                )
            }
        )
     
        return(
            <div>
                <table class="table table-striped" border={10}>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Full Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayData}
                    </tbody>
                </table>
            </div>
        )
     }

export default Table;